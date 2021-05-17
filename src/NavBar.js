const NavBar = ({ addingBooks, setAddingBooks }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => setAddingBooks(!addingBooks)}>
            Add books
          </button>
        </li>
        <li>
          <button>
            Set Goal
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;