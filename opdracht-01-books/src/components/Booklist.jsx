import Book from "./Book.jsx";

function BookList({ books }) {
  return (
    <div className="booklist">
      {books.map((book) => (
        <Book
          key={book.title}
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </div>
  );
}

export default BookList;

