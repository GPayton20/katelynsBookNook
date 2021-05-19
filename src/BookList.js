import ListItem from './ListItem';

const BookList = ({ facing, heading, list, completed, markAsRead, deleteBook, children }) => {
  return (
    <div className={`list-card-side ${completed ? 'flipped' : ''} ${facing ? 'facing' : ''}`}>
      <h2>{heading}</h2>

      {list.length === 0 ? <p>You have not added any books.</p> : null}
      
      <ul>
        {list.map(book => {
          return (
            <ListItem 
              title={book.title} 
              author={book.author} 
              key={book.key}
              id={book.key}
              completed={completed} 
              markAsRead={markAsRead}
              deleteBook={deleteBook}
            />
            // <li key={book.id}>
            //   <p className="title">{book.title}</p>
            //   <p className="author">by {book.author}</p>
            //   <div className="container">
            //     <button onClick={() => deleteBook(book.id, completed)}>Delete</button>
            //     {!completed && <button onClick={() => markAsRead(book.title, book.author, book.id)}
            //     >Read</button>}
            //   </div>
            // </li>
          )
        })}
      </ul>

      {children}

    </div>
  )
}

export default BookList;