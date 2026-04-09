export default function PlatoCard({ plato }) {

    return (
        <div className={`card ${plato.disponible ? "disponible " : "agotado "}`}>

            <h3>{plato.nombre}</h3>

            <p>Categoria: {plato.categoria}</p>

            <p>Precio: S/{plato.precio}</p>

            <p>Stock: {plato.stock}</p>

            <p>
                {plato.disponible ? " Disponible " : " Agotado "}
            </p>

        </div>
    );
}