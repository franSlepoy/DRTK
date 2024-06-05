import Home from "../components/pages/home/Home";
import Productos from "../components/pages/productos/Products";
import Routers from "../components/pages/productos/categorias/Routers";


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
  
  
];