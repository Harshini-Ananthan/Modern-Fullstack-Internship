'use client'

import { useEffect, useState } from "react"


export default function Home(){
  const [todo, setTodos] = useState([]);

  async function fetchData(){
    const response = await fetch("http://localhost:4000/graphql", {
      method : "POST",
      "headers": {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        query: `
          query  {
            getTodos{
              id
              todo
              completed
              user{
                firstName
                lastName
                email
              }
            }
          }
        
        `
      })
    })
    const data = await response.json();
    console.log("data: ",data.data.getTodos)
    setTodos(data.data.getTodos);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Todo Item : </h1>
      <br />
      {
        todo.map((todos: any) => (
          <div key={todos.id}>
            <p>ID : {todos.id}</p>
            <p>Todo : {todos.todo}</p>
            <p>IsCompleted : {String(todos.completed)}</p>
            <p>First Name : {todos.user.firstName}</p>
            <p>Last Name : {todos.user.lastName}</p>
            <p>Email : {todos.user.email}</p>
            <br />
          </div>
        ))
      }
    </div>
  )
}