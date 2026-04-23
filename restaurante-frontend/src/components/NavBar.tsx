import { NavLink } from "react-router-dom";

interface Props {
    nombreRestaurante?: string;
}

export default function NavBar({
    nombreRestaurante = "Restaurante",
}: Props) {

    const linkStyle = ({ isActive }: { isActive: boolean }) => ({
        textDecoration: "none",
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "orange" : "black",
    });

    return (
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{nombreRestaurante}</h2>

            <div style={{ display: "flex", gap: "10px" }}>
                <NavLink to="/" style={linkStyle}>Carta</NavLink>
                <NavLink to="/mesas" style={linkStyle}>Mesas</NavLink>
                <NavLink to="/carrito" style={linkStyle}>Carrito</NavLink>
            </div>
        </nav>
    );
}