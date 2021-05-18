
const ReadingGoal = ({ booksCompleted, goal }) => {

  const progress = Math.min((booksCompleted.length / goal), 1);

  return (
    <>
      {progress < 1
      ? <p>You have read {booksCompleted.length} books. Keep it up!</p>
      : <p>You have reached your goal. Great job!</p>
      }
      
      <div className="progress-tracker">
        <div className="progress" style={ {transform: `scaleX(${progress})`} }></div>
      </div>
    </>
  )

}
export default ReadingGoal;