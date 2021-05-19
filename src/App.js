import { useState, useEffect, Fragment } from 'react';
import './styles/App.css';
import firebase from './config/firebase.js'
import Header from './Header';
import NavBar from './NavBar';
import NavButton from './NavButton';
import AddBookForm from './AddBookForm';
import Card from './Card'
import ReadingGoal from './ReadingGoal';
import SetGoalForm from './SetGoalForm';
import Footer from './Footer';

export const dbRefToRead = firebase.database().ref('/toRead');
export const dbRefCompleted = firebase.database().ref('/completed');
export const dbRefGoal = firebase.database().ref('/goal');

function App() {

  const [booksToRead, setBooksToRead] = useState([]);
  const [booksCompleted, setBooksCompleted] = useState([]);
  const [addingBooks, setAddingBooks] = useState(false);
  const [settingGoal, setSettingGoal] = useState(false);
  const [navDisabled, setNavDisabled] = useState(false);
  const [userGoal, setUserGoal] = useState(1);
  
  const updateList = response => {
    const newList = [];
    
    response.forEach(child => {
      const newBook = child.val();
      newList.push( 
        {
          // Retrieve random key from Firebase
          key: child._delegate.key,
          title: newBook.title, 
          author: newBook.author
        } 
      );
    });
   
    return newList;
  }
  
  useEffect( () => {
    dbRefToRead.on('value', response => setBooksToRead(updateList(response)));
    dbRefCompleted.on('value', response => setBooksCompleted(updateList(response)));
    dbRefGoal.on('value', response => setUserGoal(response.val()));
  }, []);

  useEffect( () => {
    if (addingBooks || settingGoal) {
      setNavDisabled(true);
    } else {
      setNavDisabled(false);
    }
  }, [addingBooks, settingGoal] )

  // Add book to To-Read List
  const addBookToRead = (title, author) => {
    dbRefToRead.push({title, author});
  }

  // Update user's current reading goal
  const setNewGoal = newGoal => {
    setUserGoal(newGoal);
    dbRefGoal.set(newGoal);

    setSettingGoal(false);
  }

  
  return (
    <Fragment>
      
      <Header>
        <NavBar>
          <NavButton 
            className={`${navDisabled ? "disabled" : null} ${addingBooks ? "active" : null}`}
            text="Add books"
            onClick={ () => setAddingBooks(!addingBooks)} />
          <NavButton 
            className={`${navDisabled ? "disabled" : null} ${settingGoal ? "active" : null}`}
            text={`Set goal (${userGoal})`} 
            onClick={ () => setSettingGoal(!settingGoal)} />
        </NavBar>
      </Header>

      <div className="wrapper">
        <main>
          {/* {currentView == 'addingBook' && <AddBookForm
            addBook={addBookToRead}
            onSubmit={() => setAddingBooks(!addingBooks)} /> } */}
          
          {addingBooks
            ? <AddBookForm 
                addBook={addBookToRead} 
                onSubmit={() => setAddingBooks(!addingBooks)}/>
            : settingGoal
              ? <SetGoalForm
                  currentGoal={userGoal}
                  onSubmit={setNewGoal}
                  />
              : <Fragment>
                
                <ReadingGoal booksCompleted={booksCompleted} goal={userGoal}/>
                <Card booksToRead={booksToRead} booksCompleted={booksCompleted} />
              
              </Fragment>
          }

        </main>
      </div>

      <Footer />

    </Fragment>
  );
}

export default App;

