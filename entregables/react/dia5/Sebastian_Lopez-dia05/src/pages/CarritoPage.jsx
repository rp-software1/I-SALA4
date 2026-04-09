import { useState, useEffect } from "react";
import { platosMock } from "../data/mock";

export default function CarritoPage() {

    const [platos, setPlatos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simular carga
    useEffect(() => {
        setTimeout(() => {
            setPlatos(platosMock);
            setLoading(false);
        }, 800);
    }, []);

    // Agregar plato
    function agregarPlato(plato) {
        setCarrito(prev => {
            const existe = prev.find(item => item.id === plato.id);

            if (existe) {
                return prev.map(item =>
                    item.id === plato.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prev, { ...plato, cantidad: 1 }];
            }
        });
    }

    // Quitar plato
    function quitarPlato(id) {
        setCarrito(prev => prev.filter(item => item.id !== id));
    }

    // Limpiar carrito
    function limpiarCarrito() {
        setCarrito([]);
    }

    // Total
    const total = carrito.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
    );

    if (loading) return <p>Cargando menú...</p>;

    return (
        <div>
            <h2>Armar Comanda</h2>

            <h3>Menú</h3>
            {platos.map(plato => (
                <div key={plato.id}>
                    <span>
                        {plato.nombre} — S/ {plato.precio}
                    </span>
                    <button onClick={() => agregarPlato(plato)}>
                        Agregar
                    </button>
                </div>
            ))}

            <h3>Comanda</h3>

            {carrito.length === 0 ? (
                <p>No hay platos en la comanda</p>
            ) : (
                carrito.map(item => (
                    <div key={item.id}>
                        <span>
                            {item.nombre} x{item.cantidad} — S/ {item.precio * item.cantidad}
                        </span>
                        <button onClick={() => quitarPlato(item.id)}>
                            Quitar
                        </button>
                    </div>
                ))
            )}

            <h3>Total: S/ {total.toFixed(2)}</h3>

            <button onClick={limpiarCarrito}>
                Limpiar comanda
            </button>
        </div>
    );
}