import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function CreateToDo({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        placeholder="What to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-4 py-2 w-72 text-gray-800 rounded-l outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 flex items-center justify-center rounded-r"
      >
        <PlusIcon className="h-5 w-5" />
      </button>
    </form>
  );
}
