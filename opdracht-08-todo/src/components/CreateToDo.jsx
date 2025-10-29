import { useState } from "react";

export default function CreateToDo({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mb-6"
    >
      <input
        type="text"
        placeholder="Wat moet ik doen?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 w-64 rounded-l-md outline-none text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 rounded-r-md text-xl font-bold"
      >
        +
      </button>
    </form>
  );
}
