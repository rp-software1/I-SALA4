import { useState } from 'react';
import OrderForm from '../components/OrderForm';

function ComandasPage() {
    // 🔥 CAMBIO: string, no number
    const [mesaSeleccionada, setMesaSeleccionada] = useState<string>("");

    return (
        <div>
            <h2>Seleccionar mesa</h2>

            <select
                value={mesaSeleccionada}
                onChange={(e) => setMesaSeleccionada(e.target.value)}
            >
                <option value="">-- Selecciona una mesa --</option>
                <option value="1">Mesa 1</option>
                <option value="2">Mesa 2</option>
            </select>

            {mesaSeleccionada && (
                <OrderForm mesaNumero={mesaSeleccionada} />
            )}
        </div>
    );
}

export default ComandasPage;