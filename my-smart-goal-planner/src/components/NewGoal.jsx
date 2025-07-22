import { useState } from 'react'

function NewGoal({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newGoal = {
      ...formData,
      targetAmount: Number(formData.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split('T')[0]
    }

    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGoal)
    })
      .then((res) => res.json())
      .then((data) => {
        onAddGoal(data) // ✅ use the correct prop
        setFormData({ name: '', targetAmount: '', category: '', deadline: '' })
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Goal</h3>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Goal Name" required />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Create Goal</button>
    </form>
  )
}

export default NewGoal
