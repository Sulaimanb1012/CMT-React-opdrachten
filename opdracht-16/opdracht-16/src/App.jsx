import { useState } from "react";
import GameBoard from "./components/GameBoard";
import "./App.css";

function App() {
  const [resetKey, setResetKey] = useState(0);

  function restartGame() {
    setResetKey((prev) => prev + 1);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Memory Game</h1>

      <button onClick={restartGame}>
        Opnieuw starten
      </button>

      <GameBoard key={resetKey} />
    </div>
  );
}

export default App;
