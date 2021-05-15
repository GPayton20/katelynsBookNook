const ListItem = ( {title, author, id, completed} ) => {
  return (
    <li key={id}>
      <p className="title">{title}</p>
      <p className="author">by {author}</p>
      <button>Delete book</button>
      {completed ? null : <button>Mark as read</button> }
    </li>
  )
}

export default ListItem;