import { dbRefToRead , dbRefCompleted } from './App.js'

const ListItem = ( {title, author, id, completed} ) => {

  const handleDeleteBook = (id, completed) => {
    if (completed) {
      dbRefCompleted.child(id).remove();
    } else {
      dbRefToRead.child(id).remove();
    }
  }

  const handleMarkAsRead = (title, author, id) => {
    const completedBook = {
      title: title,
      author: author
    }

    dbRefCompleted.push(completedBook);

    console.log(id);
    // dbRefToRead.child(id).remove();

  }

  return (
    <li key={id}>
      <p className="title">{title}</p>
      <p className="author">by {author}</p>
      <button onClick={ () => handleDeleteBook(id, completed)}>Delete book</button>
      {completed 
        ? null 
        : <button onClick={ () => handleMarkAsRead(title, author, id)}>Mark as read</button> }
    </li>
  )
}

export default ListItem;