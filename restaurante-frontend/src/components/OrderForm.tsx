import { usePedido } from "../context/PedidoContext";
import type { Plato } from "../types";

interface Props {
    mesaNumero: string;
}

export default function OrderForm({ mesaNumero }: Props) {
    const { agregarPlato, asignarMesa } = usePedido();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        asignarMesa(mesaNumero);
    }

    const platoEjemplo: Plato = {
        _id: "1",
        nombre: "Plato demo",
        precio: 10,
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Asignar Mesa</button>

            <button
                type="button"
                onClick={() => agregarPlato(platoEjemplo)}
            >
                Agregar Plato Demo
            </button>
        </form>
    );
}