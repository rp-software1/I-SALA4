import { useState, useEffect } from "react";
import { getPlatos } from "../services/api";

export default function CarritoPage() {

    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function cargarPlatos() {
            try {
                setLoading(true);
                const data = await getPlatos();
                setPlatos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        cargarPlatos();
    }, []);

    // 🔥 clave única segura
    const getId = (obj) => obj._id || obj.id || obj.nombre;

    function agregarPlato(plato) {
        const existe = carrito.find(item => getId(item) === getId(plato));

        if (existe) {
            setCarrito(
                carrito.map(item =>
                    getId(item) === getId(plato)
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            );
        } else {
            setCarrito([...carrito, { ...plato, cantidad: 1 }]);
        }
    }

    function quitarPlato(plato) {
        setCarrito(carrito.filter(item => getId(item) !== getId(plato)));
    }

    function limpiarCarrito() {
        setCarrito([]);
    }

    const total = carrito.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
    );

    if (loading) return <p>Cargando menú...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Armar Comanda</h2>

            {/* MENÚ */}
            {platos.map(plato => (
                <div key={getId(plato)}>
                    <span>
                        {plato.nombre} — S/ {plato.precio}
                    </span>
                    <button onClick={() => agregarPlato(plato)}>
                        Agregar
                    </button>
                </div>
            ))}

            {/* CARRITO */}
            <h3>Comanda</h3>

            {carrito.map(item => (
                <div key={getId(item)}>
                    <span>
                        {item.nombre} x{item.cantidad}
                    </span>
                    <button onClick={() => quitarPlato(item)}>
                        Quitar
                    </button>
                </div>
            ))}

            <p>Total: S/ {total}</p>

            <button onClick={limpiarCarrito}>
                Limpiar comanda
            </button>
        </div>
    );
}