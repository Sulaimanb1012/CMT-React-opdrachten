import { useState } from "react";
import "./App.css";
import menuData from "./data.js";
import "./components/Menu.jsx";
import "./components/MenuList.jsx";
import MenuList from "./components/MenuList.jsx";

function App() {
  const [items] = useState(menuData);

  return (
    <>
      <h1>Opdracht 4 - Menu</h1>
<MenuList/>
    </>
  );
}

export default App;
