import { useState } from "react";
import { usePedido } from "../context/PedidoContext";

export default function CarritoPage() {
    const { pedido, limpiarPedido } = usePedido();

    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState(null);
    const [pedidoCreado, setPedidoCreado] = useState(null);

    const handleEnviar = async () => {
        if (pedido.items.length === 0) return;

        setEnviando(true);
        setError(null);

        try {
            const res = await crearPedido({
                mesaId: pedido.mesaId,
                tipo: pedido.tipo,
                items: pedido.items,
            });

            setPedidoCreado(res);
            limpiarPedido();
        } catch (err) {
            setError("Error al enviar pedido");
        } finally {
            setEnviando(false);
        }
    };

    if (pedidoCreado) {
        return (
            <div>
                <h2>Pedido enviado</h2>
                <p>ID: {pedidoCreado._id}</p>
                <p>Estado: {pedidoCreado.estado}</p>
                <p>Total: S/ {pedidoCreado.total}</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Carrito</h2>

            <p>Tipo: {pedido.tipo}</p>
            <p>Mesa ID: {pedido.mesaId ?? "null"}</p>

            {pedido.items.map((item) => (
                <div key={item.platoId}>
                    {item.nombre} x{item.cantidad}
                </div>
            ))}

            <h3>Total: S/ {pedido.total}</h3>

            {error && <p>{error}</p>}

            <button onClick={handleEnviar} disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar comanda"}
            </button>
        </div>
    );
}