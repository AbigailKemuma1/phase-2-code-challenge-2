import GoalItem from './GoalItem'

function GoalsSection({ goals, updateGoal, deleteGoal }) {
  return (
    <div>
      <h2>All Goals</h2>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          updateGoal={updateGoal}
          deleteGoal={deleteGoal}
        />
      ))}
    </div>
  )
}

export default GoalsSection

