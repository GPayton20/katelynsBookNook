// import { dbRefToRead , dbRefCompleted } from './App.js'

const ListItem = ({ title, author, id, completed, markAsRead, deleteBook }) => {

  // const handleDeleteBook = (id, completed) => {
  //   if (completed) {
  //     dbRefCompleted.child(id).remove();
  //   } else {
  //     dbRefToRead.child(id).remove();
  //   }
  // }

  // const handleMarkAsRead = (title, author, id) => {
  //   const completedBook = {
  //     title: title,
  //     author: author
  //   }

  //   dbRefCompleted.push(completedBook);

  //   dbRefToRead.child(id).remove();
  // }

  return (
    <li key={id}>
      <p className="title">{title}</p>
      <p className="author">by {author}</p>
      <div className="container">
        <button onClick={ () => deleteBook(id, completed)}>Delete</button>
        {!completed && <button onClick={() => markAsRead(title, author, id)}
      >Read</button>}
      </div>
    </li>
  )
}

export default ListItem;