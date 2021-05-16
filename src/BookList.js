import ListItem from './ListItem';

const BookList = ( {heading, list, completed} ) => {
  return (
    <div className={`list-card-side ${completed ? 'flipped' : ''}`}>
      <h2>{heading}</h2>
      
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
    </div>
  )
}

export default BookList;