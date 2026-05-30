"use client";
import { useEffect, useState } from "react";

type Priority = 'Low' | 'Medium' | 'High'
type Completed = 'Yes' | 'No'

interface Task {
  id: number
  title: string
  priority: Priority
  isCompleted: Completed
}

export default function Home() {
  const[tasks,setTasks] = useState<Task[]>([]);
  const[newTitle, setNewTitle] = useState("");
  const[newPriority,setNewPriority] = useState<Priority>("Low");
  const[newCompleted,setNewCompleted] = useState<Completed>("No");
  const[editId, setEditId] = useState("");
  const[editTitle, setEditTitle] = useState("");
  const[editPriority,setEditPriority] = useState<Priority>("Low");
  const[editCompleted,setEditCompleted] = useState<Completed>("No");
  const[deleteId, setDeleteId] = useState("");

  useEffect(() => {
    const loadTasks = new Promise<Task[]>((resolve) => {
      resolve([]);
    })
    loadTasks.then((items) => {
      setTasks(items);
    });
  }, [])

  const addTask = () => {
    const nextId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
    const task: Task = {
      id: nextId,
      title: newTitle,
      priority: newPriority,
      isCompleted: newCompleted,
  }
    setTasks([...tasks, task]);
    setNewTitle("");
    setNewPriority("Low");
    setNewCompleted("No");
  }

  const editTask = () => {
    const id = Number(editId);
    if (!id) {
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: editTitle, priority: editPriority, isCompleted: editCompleted }
          : task
      )
    )
    setEditId("");
    setEditTitle("");
    setEditPriority("Low");
    setEditCompleted("No");
  };

  const deleteTask = () => {
    const id = Number(deleteId);
    if (!id) {
      return;
    }

    setTasks(tasks.filter((task) => task.id !== id));
    setDeleteId("");
  };

  return (
    <>
      <h1>Simple Todo</h1>

      <label>
        Add title:
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </label>
      <br/>
      <label>
        Priority:
        <select value={newPriority} onChange={(e) => setNewPriority(e.target.value as Priority)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <br/>
      <label>
        Completed:
        <select value={newCompleted} onChange={(e) => setNewCompleted(e.target.value as Completed)}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </label>
      <br/>
      <button onClick={addTask}>Add</button>
      <br/>
      <br/>
      <label>
        Edit id:
        <input value={editId} onChange={(e) => setEditId(e.target.value)} />
      </label>
      <br />
      <label>
        New title:
        <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
      </label>
      <br/>
      <label>
        Priority:
        <select value={editPriority} onChange={(e) => setEditPriority(e.target.value as Priority)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
      <br/>
      <label>
        Completed:
        <select value={editCompleted} onChange={(e) => setEditCompleted(e.target.value as Completed)}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </label>
      <br/>
      <button onClick={editTask}>Edit</button>
      <br/>
      <br/>
      <label>
        Delete id:
        <input value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
      </label>
      <button onClick={deleteTask}>Delete</button>
      <br/>
      <br/>
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.id}. {task.title} - {task.priority} - Completed: {task.isCompleted}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
