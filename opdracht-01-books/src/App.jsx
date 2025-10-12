import Header from "./components/Header";
import Layout from "./components/Layout";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <h1>Amazon Best Sellers</h1>
        <BookList />
      </Layout>
    </>
  );
}

export default App;
