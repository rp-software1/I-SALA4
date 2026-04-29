import { useState, useEffect } from 'react';
import type { Plato } from '../types';
import { getPlatos } from '../services/api';
import { usePedido } from '../context/PedidoContext';
import PlatoCard from '../components/PlatoCard';

function MenuPage() {
    const [platos, setPlatos] = useState<Plato[]>([]);
    const [cargando, setCargando] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const { agregarPlato } = usePedido();

    useEffect(() => {
        const cargarPlatos = async (): Promise<void> => {
            setCargando(true);
            try {
                const data: Plato[] = await getPlatos();
                setPlatos(data);
            } catch (err: unknown) {
                const mensaje =
                    err instanceof Error ? err.message : 'Error al cargar menú';
                setError(mensaje);
            } finally {
                setCargando(false);
            }
        };

        cargarPlatos();
    }, []);

    if (cargando) return <p>Cargando menú...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {platos.map((plato) => (
                <PlatoCard
                    key={plato._id}
                    plato={plato}
                    onAgregar={agregarPlato}
                />
            ))}
        </div>
    );
}

export default MenuPage;