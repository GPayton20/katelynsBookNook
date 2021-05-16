import { useState, useEffect, Fragment } from 'react';
import './styles/App.css';
import firebase from './config/firebase.js'
import Header from './Header';
import AddBookForm from './AddBookForm';
import Card from './Card'
import ReadingGoal from './ReadingGoal';
import Footer from './Footer';

export const dbRefToRead = firebase.database().ref('/toRead');
export const dbRefCompleted = firebase.database().ref('/completed');

function App() {

  const [booksToRead, setBooksToRead] = useState([]);
  const [booksCompleted, setBooksCompleted] = useState([]);
  const [addingBooks, setAddingBooks] = useState(false);

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

  }, []);
  
  return (
    <Fragment>
      
      <Header text={`Katelyn's reading list`} />

      <main>
        <div className="wrapper">

          {addingBooks
            ? <AddBookForm listToPush={dbRefToRead} />
            : <Fragment>
                
                <ReadingGoal booksCompleted={booksCompleted} />
                <Card booksToRead={booksToRead} booksCompleted={booksCompleted} />
              
              </Fragment>
          }

        </div>
      </main>

      <Footer />

    </Fragment>
  );
}

export default App;

