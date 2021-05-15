import { useState, useEffect, Fragment } from 'react';
import './App.css';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import firebase from './firebase.js'

function App() {

  const dbRefToRead = firebase.database().ref('/toRead');
  const dbRefCompleted = firebase.database().ref('/completed');

  const [booksToRead, setBooksToRead] = useState([]);
  const [booksCompleted, setBooksCompleted] = useState([]);

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

      <BookList heading={`Books To Read`} list={booksToRead}/>
      <BookList heading={`Books Completed`} list={booksCompleted}/>

      <AddBookForm listToPush={dbRefToRead}/>

    </Fragment>
  );
}

export default App;

