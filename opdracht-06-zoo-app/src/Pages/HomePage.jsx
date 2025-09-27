import '../App.css'
import Card from '../components/Card.jsx'
import data from '../animals.js'
export default function HomePage() {
    return (
        <section className = "section-center">
            {data.map(animal => (
                <Card key={animal.id} animal={animal} />
            ))}
        </section>
        
    )
}