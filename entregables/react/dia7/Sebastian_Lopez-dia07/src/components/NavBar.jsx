import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function NavBar({ nombreRestaurante = "Restaurante" }) {

    const linkStyle = ({ isActive }) => ({
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "orange" : "black"
    });

    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "2px solid #ccc"
        }}>

            <h2>{nombreRestaurante}</h2>

            <div style={{ display: "flex", gap: "15px" }}>

                <NavLink to="/" style={linkStyle}>
                    Carta
                </NavLink>

                <NavLink to="/mesas" style={linkStyle}>
                    Mesas
                </NavLink>

                <NavLink to="/comandas" style={linkStyle}>
                    Comandas
                </NavLink>

                <NavLink to="/carrito" style={linkStyle}>
                    Carrito
                </NavLink>

            </div>

        </nav>
    );
}

NavBar.propTypes = {
    nombreRestaurante: PropTypes.string
};