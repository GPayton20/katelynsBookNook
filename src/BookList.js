import { Fragment } from 'react';

const BookList = ( {heading, list} ) => {
  return (
    <Fragment>
      <h2>{heading}</h2>
      <ul>
        {list.map(book => {
          return (
            <li key={book.title}>
              <p>{book.title}</p>
              <p>by {book.author}</p>
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

export default BookList;