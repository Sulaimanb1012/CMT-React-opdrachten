import { useState } from "react";

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
        <div key={index} className="book">
          <img src={book.image} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
