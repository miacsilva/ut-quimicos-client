import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


/* Pages */
import Home from "./pages/Home";
import Sobre from './pages/Sobre';
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


/* Layout */
import RootLayout from './layouts/RootLayout.jsx';



/* CSS */
import "./App.css";
import "./fonts/AzoftSans/azoft-sans(2).ttf"



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>

    <Route path="/" element={<Home />} />


        <Route path="/sobre" element={<Sobre />} />
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
      

        </Route>

       
  )
  )



function App() {
  return (
    <>

<RouterProvider router={router} />

    </>
  );
}

export default App;
