import { useState } from "react";
import MenuPage from "./pages/MenuPage";
import CarritoPage from "./pages/CarritoPage";

export default function App() {

    const [pagina, setPagina] = useState("menu");

    return (
        <div>

            <h1>Restaurante Sebastián</h1>

            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setPagina("menu")}>
                    Menú API
                </button>

                <button onClick={() => setPagina("carrito")}>
                    Carrito
                </button>
            </div>

            {pagina === "menu" && <MenuPage />}
            {pagina === "carrito" && <CarritoPage />}

        </div>
    );
}