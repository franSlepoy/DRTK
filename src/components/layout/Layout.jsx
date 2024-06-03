import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <div>
        <NavBar/>
      </div>

      <div >
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
