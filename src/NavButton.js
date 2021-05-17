const NavButton = ({ text, onClick }) => {
  return (
    <li>
      <button onClick={onClick}>
        {text}
      </button>
    </li>
  )
}

export default NavButton;