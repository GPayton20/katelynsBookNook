import { useState } from 'react';

const ReadingGoal = ({ booksCompleted }) => {

  const [userGoal, setUserGoal] = useState(3);

  // const progress = Math.min((booksCompleted.length / userGoal) * 100, 100);
  const progress = Math.min((booksCompleted.length / userGoal), 1);

  console.log(progress);

  return (
    <>
      <p>{booksCompleted.length} / {userGoal}</p>  
      <div className="progress-tracker">
        <div className="progress" style={ {transform: `scaleX(${progress})`} }></div>
      </div>
    </>
  )

}
export default ReadingGoal;