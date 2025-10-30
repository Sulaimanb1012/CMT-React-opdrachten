import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, onDelete }) {
  return (
    <div className="space-y-3">
      {todos.map((todo, index) => (
        <ToDoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}
