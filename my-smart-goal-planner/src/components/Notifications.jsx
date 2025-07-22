import { differenceInDays, parseISO } from 'date-fns'

function Notifications({ goals }) {
  const totalGoals = goals.length
  const totalSaved = goals.reduce((acc, goal) => acc + goal.savedAmount, 0)
  const completed = goals.filter((g) => g.savedAmount >= g.targetAmount).length

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {completed}</p>
      <ul>
        {goals.map((g) => {
          const daysLeft = differenceInDays(parseISO(g.deadline), new Date())
          let status = ''
          if (daysLeft < 0) status = 'Overdue'
          else if (daysLeft <= 30) status = 'Near Deadline'
          else if (g.savedAmount >= g.targetAmount) status = 'Done'

          return (
            <li key={g.id}>
              {g.name} - {daysLeft} days left {status && `(${status})`}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Notifications
