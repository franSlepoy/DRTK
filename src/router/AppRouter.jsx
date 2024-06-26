import { Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes";
import Layout from "../components/layout/Layout";


const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      
      {/* RUTAS PROTEGIDAS <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Route> */}

      <Route path="*" element={<h1>404 no encontrada</h1>} />
    </Routes>
  );
};

export default AppRouter;