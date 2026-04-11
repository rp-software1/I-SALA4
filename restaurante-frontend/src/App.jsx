import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MesasPage from "./pages/MesasPage";
import ComandasPage from "./pages/ComandasPage";
import CarritoPage from "./pages/CarritoPage";
import NavBar from "./components/NavBar";
import DetalleMesa from "./pages/DetalleMesa";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar nombreRestaurante="Restaurante Sebastián" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mesas" element={<MesasPage />} />
        <Route path="/comandas" element={<ComandasPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
        <Route path="/mesas/:id" element={<DetalleMesa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;