import { useState } from 'react';

const AddBookForm = ({ listToPush }) => {

  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  const handleInputChange = (event) => {
    if (event.target.id === 'title') {
      setTitleInput(event.target.value);
    } else {
      setAuthorInput(event.target.value);
    }
  }

  const handleAddBook = (event) => {
    event.preventDefault();

    listToPush.push({title: titleInput, author: authorInput});
  }

  return (
    <form action="submit" onSubmit={handleAddBook}>
      
      <label htmlFor="title">Title: </label>
      <input 
        type="text" 
        id="title" 
        className="add-book-input"
        value={titleInput}
        onChange={handleInputChange}
      />
      
      <label htmlFor="author">Author: </label>
      <input 
        type="text" 
        id="author" 
        className="add-book-input"
        value={authorInput}
        onChange={handleInputChange}
      />

      <button>Add book</button>
    </form>
  )
}

export default AddBookForm;