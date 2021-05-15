import { useState, useEffect, Fragment } from 'react';
import './App.css';
import firebase from './firebase.js'

function App() {

  const dbRef = firebase.database().ref();

  const [booksToRead, setBooksToRead] = useState([]);
  const [booksCompleted, setBooksCompleted] = useState([]);
  return (
    <Fragment>
      <h1>Katelyn's Reading List</h1>
    </Fragment>
  );
}

export default App;
