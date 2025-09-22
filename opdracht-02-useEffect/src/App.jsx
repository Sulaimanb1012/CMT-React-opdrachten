import { useState, useEffect } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>De huidige tijd is:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;