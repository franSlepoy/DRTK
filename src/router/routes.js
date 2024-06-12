import Home from "../components/pages/home/Home";
import Nosotros from "../components/pages/nosotros/Nosotros";
import Productos from "../components/pages/productos/Products";
import Accesorios from "../components/pages/productos/categorias/Accesorios";
import DetalleDeProducto from "../components/pages/productos/categorias/DetalleDeProducto";
import PuntosDeAcceso from "../components/pages/productos/categorias/PuntosDeAcceso";
import Routers from "../components/pages/productos/categorias/Routers";
import Switches from "../components/pages/productos/categorias/Switches";
import Vigor2915 from "../components/pages/productos/detallesDeProductos/Vigor2915";
import Soluciones from "../components/pages/soluciones/Soluciones";
import Soporte from "../components/pages/soporte/Soporte";
 


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
  {
    id: "soporte",
    path: "/soporte",
    Element: Soporte,
  },
  {
    id: "soluciones",
    path: "/soluciones",
    Element: Soluciones,
  },
  {
    id: "detalleDeProducto",
    path: "/detalleDeProducto/:id",
    Element: DetalleDeProducto,
  },
  {
    id: "nosotros",
    path: "/nosotros",
    Element: Nosotros,
  },
  {
    id: "Vigor2915.jsx",
    path: "/Vigor2915",
    Element: Vigor2915 ,
  },
  
  
];