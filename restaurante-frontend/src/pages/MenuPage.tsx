import { useEffect, useState } from 'react';
import { getPlatos } from '../services/api';
import type { Plato } from '../types';
import { usePedido } from '../context/PedidoContext';

export default function MenuPage() {
    const [platos, setPlatos] = useState<Plato[]>([]);
    const { agregarPlato } = usePedido();

    useEffect(() => {
        getPlatos().then(setPlatos);
    }, []);

    return (
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {platos.map(p => (
                <div key={p._id} style={{ border: '1px solid #ccc', padding: 12, borderRadius: 10, width: 200 }}>
                    <h3>{p.nombre}</h3>
                    <p>{p.descripcion}</p>
                    <strong>S/ {p.precio}</strong>
                    <button onClick={() => agregarPlato(p)}>Agregar</button>
                </div>
            ))}
        </div>
    );
}