import { useState } from "react";
import "./App.css";
import menuData from "./data.js";

function App() {
  const [items] = useState(menuData);

  return (
    <>
      <h1>Opdracht 4 - Menu</h1>

      <section className="section-center">
        {items.map(({ id, title, price, img, desc }) => (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;
