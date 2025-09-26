import { useState, useEffect } from "react";
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';


function App() {
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Opdracht 2 - UseEffect</h1>
      <WelcomeMessage />
      <h2>De huidige tijd is:</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
