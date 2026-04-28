import type { Plato } from "../types";

interface Props {
    plato: Plato;
    onAgregar: (plato: Plato) => void;
}

export default function PlatoCard({ plato, onAgregar }: Props) {
    return (
        <div>
            <h3>{plato.nombre}</h3>
            <p>S/ {plato.precio}</p>

            <button onClick={() => onAgregar(plato)}>
                Agregar
            </button>
        </div>
    );
}