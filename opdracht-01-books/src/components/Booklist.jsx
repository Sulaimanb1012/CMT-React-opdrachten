 import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";

function BookList({ search }) {
  const booksData = [
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      image: "/images/book-1.png",
      category: "Fantasy",
    },
    {
      title: "Fantasia VI",
      author: "Geronimo Stilton",
      image: "/images/book-2.png",
      category: "Avontuur",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      image: "/images/book-3.png",
      category: "Sciencefiction",
    },
  ];

  const [books, setBooks] = useState(booksData);

  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
  ];

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

