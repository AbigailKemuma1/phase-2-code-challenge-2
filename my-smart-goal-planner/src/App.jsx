import { useEffect, useState } from 'react';
import './App.css';
import NewGoal from './components/NewGoal';
import GoalDeposit from './components/GoalDeposit';
import GoalList from './components/GoalList';
import Notifications from './components/Notifications';

const API_URL = 'http://localhost:3000/goals';

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals on initial load
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error('Failed to fetch goals:', err));
  }, []);

  // Add new goal
  function handleAddGoal(newGoal) {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((savedGoal) => setGoals((prev) => [...prev, savedGoal]));
  }

  // Delete a goal
  function handleDeleteGoal(id) {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setGoals((prev) => prev.filter((goal) => goal.id !== id));
    });
  }

  // Update a goal
  function handleUpdateGoal(id, updates) {
    fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prev) =>
          prev.map((goal) => (goal.id === id ? updatedGoal : goal))
        );
      });
  }

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <NewGoal onAddGoal={handleAddGoal} />
      <GoalDeposit goals={goals} onDeposit={handleUpdateGoal} />
      {/* ✅ Fixed props passed to GoalList */}
      <GoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
        onUpdateGoal={handleUpdateGoal}
      />
      <Notifications goals={goals} />
    </div>
  );
}

export default App;
