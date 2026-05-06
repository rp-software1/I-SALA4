import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import MesasPage from "./pages/MesasPage";
import CarritoPage from "./pages/CarritoPage";
import NavBar from "./components/NavBar";
import { PedidoProvider } from "./context/PedidoContext";

function App() {
  return (
    <PedidoProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/mesas" element={<MesasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Routes>
      </BrowserRouter>
    </PedidoProvider>
  );
}

export default App;