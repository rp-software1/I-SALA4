import { platosMock } from "./data/platos.mock.js"
import PlatoCard from "./components/PlatoCard.jsx"

export default function App() {

    return (

        <div>

            <h1>Carta del Restaurante</h1>

            {platosMock.map(plato => (

                <PlatoCard key={plato.id} plato={plato} />

            ))}

        </div>

    )

}