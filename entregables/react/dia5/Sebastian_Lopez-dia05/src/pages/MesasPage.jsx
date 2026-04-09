import { mesasMock } from "../data/mesas.mock";
import MesaCard from "../components/MesaCard";

export default function MesasPage() {

    return (

        <div>

            <h1>Estado de Mesas</h1>

            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {mesasMock.map(mesa => (
                    <MesaCard key={mesa.id} mesa={mesa} />
                ))}

            </div>

        </div>

    );
}