import { useState } from "react";

function Book({ title, author, image, category }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  const verhoogTeller = () => {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };

  return (
    <div className="book">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Auteur: {author}</p>
      <p>Categorie: {category}</p>
      <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
    </div>
  );
}

export default Book;
