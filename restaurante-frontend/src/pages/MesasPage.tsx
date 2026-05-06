import { useEffect, useState } from 'react';
import { getMesas } from '../services/api';
import type { Mesa } from '../types';
import { useNavigate } from 'react-router-dom';
import { usePedido } from '../context/PedidoContext';
import MesaCard from '../components/MesaCard';

export default function MesasPage() {
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const navigate = useNavigate();
    const { asignarMesa } = usePedido();

    useEffect(() => {
        getMesas().then(setMesas);
    }, []);

    const seleccionar = (mesa: Mesa) => {
        asignarMesa(mesa._id);
        navigate('/carrito');
    };

    return (
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {mesas.map(m => (
                <MesaCard key={m._id} mesa={m} onClick={seleccionar} />
            ))}
        </div>
    );
}