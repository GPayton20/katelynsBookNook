import { useState, useEffect, Fragment } from 'react';
import './App.css';
import firebase from './firebase.js'

function App() {

  const dbRefToRead = firebase.database().ref('/toRead');
  const dbRefCompleted = firebase.database().ref('/completed');

  const [booksToRead, setBooksToRead] = useState([]);
  const [booksCompleted, setBooksCompleted] = useState([]);
  
  useEffect( () => {
    dbRefToRead.on('value', response => console.log(response.val()));
    dbRefCompleted.on('value', response => console.log(response.val()));
  }, []);
  
  return (
    <Fragment>
      <h1>Katelyn's Reading List</h1>
    </Fragment>
  );
}

export default App;
