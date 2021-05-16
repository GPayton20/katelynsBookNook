import { useState, useEffect, Fragment } from 'react';
import './styles/App.css';
import AddBookForm from './AddBookForm';
import firebase from './config/firebase.js'
import Card from './Card'

export const dbRefToRead = firebase.database().ref('/toRead');
export const dbRefCompleted = firebase.database().ref('/completed');

function App() {

  const [booksToRead, setBooksToRead] = useState([]);
  const [booksCompleted, setBooksCompleted] = useState([]);

  const [userGoal, setUserGoal] = useState(3);
  // todo function to update user's reading goal

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
      <h1>Katelyn's Reading List</h1>

      <main>
        <div className="wrapper">
          
          <Card booksToRead={booksToRead} booksCompleted={booksCompleted}/>

          <AddBookForm listToPush={dbRefToRead}/>
        </div>
      </main>

    </Fragment>
  );
}

export default App;

