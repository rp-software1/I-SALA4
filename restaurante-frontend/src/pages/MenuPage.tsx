import { useEffect, useState } from "react";
import type { Plato } from "../types";

export default function MenuPage() {
    const [platos, setPlatos] = useState<Plato[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function cargar() {
            try {
                setLoading(true);
                const data = await getPlatos();
                setPlatos(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        cargar();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Menú</h2>

            {platos.map((p) => (
                <div key={p._id}>
                    {p.nombre} — S/ {p.precio}
                </div>
            ))}
        </div>
    );
}