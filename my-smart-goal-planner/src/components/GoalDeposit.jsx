import { useState } from 'react'

function GoalDeposit({ goals, onDeposit }) {
  const [amount, setAmount] = useState('')
  const [selectedGoalId, setSelectedGoalId] = useState('')

  function handleDeposit(e) {
    e.preventDefault()

    const goal = goals.find((g) => g.id === selectedGoalId)
    if (!goal) return

    const updatedAmount = goal.savedAmount + Number(amount)

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: updatedAmount })
    })
      .then((res) => res.json())
      .then(() => {
        onDeposit(goal.id, { savedAmount: updatedAmount }) // ✅ call correctly
        setAmount('')
        setSelectedGoalId('')
      })
  }

  return (
    <form onSubmit={handleDeposit}>
      <h3>Make a Deposit</h3>
      <select value={selectedGoalId} onChange={(e) => setSelectedGoalId(e.target.value)} required>
        <option value="">-- Choose Goal --</option>
        {goals.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Deposit Amount"
        required
      />
      <button type="submit">Deposit</button>
    </form>
  )
}

export default GoalDeposit
