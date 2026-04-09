import { useState } from "react";
import NavBar from "./components/NavBar";
import MenuPage from "./pages/MenuPage";
import MesasPage from "./pages/MesasPage";
import ComandasPage from "./pages/ComandasPage";
import CarritoPage from "./pages/CarritoPage";

export default function App() {
  const [pagina, setPagina] = useState("carta");

  function renderPagina() {
    switch (pagina) {
      case "carta":
        return <MenuPage />;
      case "mesas":
        return <MesasPage />;
      case "comandas":
        return <ComandasPage />;
      case "carrito":
        return <CarritoPage />;
      default:
        return <MenuPage />;
    }
  }

  return (
    <div>
      <NavBar nombreRestaurante="Restaurante Sebastián" setPagina={setPagina} />
      {renderPagina()}
    </div>
  );
}