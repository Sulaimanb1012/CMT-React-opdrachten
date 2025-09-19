import Header from "./components/Header";
import BookList from "./components/BookList";
import Layout from "./components/Layout";

function App() {
  const books = [
    {
      title: "Interesting Facts For Curious Minds",
      author: "Jordan Moore",
      image: "/images/curious-minds.jpg",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "atomic-habits.jpg",
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
}

export default App;
