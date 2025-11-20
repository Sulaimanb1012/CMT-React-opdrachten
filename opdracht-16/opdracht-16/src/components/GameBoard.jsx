import { useState, useEffect } from "react";
import Card from "./Card";

function GameBoard() {

  const emojis = ['🐶','🐶','🍕','🍕','🚗','🚗'];

  const [cards] = useState(() => {
    return [...emojis].sort(() => Math.random() - 0.5);
  });

  const [openCards, setOpenCards] = useState([]);
  const [matched, setMatched] = useState([]);

  function handleCardClick(index) {
    if (openCards.length === 2) return;
    if (openCards.includes(index)) return;
    setOpenCards(prev => [...prev, index]);
  }

  useEffect(() => {
    if (openCards.length === 2) {
      const [first, second] = openCards;

      if (cards[first] === cards[second]) {
        setMatched(prev => [...prev, first, second]);
        setOpenCards([]);
      } else {
        setTimeout(() => setOpenCards([]), 1000);
      }
    }
  }, [openCards, cards]);

  return (
    <div className="kapsalon">
      {cards.map((emoji, index) => (
        <Card
          key={index}
          emoji={emoji}
          isFlipped={openCards.includes(index)}
          isMatched={matched.includes(index)}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
