import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            gap: "10px"
        }}>
            <h1 style={{ fontSize: "50px" }}>404</h1>
            <p>Página no encontrada</p>

            <button
                onClick={() => navigate("/")}
                style={{
                    padding: "10px 15px",
                    cursor: "pointer"
                }}
            >
                Ir al menú
            </button>
        </div>
    );
}