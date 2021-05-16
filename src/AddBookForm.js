import { useState } from 'react';
import FormInput from './FormInput';

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

    setTitleInput('');
    setAuthorInput('');
  }

  return (
    <form action="submit" onSubmit={handleAddBook}>
      
      <FormInput 
        inputID="title"
        value={titleInput}
        onChange={handleInputChange}
      />
      
      <FormInput 
        inputID="author"
        value={authorInput}
        onChange={handleInputChange}
      />

      <button>Add book</button>
    </form>
  )
}

export default AddBookForm;