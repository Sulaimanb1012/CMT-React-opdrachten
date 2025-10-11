import Layout from "../components/Layout";
import BookList from "../components/BookList";

const Home = () => {
  const books = [
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
  ];

  return (
    <Layout>
      <h1>Amazon Best Sellers</h1>
      <BookList books={books} />
    </Layout>
  );
};

export default Home;
