export default function MesaCard({ mesa }) {

    const { numero, capacidad, estado, comensales } = mesa;

    return (

        <div className={`card ${estado}`}>

            <h3>mesa {numero}</h3>

            <p>capacidad: {capacidad}</p>

            <p>comensales: {comensales}</p>

            <p>
                {estado === "libre" && "🟢  Libre"}
                {estado === "ocupada" && "🔴  Ocupada"}
                {estado === "reservada" && "🟡  Reservada"}
            </p>

        </div>

    );
}