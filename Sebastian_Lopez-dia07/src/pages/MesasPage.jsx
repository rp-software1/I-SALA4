import { mesasMock } from "../data/mesas.mock";
import MesaCard from "../components/MesaCard";
import { Link } from "react-router-dom";

export default function MesasPage() {

    return (
        <div style={{ padding: "20px" }}>

            <h1>Estado de Mesas</h1>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                marginTop: "20px"
            }}>

                {mesasMock.map(mesa => (
                    <Link
                        key={mesa.id}
                        to={`/mesas/${mesa.id}`}
                        style={{
                            textDecoration: "none",
                            color: "inherit"
                        }}
                    >
                        <div style={{
                            border: "1px solid #ccc",
                            borderRadius: "10px",
                            padding: "10px",
                            minWidth: "150px",
                            transition: "0.2s"
                        }}>
                            <MesaCard mesa={mesa} />
                        </div>
                    </Link>
                ))}

            </div>

        </div>
    );
}