import { useState } from "react";
import "../App.css";
import Card from "../components/Card.jsx";
import data from "../animals.js";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredAnimals = data.filter((animal) =>
    animal.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section-center">
      <input
        type="text"
        placeholder="Zoek een dier..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredAnimals.map((animal) => (
        <Card key={animal.id} animal={animal} />
      ))}
    </section>
  );
}
