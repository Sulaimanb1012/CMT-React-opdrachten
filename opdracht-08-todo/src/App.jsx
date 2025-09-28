import { useState } from "react";
import CreateToDo from "./components/CreateToDo.jsx";
import ToDoList from "./components/ToDoList.jsx";
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    if (!text.trim()) return;
    setTodos([...todos, text]);
  }

  return (
    <div>
      <h1>Mijn To-Do List</h1>
      <CreateToDo onAdd={addTodo} />
      <ToDoList todos={todos} />
    </div>
  );
}
