interface Plato {
    _id: string;
    nombre: string;
    precio: number;
}

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