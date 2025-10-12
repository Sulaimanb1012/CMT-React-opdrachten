import { useState } from "react";

function BookList() {
  const [books] = useState([
    {
      title: "Interesting Facts For Curious Minds",
      author: "Jordan Moore",
      image: "/images/book-1.png",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "/images/book-2.png",
    },
    {
      title: "Fairy Tale",
      author: "Stephen King",
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
