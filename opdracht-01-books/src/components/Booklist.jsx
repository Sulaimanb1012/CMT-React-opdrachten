import "./BookList.css";

function BookList({ books }) {
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
