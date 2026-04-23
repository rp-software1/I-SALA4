type EstadoMesa = "libre" | "ocupada" | "reservada";

interface Mesa {
    numero: number;
    capacidad: number;
    estado: EstadoMesa;
    comensales: number;
}

interface Props {
    mesa: Mesa;
}

export default function MesaCard({ mesa }: Props) {
    const { numero, capacidad, estado, comensales } = mesa;

    return (
        <div className={`card ${estado}`}>
            <h3>Mesa {numero}</h3>
            <p>Capacidad: {capacidad}</p>
            <p>Comensales: {comensales}</p>

            <p>
                {estado === "libre" && "🟢 Libre"}
                {estado === "ocupada" && "🔴 Ocupada"}
                {estado === "reservada" && "🟡 Reservada"}
            </p>
        </div>
    );
}