import React from "react";

export default function Navbar({ onToggleTheme, theme }) {
  return (
    <nav className="bg-indigo-500 dark:bg-indigo-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Workcation</h1>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Rentals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200 transition">
                Contact
              </a>
            </li>
          </ul>

         
          <button
            onClick={onToggleTheme}
            className="bg-indigo-600 hover:bg-indigo-800 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-3 py-2 rounded-lg font-medium transition"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
