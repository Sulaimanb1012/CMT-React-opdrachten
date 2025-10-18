import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar />
      <header className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welkom op mijn website</h1>
        <p className="text-lg md:text-2xl mb-6">React + Tailwind + Dark Mode Toggle</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">Lees meer</button>
      </header>
    </div>
  );
}
