import { useState, useEffect, Fragment } from 'react';
import './App.css';
import firebase from './firebase.js'

function App() {

  const dbRefToRead = firebase.database().ref('toRead');
  const dbRefCompleted = firebase.database().ref('/completed');

  const [booksToRead, setBooksToRead] = useState([]);
  const [booksCompleted, setBooksCompleted] = useState([]);

  const updateList = response => {
    const newList = [];
    
    response.forEach(child => {
      // console.log(child.val());
      const newBook = child.val();
      newList.push( {title: newBook.title, author: newBook.author} );
    });
   
    console.log(newList)
    return newList;
   
    // const data = response.val();

    // console.log(dbRefToRead)
    // console.log(data)

  }
  
  useEffect( () => {
    // dbRefToRead.on('value', response => console.log(response.val()));
    // dbRefCompleted.on('value', response => console.log(response.val()));

    dbRefToRead.on('value', response => setBooksToRead(updateList(response)));
  }, []);
  
  return (
    <Fragment>
      <h1>Katelyn's Reading List</h1>

      <ul>
        {booksToRead.map(book => {
          return (
            <li>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </li>
          )
        })}
      </ul>
    </Fragment>
  );
}

export default App;
