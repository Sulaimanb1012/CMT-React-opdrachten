import React from "react";

export default function Header() {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
        />
      </svg>
      <h1 className="text-xl font-bold text-indigo-600">Workcation</h1>
    </div>
  );
}
