function Card({ emoji, isFlipped, isMatched, onClick }) {

  let content = "❓";
  if (isFlipped || isMatched) {
    content = emoji;
  }

  return (
    <div onClick={onClick}>
      {content}
    </div>
  );
}

export default Card;
