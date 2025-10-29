import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";

function BookList({ search }) {
  const [books] = useState([
    { title: "Harry Potter", author: "J.K. Rowling", image: "/images/book-1.png" },
    { title: "Fantasia VI", author: "Geronimo Stilton", image: "/images/book-2.png" },
    { title: "The Hunger Games", author: "Suzanne Collins", image: "/images/book-3.png" },
  ]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="booklist">
      <BookCounter aantal={filteredBooks.length} />
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book, index) => (
          <Book key={index} title={book.title} author={book.author} image={book.image} />
        ))
      ) : (
        <p>Geen boeken gevonden.</p>
      )}
    </div>
  );
}

export default BookList;
