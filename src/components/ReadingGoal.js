
const ReadingGoal = ({ booksCompleted, goal }) => {

  const progress = Math.min((booksCompleted.length / goal), 1);

  return (
    <div className="progress-container">
      {progress < 1
        ? <p>You have read <span className="text-block">{booksCompleted.length}</span> books. Keep it up!</p>
      : <p>You have reached your goal! Great job!</p>
      }
      
      <div className="progress-tracker">
        <div className="progress" style={ {transform: `scaleX(${progress})`} }></div>
      </div>
    </div>
  )

}
export default ReadingGoal;