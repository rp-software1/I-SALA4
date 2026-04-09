import { useParams, useNavigate, Link } from "react-router-dom";
import { mesasMock } from "../data/mesas.mock";

export default function DetalleMesa() {

    const { id } = useParams();
    const navigate = useNavigate();

    const mesa = mesasMock.find(m => String(m.id) === id);

    if (!mesa) {
        return (
            <div style={{ padding: "20px" }}>
                <p>Mesa {id} no existe</p>

                <button
                    onClick={() => navigate("/mesas")}
                    style={{ marginTop: "10px", cursor: "pointer" }}
                >
                    Volver a mesas
                </button>
            </div>
        );
    }

    return (
        <div style={{ padding: "20px" }}>

            <Link to="/mesas">← Volver</Link>

            <h1>Mesa {mesa.numero}</h1>
            <p>Capacidad: {mesa.capacidad}</p>
            <p>
                Estado: {mesa.disponible ? "Disponible" : "Ocupada"}
            </p>

            <button
                onClick={() => navigate("/carrito")}
                style={{ marginTop: "15px", cursor: "pointer" }}
            >
                Ir a comanda
            </button>

        </div>
    );
}