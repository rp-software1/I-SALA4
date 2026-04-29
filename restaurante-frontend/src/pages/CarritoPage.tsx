import { useState } from 'react';
import type { Pedido } from '../types';
import { crearPedido } from '../services/api';
import { usePedido } from '../context/PedidoContext';

function CarritoPage() {
    const { pedido, limpiarPedido } = usePedido();

    const [enviando, setEnviando] = useState<boolean>(false);
    const [confirmacion, setConfirmacion] = useState<string | null>(null);
    const [errorEnvio, setErrorEnvio] = useState<string | null>(null);

    const handleEnviarComanda = async (): Promise<void> => {
        if (pedido.tipo === 'mesa' && !pedido.mesaId) {
            setErrorEnvio('Selecciona una mesa');
            return;
        }

        setEnviando(true);
        setErrorEnvio(null);

        try {
            const body: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'> = {
                mesaId: pedido.mesaId,
                tipo: pedido.tipo,
                estado: 'pendiente',
                items: pedido.items,
                total: pedido.total,
            };

            const res: Pedido = await crearPedido(body);

            setConfirmacion(res._id);
            limpiarPedido();
        } catch (err: unknown) {
            const mensaje =
                err instanceof Error ? err.message : 'Error al enviar';
            setErrorEnvio(mensaje);
        } finally {
            setEnviando(false);
        }
    };

    if (confirmacion) {
        return <p>Pedido enviado ID: {confirmacion}</p>;
    }

    return (
        <div>
            {errorEnvio && <p>{errorEnvio}</p>}

            <h3>Total: S/ {pedido.total}</h3>

            <button onClick={handleEnviarComanda} disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar'}
            </button>
        </div>
    );
}

export default CarritoPage;