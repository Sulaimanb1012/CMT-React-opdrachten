import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar onToggleTheme={toggleTheme} theme={theme} />

      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-sm">
          <Header />
          <Card />
        </div>
      </div>
    </div>
  );
}
