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

      <button
        onClick={restartGame}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Opnieuw starten
      </button>

      <GameBoard key={resetKey} />
    </div>
  );
}

export default App;
