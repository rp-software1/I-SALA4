import type { Plato } from "../types";

export default function PlatoCard({
    plato,
    onAgregar,
}: {
    plato: Plato;
    onAgregar: (p: Plato) => void;
}) {
    return (
        <div>
            <h3>{plato.nombre}</h3>
            <p>S/ {plato.precio}</p>
            <button onClick={() => onAgregar(plato)}>Agregar</button>
        </div>
    );
}