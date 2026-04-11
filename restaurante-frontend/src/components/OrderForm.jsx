import { useState } from "react";
import { usePedido } from "../context/PedidoContext";

export default function OrderForm({ mesaNumero }) {
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(1);

    const { agregarPlato, asignarMesa } = usePedido();

    function handleSubmit(e) {
        e.preventDefault();

        if (!nombre) return;

        // 🔥 asignar mesa
        asignarMesa(mesaNumero);

        const plato = {
            id: Date.now(),
            nombre,
            precio: 10,
        };

        for (let i = 0; i < cantidad; i++) {
            agregarPlato(plato);
        }

        setNombre("");
        setCantidad(1);
    }

    return (
        <div>
            <h2>Comanda — Mesa {mesaNumero}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del plato"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="number"
                    min="1"
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                />

                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}