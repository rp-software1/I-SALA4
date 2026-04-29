import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Mesa } from '../types';
import { getMesas } from '../services/api';
import { usePedido } from '../context/PedidoContext';
import MesaCard from '../components/MesaCard';

function MesasPage() {
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [cargando, setCargando] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const { asignarMesa } = usePedido();

    useEffect(() => {
        const cargarMesas = async (): Promise<void> => {
            setCargando(true);
            try {
                const data: Mesa[] = await getMesas();
                setMesas(data);
            } catch (err: unknown) {
                const mensaje =
                    err instanceof Error ? err.message : 'Error al cargar mesas';
                setError(mensaje);
            } finally {
                setCargando(false);
            }
        };

        cargarMesas();
    }, []);

    const handleSeleccionarMesa = (mesa: Mesa): void => {
        asignarMesa(mesa._id);
        navigate('/carrito');
    };

    if (cargando) return <p>Cargando mesas...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {mesas.map((mesa) => (
                <MesaCard
                    key={mesa._id}
                    mesa={mesa}
                    onClick={handleSeleccionarMesa}
                />
            ))}
        </div>
    );
}

export default MesasPage;