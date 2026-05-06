import type { Mesa } from '../types';

interface Props {
    mesa: Mesa;
    onClick: (mesa: Mesa) => void;
}

export default function MesaCard({ mesa, onClick }: Props) {
    return (
        <div
            onClick={() => mesa.estado === 'libre' && onClick(mesa)}
            style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 10,
                background: mesa.estado === 'libre' ? '#e8ffe8' : '#ffe8e8',
                cursor: mesa.estado === 'libre' ? 'pointer' : 'not-allowed',
                width: 150,
                textAlign: 'center',
            }}
        >
            <h3>Mesa {mesa.numero}</h3>
            <p>Capacidad: {mesa.capacidad}</p>
            <strong>{mesa.estado}</strong>
        </div>
    );
}