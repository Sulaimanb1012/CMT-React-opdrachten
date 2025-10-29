import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./index.css";

export default function App() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-sm">
        <Header />
        <Card />
      </div>
    </div>
  );
}
