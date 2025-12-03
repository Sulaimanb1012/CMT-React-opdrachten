import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import { booksData, categories } from "../data/data";

function BookList({ search }) {
  const [books, setBooks] = useState(booksData);
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  function filterHandler(e) {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "Alle") {
      setBooks(booksData);
    } else {
      const filtered = booksData.filter((book) => book.category === category);
      setBooks(filtered);
    }
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="booklist">
      <BookCounter aantal={filteredBooks.length} />
      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>
        <select id="category" value={selectedCategory} onChange={filterHandler}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredBooks.length > 0 ? (
        filteredBooks.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
            category={book.category}
          />
        ))
      ) : (
        <p>Geen boeken gevonden.</p>
      )}
    </div>
  );
}

export default BookList;
