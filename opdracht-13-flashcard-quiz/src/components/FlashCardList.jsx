import FlashCard from "./FlashCard";

const FlashCardList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {data.map((item, index) => (
        <FlashCard
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default FlashCardList;
