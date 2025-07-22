import { useState } from 'react';

function GoalItem({ goal, deleteGoal, updateGoal }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: goal.name,
    category: goal.category,
    targetAmount: goal.targetAmount,
    deadline: goal.deadline,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateGoal(goal.id, formData);
    setIsEditing(false);
  }

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
          />
          <input
            type="number"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleChange}
            placeholder="Target Amount"
            required
          />
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h3>{goal.name}</h3>
          <p>Category: {goal.category}</p>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
          <p>Deadline: {goal.deadline}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteGoal(goal.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default GoalItem;
