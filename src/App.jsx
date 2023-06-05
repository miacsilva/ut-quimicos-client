/* import { useState } from 'react' */
import { Routes, Route } from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Parceiros from "./pages/Parceiros";
import TintasVernizes from "./pages/TintasVernizes";
import Curtumes from "./pages/Curtumes";
import Plásticos from "./pages/Plásticos";
import Papel from "./pages/Papel";
import CorticaCompositos from "./pages/CorticaCompositos";
import DetergenteCosmetica from "./pages/DetergenteCosmetica";
import Contactos from "./pages/Contactos";
import OutrasIndustrias from "./pages/outrasIndustrias";

/* CSS */
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/tintas-vernizes" element={<TintasVernizes />} />
        <Route path="/produtos/curtumes" element={<Curtumes />} />
        <Route path="/produtos/plasticos" element={<Plásticos />} />
        <Route path="/produtos/papel" element={<Papel />} />
        <Route
          path="/produtos/cortica-compositos"
          element={<CorticaCompositos />}
        />
        <Route
          path="/produtos/detergentes-cosmetica"
          element={<DetergenteCosmetica />}
        />
        <Route
          path="/produtos/outras-industrias"
          element={<OutrasIndustrias />}
        />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
