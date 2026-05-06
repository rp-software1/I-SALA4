import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav style={{ display: "flex", gap: "10px" }}>
            <NavLink to="/">Carta</NavLink>
            <NavLink to="/mesas">Mesas</NavLink>
            <NavLink to="/carrito">Carrito</NavLink>
        </nav>
    );
}