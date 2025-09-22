import { useState, useEffect } from "react";

function WelcomeMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let newMessage = "";

    if (hours < 12) {
      newMessage = "Goedemorgen";
    } else if (hours < 18) {
      newMessage = "Goedemiddag";
    } else {
      newMessage = "Goedenavond";
    }

    setMessage(newMessage);
  }, []);

  return <h2>{message}</h2>;
}

export default WelcomeMessage;
