import { usePedido } from "../context/PedidoContext";

export default function CarritoPage() {
    const {
        pedido,
        quitarPlato,
        limpiarPedido,
        cambiarTipo,
    } = usePedido();

    return (
        <div>
            <h2>Comanda</h2>

            {/* 🔥 PARA TU DEMO */}
            <p><strong>Tipo:</strong> {pedido.tipo}</p>
            <p><strong>Mesa ID:</strong> {pedido.mesaId ?? "null"}</p>

            <button onClick={() => cambiarTipo("para_llevar")}>
                Para llevar
            </button>

            {pedido.items.length === 0 ? (
                <p>No hay platos</p>
            ) : (
                pedido.items.map((item) => (
                    <div key={item.platoId}>
                        <span>
                            {item.nombre} x{item.cantidad} — S/{" "}
                            {(item.precioUnitario * item.cantidad).toFixed(2)}
                        </span>

                        <button onClick={() => quitarPlato(item.platoId)}>
                            Quitar
                        </button>
                    </div>
                ))
            )}

            <h3>Total: S/ {pedido.total.toFixed(2)}</h3>

            <button onClick={limpiarPedido}>
                Limpiar comanda
            </button>
        </div>
    );
}