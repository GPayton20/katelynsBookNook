const ListItem = ( {title, author} ) => {
  return (
    <li key={title}>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
    </li>
  )
}

export default ListItem;