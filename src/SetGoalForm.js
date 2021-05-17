const SetGoalForm = () => {
  return (
      <form action="submit" className="set-goal-form">
      <h2>How many books do you want to read?</h2>
        <input type="number" min="1" step="1" defaultValue="1"/>
        <button>Set goal</button>
      </form>
  )
}

export default SetGoalForm;