import React from "react";

const ToDoItem = ({ text }) => {
  return (
    <div className="flex items-center justify-between bg-white text-black rounded-md px-3 py-2">
      <span className="font-medium">{text}</span>
      <div className="flex gap-2">
        <button className="bg-green-400 hover:bg-green-500 text-white rounded p-1">
          ✓
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded p-1">
          🗑
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
