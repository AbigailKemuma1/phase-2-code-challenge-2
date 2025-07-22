import GoalItem from "./GoalItem"; 

function GoalList({ goals, onDeleteGoal, onUpdateGoal }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.length === 0 ? (
        <p>No goals added yet.</p>
      ) : (
        goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
            deleteGoal={onDeleteGoal}
            updateGoal={onUpdateGoal}
          />
        ))
      )}
    </div>
  );
}

export default GoalList;

