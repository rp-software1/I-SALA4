import { useState } from 'react';
import { usePedido } from '../context/PedidoContext';
import { crearPedido } from '../services/api';
import type { Pedido } from '../types';

export default function CarritoPage() {
    const { pedido, agregarPlato, quitarPlato, limpiarPedido } = usePedido();
    const [ok, setOk] = useState<string | null>(null);

    const enviar = async () => {
        const body: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'> = {
            mesaId: pedido.mesaId,
            tipo: pedido.tipo,
            estado: 'pendiente',
            items: pedido.items,
            total: pedido.total,
        };

        const res = await crearPedido(body);
        setOk(res._id);
        limpiarPedido();
    };

    if (ok) return <p>Pedido enviado: {ok}</p>;

    return (
        <div>
            <h2>Carrito</h2>

            {pedido.items.map(item => (
                <div key={item.platoId} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.nombre}</span>

                    <div>
                        <button onClick={() => quitarPlato(item.platoId)}>-</button>
                        <span>{item.cantidad}</span>
                        <button onClick={() => agregarPlato({
                            _id: item.platoId,
                            nombre: item.nombre,
                            descripcion: '',
                            precio: item.precioUnitario,
                            categoria: '',
                            stock: 0,
                            disponible: true
                        })}>+</button>
                    </div>
                </div>
            ))}

            <h3>Total: S/ {pedido.total}</h3>
            <button onClick={enviar}>Enviar</button>
        </div>
    );
}