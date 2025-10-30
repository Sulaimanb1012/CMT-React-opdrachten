import { CheckIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function ToDoItem({ todo, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white text-black rounded w-72 px-4 py-2 shadow">
      <span>{todo}</span>
      <div className="flex gap-2">
        <button className="bg-emerald-400 hover:bg-emerald-500 p-1 rounded">
          <CheckIcon className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={onDelete}
          className="bg-blue-500 hover:bg-blue-600 p-1 rounded"
        >
          <TrashIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}
