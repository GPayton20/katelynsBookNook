import { Fragment } from 'react';
import ListItem from './ListItem';

const BookList = ( {heading, list, completed, goal} ) => {
  return (
    <Fragment>
      <h2>{heading}</h2>
      
      {completed 
        ? <h3>You have read {list.length} books! {goal - list.length} to go!</h3> 
        : null
      }
      
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
    </Fragment>
  )
}

export default BookList;