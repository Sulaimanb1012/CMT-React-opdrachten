import { useState } from "react";

const FlashCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-64 h-40 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        
        <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-md flex items-center justify-center text-center backface-hidden">
          <p className="text-lg">{question}</p>
        </div>

        
        <div className="absolute w-full h-full bg-blue-700 text-white rounded-xl shadow-md flex items-center justify-center text-center rotate-y-180 backface-hidden">
          <p className="text-lg font-semibold">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
