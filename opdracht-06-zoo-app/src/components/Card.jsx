import { useNavigate } from 'react-router-dom';

export default function Card({ animal }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/animal/${animal.id}`)}
      className="cursor-pointer border rounded shadow hover:shadow-lg p-2"
    >
      <img src={animal.image} alt={animal.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{animal.name}</h2>
      <p className="text-sm text-gray-600">{animal.description.slice(0, 60)}...</p>
    </div>
  );
}
