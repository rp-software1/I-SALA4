import PropTypes from "prop-types";

export default function NavBar({ nombreRestaurante = "Restaurante", setPagina }) {

    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "2px solid #ccc"
        }}>

            <h2>{nombreRestaurante}</h2>

            <div style={{ display: "flex", gap: "15px" }}>

                <span onClick={() => setPagina("carta")} style={{ cursor: "pointer" }}>
                    Carta
                </span>

                <span onClick={() => setPagina("mesas")} style={{ cursor: "pointer" }}>
                    Mesas
                </span>

                <span onClick={() => setPagina("comandas")} style={{ cursor: "pointer" }}>
                    Comandas
                </span>

                <span onClick={() => setPagina("carrito")} style={{ cursor: "pointer" }}>
                    Carrito
                </span>

            </div>

        </nav>
    );
}

NavBar.propTypes = {
    nombreRestaurante: PropTypes.string,
    setPagina: PropTypes.func
};