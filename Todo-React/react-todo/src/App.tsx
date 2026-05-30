import { useState } from 'react'

type Priority = 'Low' | 'Medium' | 'High'

interface Task {
  id: number
  title: string
  priority: Priority
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState<Priority>('Low')
  const [isCompleted, setIsCompleted] = useState(false)
  const [nextId, setNextId] = useState(1)

  const addTask = () => {
    const newTask: Task = {
      id: nextId,
      title,
      priority,
      isCompleted,
    }

    setTasks((current) => [...current, newTask])
    setNextId((current) => current + 1)
    setTitle('')
    setPriority('Low')
    setIsCompleted(false)
  }

  const deleteTask = (id: number) => {
    setTasks((current) => current.filter((task) => task.id !== id))
  }


  return (
    <>
      <h1>Todo App</h1>
      <div>
        <label>
          Title
          <input value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label> <br/>
          Priority
          <select value={priority} onChange={(event) => setPriority(event.target.value as Priority)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label> <br/>
        <label className="checkbox-label">
           Completed
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(event) => setIsCompleted(event.target.checked)}
          />
         
        </label>  <br/>
        <button type="button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <p>{tasks.length === 0 ? 'No tasks yet.' : `Total tasks: ${tasks.length}`}</p>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <strong>{task.title}</strong>
              <div>ID: {task.id}</div>
              <div>Priority: {task.priority}</div>
              <div>Completed: {task.isCompleted ? 'Yes' : 'No'}</div>
            </div>
            <div className="task-buttons">
              
              <button type="button" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App