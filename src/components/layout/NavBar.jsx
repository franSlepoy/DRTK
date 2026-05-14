import { Box, Typography, Button, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import DropdownMenu from "./DropdownMenu";
import DropdownMenu1 from "./DropdownMenu1";
import { useState } from "react";
import { categorias } from "../pages/productos/ProductsData";
import { soporteData } from "../pages/soporte/SoporteData";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMouseEnterProductos = () => {
    setMenuOpen(true);
    setMenuOpen1(false);
  };

  const handleMouseLeaveProductos = () => {
    setTimeout(() => { setMenuOpen(false); }, 100);
  };

  const handleMouseEnterSoporte = () => {
    setMenuOpen1(true);
    setMenuOpen(false);
  };

  const handleMouseLeaveSoporte = () => {
    setTimeout(() => { setMenuOpen1(false); }, 100);
  };

  const handleDownloadPDF = () => {
    const pdfURL = "/Catalogo.pdf";
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Catalogo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeMobile = () => setMobileOpen(false);
  const drawerLink = { textDecoration: "none", color: "inherit" };

  return (
    <>
      <Box>
        <Box pt={"6px"} height={"72px"} sx={{ bgcolor: "#EFEFEF" }}>
          <Box display={"flex"} position="relative" alignItems="center">

            {/* Logo */}
            <Box component={Link} to="/" mt={2} pl={2.8} pr={"1.6%"}>
              <img src="/300px-DrayTek_Logo3.png" alt="logo de la empresa" />
            </Box>

            {/* Desktop: nav izquierdo */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mt: "20px",
                ml: 2,
                width: "28.5%",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component={Link}
                to="/productos"
                onMouseEnter={handleMouseEnterProductos}
                sx={{ textDecoration: "none", color: "secondary.main", "&:hover": { color: "primary.main" } }}
                variant="subtitle1"
              >
                Productos
              </Typography>
              <Typography
                component={Link}
                to="/soporte"
                onMouseEnter={handleMouseEnterSoporte}
                sx={{ textDecoration: "none", color: "secondary.main", "&:hover": { color: "primary.main" } }}
                variant="subtitle1"
              >
                Soporte
              </Typography>
              <Typography
                component={Link}
                to="/soluciones"
                sx={{ textDecoration: "none", color: "secondary.main", "&:hover": { color: "primary.main" } }}
                variant="subtitle1"
              >
                Soluciones
              </Typography>
              <Typography
                component={Button}
                onClick={handleDownloadPDF}
                sx={{
                  mt: "-8px",
                  p: 0,
                  textTransform: "none",
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": { color: "primary.main", bgcolor: "transparent" },
                }}
                variant="subtitle1"
              >
                Catálogo
              </Typography>
            </Box>

            {/* Desktop: nav derecho */}
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              width={"59%"}
              mt={"20px"}
              pl={"31.5%"}
            >
              <Typography
                component={Link}
                to={"/nosotros"}
                variant="subtitle1"
                sx={{ textDecoration: "none", color: "secondary.main", "&:hover": { cursor: "pointer", color: "primary.main" } }}
              >
                Nosotros
              </Typography>
              <Typography
                ml={"7%"}
                variant="subtitle1"
                sx={{ textDecoration: "none", color: "secondary.main", "&:hover": { cursor: "pointer", color: "primary.main" } }}
              >
                <ScrollLink to="seccionDestino1" smooth={true}>
                  Contacto
                </ScrollLink>
              </Typography>
            </Box>

            {/* Mobile: botón hamburguesa */}
            <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto", mr: 2.5, mt: 1 }}>
              <Button
                onClick={() => setMobileOpen(true)}
                disableRipple
                sx={{
                  minWidth: "auto",
                  color: "secondary.main",
                  fontSize: "26px",
                  p: 0,
                  lineHeight: 1,
                  "&:hover": { bgcolor: "transparent", color: "primary.main" },
                }}
              >
                ☰
              </Button>
            </Box>

          </Box>
        </Box>

        {/* Dropdowns desktop */}
        {menuOpen && (
          <DropdownMenu
            handleMouseEnter={handleMouseEnterProductos}
            handleMouseLeave={handleMouseLeaveProductos}
          />
        )}
        {menuOpen1 && (
          <DropdownMenu1
            handleMouseEnter={handleMouseEnterSoporte}
            handleMouseLeave={handleMouseLeaveSoporte}
          />
        )}
      </Box>

      {/* Drawer mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobile}
        PaperProps={{ sx: { width: 260, p: 3 } }}
      >
        <Box display="flex" justifyContent="flex-end" mb={3}>
          <Button
            onClick={closeMobile}
            disableRipple
            sx={{
              minWidth: "auto",
              color: "secondary.main",
              fontSize: "20px",
              p: 0,
              "&:hover": { bgcolor: "transparent", color: "primary.main" },
            }}
          >
            ✕
          </Button>
        </Box>

        <Typography
          component={Link}
          to="/"
          onClick={closeMobile}
          variant="subtitle1"
          fontWeight={500}
          sx={{ ...drawerLink, display: "block", mb: 2, color: "secondary.main" }}
        >
          Inicio
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} color="primary.light" mb={0.5}>
          Productos
        </Typography>
        {categorias.map((cat) => (
          <Typography
            key={cat.id}
            component={Link}
            to={cat.link}
            onClick={closeMobile}
            variant="body1"
            sx={{ ...drawerLink, display: "block", pl: 1.5, mb: 0.5, color: "#7D7D7D", "&:hover": { color: "#F08D97" } }}
          >
            {cat.titulo}
          </Typography>
        ))}

        <Typography variant="subtitle1" fontWeight={600} color="primary.light" mt={2} mb={0.5}>
          Soporte
        </Typography>
        {soporteData.map((item) => (
          <Typography
            key={item.id}
            component={Link}
            to={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            variant="body1"
            sx={{ ...drawerLink, display: "block", pl: 1.5, mb: 0.5, color: "#7D7D7D", "&:hover": { color: "#F08D97" } }}
          >
            {item.titulo}
          </Typography>
        ))}

        <Typography
          component={Link}
          to="/soluciones"
          onClick={closeMobile}
          variant="subtitle1"
          fontWeight={500}
          sx={{ ...drawerLink, display: "block", mt: 2, mb: 1, color: "secondary.main" }}
        >
          Soluciones
        </Typography>

        <Typography
          variant="subtitle1"
          fontWeight={500}
          color="secondary.main"
          mt={1}
          mb={1}
          onClick={() => { handleDownloadPDF(); closeMobile(); }}
          sx={{ cursor: "pointer" }}
        >
          Catálogo
        </Typography>

        <Typography
          component={Link}
          to="/nosotros"
          onClick={closeMobile}
          variant="subtitle1"
          fontWeight={500}
          sx={{ ...drawerLink, display: "block", mt: 1, mb: 1, color: "secondary.main" }}
        >
          Nosotros
        </Typography>

        <ScrollLink to="seccionDestino1" smooth={true} onClick={closeMobile}>
          <Typography
            variant="subtitle1"
            fontWeight={500}
            color="secondary.main"
            mt={1}
            sx={{ cursor: "pointer" }}
          >
            Contacto
          </Typography>
        </ScrollLink>
      </Drawer>
    </>
  );
};

export default NavBar;
