const FormInput = ({ inputID, value, onChange }) => {
  return (
    <>
      <label htmlFor={inputID}>{inputID}: </label>
      <input 
        type="text" 
        id={inputID} 
        className="add-book-input"
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default FormInput;