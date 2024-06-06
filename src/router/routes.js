import Home from "../components/pages/home/Home";
import Productos from "../components/pages/productos/Products";
import Accesorios from "../components/pages/productos/categorias/Accesorios";
import PuntosDeAcceso from "../components/pages/productos/categorias/PuntosDeAcceso";
import Routers from "../components/pages/productos/categorias/Routers";
import Switches from "../components/pages/productos/categorias/Switches";


export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
   {
    id: "productos",
    path: "/Productos",
    Element: Productos,
  },
  {
    id: "routers",
    path: "/routers",
    Element: Routers,
  },
  {
    id: "switches",
    path: "/switches",
    Element: Switches,
  },
  {
    id: "puntosDeAcceso",
    path: "/puntosDeAcceso",
    Element: PuntosDeAcceso,
  },
  {
    id: "accesorios",
    path: "/accesorios",
    Element: Accesorios,
  },
  
  
];