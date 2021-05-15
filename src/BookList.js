import { Fragment } from 'react';
import ListItem from './ListItem';

const BookList = ( {heading, list} ) => {
  return (
    <Fragment>
      <h2>{heading}</h2>
      <ul>
        {list.map(book => {
          return (
            <ListItem title={book.title} author={book.author} />
          )
        })}
      </ul>
    </Fragment>
  )
}

export default BookList;