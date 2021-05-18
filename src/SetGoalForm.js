import { useState } from 'react';

const SetGoalForm = ({ userGoal, setUserGoal, setSettingGoal }) => {

  const [goalInput, setGoalInput] = useState(userGoal); 

  const handleGoalInputChange = event => setGoalInput(event.target.value);
  
  const setGoal = (event) => {
    event.preventDefault();

    setUserGoal(goalInput);

    setSettingGoal(false);
  }

  return (
      <form action="submit" className="set-goal-form" onSubmit={setGoal}>
      <h2>How many books do you want to read?</h2>
        <input 
          type="number" 
            min="1" 
            step="1" 
            value={goalInput}
            onChange={handleGoalInputChange}/>
        <button>Set goal</button>
      </form>
  )
}

export default SetGoalForm;