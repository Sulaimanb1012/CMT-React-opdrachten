import React, { useState } from "react";
import Book from "./Book"; 

function BookList() {
  const [books] = useState([
    {
      title: "Harry Ptter",
      author: "J.K Rowling",
      image: "/images/book-1.png",
    },
    {
      title: "Fantasia VI",
      author: "Geronimo Stilton",
      image: "/images/book-2.png",
    },
    {
      title: "The Hunger Games",
      author: "Suzanna Collins",
      image: "/images/book-3.png",
    },
  ]);

  return (
    <div className="booklist">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </div>
  );
}

export default BookList;
