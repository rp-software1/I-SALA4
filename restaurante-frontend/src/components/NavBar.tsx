import { NavLink } from "react-router-dom";
import { usePedido } from "../context/PedidoContext";

export default function NavBar() {
    const { pedido } = usePedido();
    const totalItems = pedido.items.reduce((acc, i) => acc + i.cantidad, 0);

    return (
        <nav style={{ display: "flex", gap: "10px", alignItems: 'center' }}>
            <NavLink to="/">Carta</NavLink>
            <NavLink to="/mesas">Mesas</NavLink>
            <NavLink to="/carrito" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                Carrito
                {totalItems > 0 && (
                    <span style={{ background: '#ef4444', color: 'white', borderRadius: 9999, padding: '2px 8px', fontSize: 12 }}>{totalItems}</span>
                )}
            </NavLink>
        </nav>
    );
}