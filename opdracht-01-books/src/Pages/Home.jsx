import Header from "../components/Header";
import Layout from "../components/Layout";
import BookList from "../components/BookList";

const Home = () => {
  const books = [
    {
      title: "Interesting Facts For Curious Minds",
      author: "Jordan Moore",
      image: "/images/curious-minds.jpg",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "/images/atomic-habits.jpg", // let op pad
    },
    {
      title: "Fairy Tale",
      author: "Stephen King",
      image: "/images/fairy-tale.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Layout>
        <h1>Amazon Best Sellers</h1>
        <BookList books={books} />
      </Layout>
    </>
  );
};

export default Home;

