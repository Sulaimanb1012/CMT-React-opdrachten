import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Header />
      <Layout>
        <h1>Amazon Best Sellers</h1>
        <SearchBar onSearch={handleSearch} />
        <BookList search={search} />
      </Layout>
    </>
  );
}

export default App;
