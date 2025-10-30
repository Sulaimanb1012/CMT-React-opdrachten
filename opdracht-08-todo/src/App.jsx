import { useState } from "react";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(["Afwas", "Huiswerk maken", "Werken"]);

  function addTodo(todo) {
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white font-sans">
      <h1 className="text-4xl font-bold mb-6">
        &lt;Sulaiman&gt;<span className="text-white">To Do List</span>
      </h1>

      <CreateToDo onAdd={addTodo} />
      <ToDoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
