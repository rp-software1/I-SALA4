import { usePedido } from "../context/PedidoContext";
import { crearPedido } from "../services/api";
import { useState } from "react";

export default function CarritoPage() {
    const { pedido, limpiarPedido } = usePedido();

    const [error, setError] = useState<string | null>(null);
    const [pedidoCreado, setPedidoCreado] = useState<any>(null);

    async function handleEnviar() {
        if (pedido.items.length === 0) return;

        try {
            const res = await crearPedido({
                mesaId: pedido.mesaId,
                tipo: pedido.tipo,
                items: pedido.items,
                total: pedido.total,
                estado: pedido.estado,
            });

            setPedidoCreado(res);
            limpiarPedido();
        } catch (err) {
            setError("Error al enviar pedido");
        }
    }

    return (
        <div>
            <h2>Carrito</h2>

            {error && <p>{error}</p>}

            {pedidoCreado && (
                <div>
                    <p>ID: {pedidoCreado._id}</p>
                    <p>Estado: {pedidoCreado.estado}</p>
                    <p>Total: S/ {pedidoCreado.total}</p>
                </div>
            )}

            <p>Tipo: {pedido.tipo}</p>
            <p>Mesa ID: {pedido.mesaId ?? "null"}</p>

            {pedido.items.map((item) => (
                <div key={item.platoId}>
                    {item.nombre} x {item.cantidad}
                </div>
            ))}

            <h3>Total: S/ {pedido.total}</h3>

            <button onClick={handleEnviar}>Enviar Pedido</button>
        </div>
    );
}