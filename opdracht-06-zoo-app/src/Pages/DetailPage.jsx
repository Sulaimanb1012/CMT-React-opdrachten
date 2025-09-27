import '../App.css'
import { useParams} from 'react-router-dom'
import data from '../animals.js'

export default function DetailPage() {
   const { id } = useParams();
   const animal = data.find(animal => animal.id === id)
   if (!animal) {
      return <h2>Dier is niet gezien</h2>
   }
    return (
        <section className="section-center">
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <img src = {animal.image} alt = {animal.name} className='w-1/2 h-auto object-cover rounded' />
        </section> 
    )
}

