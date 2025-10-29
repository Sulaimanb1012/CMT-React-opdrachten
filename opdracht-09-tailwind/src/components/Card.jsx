import React from "react";
import Button from "./Button";

export default function Card() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
        alt="Beach work"
        className="rounded-lg mb-4"
      />

      <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
        You can work from anywhere.{" "}
        <span className="text-indigo-500 font-bold">Take advantage of it.</span>
      </h2>

      <p className="text-gray-600 mt-3 mb-5">
        Workcation helps you find work-friendly rentals in beautiful locations
        so you can enjoy some nice weather even when you’re not on vacation.
      </p>

      <Button />
    </div>
  );
}
