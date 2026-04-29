import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Mesa } from '../types';
import { getMesas } from '../services/api';

function DetalleMesa() {
    const { mesaId } = useParams<{ mesaId: string }>();
    const navigate = useNavigate();

    const [mesa, setMesa] = useState<Mesa | null>(null);
    const [cargando, setCargando] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!mesaId) {
            navigate('/mesas');
            return;
        }

        const cargarDetalle = async (): Promise<void> => {
            setCargando(true);
            try {
                const data: Mesa[] = await getMesas();
                const encontrada =
                    data.find((m) => m._id === mesaId) ?? null;
                setMesa(encontrada);
            } catch (err: unknown) {
                const mensaje =
                    err instanceof Error ? err.message : 'Error al cargar mesa';
                setError(mensaje);
            } finally {
                setCargando(false);
            }
        };

        cargarDetalle();
    }, [mesaId, navigate]);

    if (cargando) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!mesa) return <p>Mesa no encontrada</p>;

    return (
        <div>
            <h2>Mesa {mesa.numero}</h2>
            <p>Capacidad: {mesa.capacidad}</p>
            <p>Estado: {mesa.estado}</p>
        </div>
    );
}

export default DetalleMesa;