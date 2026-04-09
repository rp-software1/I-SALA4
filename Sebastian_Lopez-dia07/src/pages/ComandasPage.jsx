import { useState } from "react";
import OrderForm from "../components/OrderForm";
import { mesasMock } from "../data/mesas.mock";

export default function ComandasPage() {

    const [mesaSeleccionada, setMesaSeleccionada] = useState(1);

    return (
        <div>

            <h1>Comandas</h1>

            <select
                value={mesaSeleccionada}
                onChange={(e) => setMesaSeleccionada(e.target.value)}
            >
                {mesasMock.map(mesa => (
                    <option key={mesa.id} value={mesa.numero}>
                        Mesa {mesa.numero}
                    </option>
                ))}
            </select>

            <OrderForm mesaNumero={mesaSeleccionada} />

        </div>
    );
}