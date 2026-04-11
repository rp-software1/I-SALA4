import { useEffect, useState } from "react";
import { platosMock } from "../data/mock";
import { usePedido } from "../context/PedidoContext";

export default function Home() {
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { agregarPlato, pedido } = usePedido();

    useEffect(() => {
        setTimeout(() => {
            setPlatos(platosMock);
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <p>Cargando menú...</p>;

    const totalItems = pedido.items.reduce(
        (acc, item) => acc + item.cantidad,
        0
    );

    return (
        <div>
            <h1>Carta del Restaurante</h1>

            {platos.map((plato) => (
                <div key={plato.id}>
                    <span>
                        {plato.nombre} — S/ {plato.precio}
                    </span>

                    <button onClick={() => agregarPlato(plato)}>
                        Agregar
                    </button>
                </div>
            ))}

            {totalItems > 0 && (
                <h3>🧾 Comanda: {totalItems} items</h3>
            )}
        </div>
    );
}