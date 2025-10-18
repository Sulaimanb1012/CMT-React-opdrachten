import ToggleDarkMode from './ToggleDarkMode';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">MijnWebsite</h1>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Over</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
          <ToggleDarkMode />
        </div>
      </div>
    </nav>
  );
}
