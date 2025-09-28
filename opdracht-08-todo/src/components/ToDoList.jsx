import ToDoItem from "./ToDoItem.jsx";

export default function ToDoList({ todos }) {
  return (
    <ul>
      {todos.map((t, index) => (
        <ToDoItem key={index} text={t} />
      ))}
    </ul>
  );
}
