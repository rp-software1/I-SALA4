import { useEffect, useState } from "react";
import { getMesas } from "../services/api";
import { usePedido } from "../context/PedidoContext";
import type { Mesa } from "../types";

export default function MesasPage() {
    const [mesas, setMesas] = useState<Mesa[]>([]);
    const [error, setError] = useState<string | null>(null);

    const { asignarMesa } = usePedido();

    useEffect(() => {
        async function fetchMesas() {
            try {
                const data = await getMesas();
                setMesas(data);
            } catch {
                setError("No se pudieron cargar las mesas");
            }
        }

        fetchMesas();
    }, []);

    const handleSeleccionarMesa = (mesa: Mesa) => {
        asignarMesa(String(mesa.numero));
    };

    return (
        <div>
            <h2>Mesas</h2>

            {error && <p>{error}</p>}

            {mesas.map((mesa) => (
                <div key={mesa.numero} onClick={() => handleSeleccionarMesa(mesa)}>
                    <h3>Mesa {mesa.numero}</h3>
                    <p>Capacidad: {mesa.capacidad}</p>
                    <p>Estado: {mesa.estado}</p>
                </div>
            ))}
        </div>
    );
}