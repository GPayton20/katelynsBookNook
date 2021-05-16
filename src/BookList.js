import ListItem from './ListItem';

const BookList = ( {heading, list, completed, children} ) => {
  return (
    <div className={`list-card-side ${completed ? 'flipped' : ''}`}>
      <h2>{heading}</h2>

      {list.length === 0 ? <p>You have not added any books.</p> : null}
      
      <ul>
        {list.map(book => {
          return (
            <ListItem 
              title={book.title} 
              author={book.author} 
              id={book.key}
              completed={completed} 
            />
          )
        })}
      </ul>

      {children}

    </div>
  )
}

export default BookList;