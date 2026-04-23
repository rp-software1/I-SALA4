import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePedido } from "../context/PedidoContext";

export default function MesasPage() {
    const [mesas, setMesas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { asignarMesa } = usePedido();
    const navigate = useNavigate();

    // 🔄 Cargar mesas desde backend
    useEffect(() => {
        async function cargarMesas() {
            try {
                const data = await getMesas();
                setMesas(data);
            } catch (err) {
                setError("No se pudieron cargar las mesas");
            } finally {
                setLoading(false);
            }
        }

        cargarMesas();
    }, []);

    // 🪑 Seleccionar mesa
    const handleSeleccionarMesa = (mesa) => {
        asignarMesa(mesa._id); // 🔥 esto llena el mesaId
        navigate("/carrito");
    };

    // 🎨 Colores por estado
    const getColor = (estado) => {
        switch (estado) {
            case "disponible":
                return "#d1fae5"; // verde claro
            case "ocupada":
                return "#fee2e2"; // rojo claro
            case "reservada":
                return "#fef9c3"; // amarillo
            case "fuera_servicio":
                return "#e5e7eb"; // gris
            default:
                return "#ffffff";
        }
    };

    if (loading) return <p>Cargando mesas...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Mesas del Restaurante</h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {mesas.map((mesa) => (
                    <div
                        key={mesa._id}
                        style={{
                            border: "1px solid black",
                            padding: "15px",
                            borderRadius: "10px",
                            backgroundColor: getColor(mesa.estado),
                            width: "180px",
                        }}
                    >
                        <h3>Mesa {mesa.numero}</h3>
                        <p>Capacidad: {mesa.capacidad}</p>
                        <p>Estado: {mesa.estado}</p>

                        {/* SOLO si está disponible */}
                        {mesa.estado === "disponible" && (
                            <button onClick={() => handleSeleccionarMesa(mesa)}>
                                Seleccionar
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}