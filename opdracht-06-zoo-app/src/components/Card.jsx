import { useNavigate } from 'react-router-dom';

export default function Card({ animal }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/animals/${animal.id}`)}
      className="animal">
      <img src={animal.image} alt={animal.name} className="animals" />
      <h2 className="animal">{animal.name}</h2>
      <p className="animal">{animal.description.slice(0, 60)}...</p>
    </div>
  );
} 

