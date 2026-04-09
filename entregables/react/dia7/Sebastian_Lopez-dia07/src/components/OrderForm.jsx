import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderForm({ mesaNumero }) {

    const [plato, setPlato] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [enviando, setEnviando] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setEnviando(true);

        setTimeout(() => {
            setEnviando(false);

            // 🔥 redirigir después de enviar
            navigate("/carrito");

        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>

            <h2>Comanda — Mesa {mesaNumero}</h2>

            <input
                value={plato}
                onChange={(e) => setPlato(e.target.value)}
                placeholder="Nombre del plato"
            />

            <input
                type="number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
                min="1"
            />

            <button type="submit" disabled={enviando}>
                {enviando ? "Enviando..." : "Enviar"}
            </button>

        </form>
    );
}