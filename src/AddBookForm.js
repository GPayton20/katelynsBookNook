const AddBookForm = () => {
  return (
    <form action="submit">
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" className="add-book-input"/>
      
      <label htmlFor="author">Author: </label>
      <input type="text" id="author" className="add-book-input"/>

      <button type="submit">Add book</button>
    </form>
  )
}

export default AddBookForm;