import { useState } from "react";
import Home from "./pages/Home";
import MesasPage from "./pages/MesasPage";
import ComandasPage from "./pages/ComandasPage";
import CarritoPage from "./pages/CarritoPage";
import NavBar from "./components/NavBar";

function App() {

  const [pagina, setPagina] = useState("carta");

  return (
    <div>

      <NavBar
        setPagina={setPagina}
        nombreRestaurante="Restaurante Sebastián"
      />

      {pagina === "carta" && <Home />}
      {pagina === "mesas" && <MesasPage />}
      {pagina === "comandas" && <ComandasPage />}
      {pagina === "carrito" && <CarritoPage />}

    </div>
  );
}

export default App;