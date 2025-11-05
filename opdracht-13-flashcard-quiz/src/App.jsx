import FlashCardList from "./components/FlashCardList";
import data from "./data";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Hoofdsteden Quiz</h1>
      <FlashCardList data={data} />
      <p className="text-gray-600 mt-6">Klik op de kaart om de antwoord te zien</p>
    </div>
  );
}

export default App;
