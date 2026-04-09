import PlatoCard from "../components/PlatoCard";
import { platosMock } from "../data/mock";

export default function Home() {

    return (
        <div>

            <h1>Carta del Restaurante</h1>

            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {platosMock.map(plato => (
                    <PlatoCard key={plato.id} plato={plato} />
                ))}

            </div>

        </div>
    );
}