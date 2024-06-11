import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import DropdownMenu from "./DropdownMenu"; // Ajusta la ruta según tu estructura de archivos
import { useState } from "react";
import DropdownMenu1 from "./DropdownMenu1";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);

  const [menuOpen1, setMenuOpen1] = useState(false);

  const handleMouseEnter1 = () => setMenuOpen1(true);
  const handleMouseLeave1 = () => setMenuOpen1(false);

  const handleDownloadPDF = () => {
    const pdfURL = "/Catalogo.pdf";
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Catalogo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Box>
        <Box pt={"6px"} height={"72px"} sx={{ bgcolor: "#EFEFEF" }}>
          <Box display={"flex"} position="relative">
            <Box component={Link} to="/" mt={2} pl={2.8} pr={"1.6%"}>
              <img src="/300px-DrayTek_Logo3.png" alt="logo de la empresa" />
            </Box>

            <Box
              mt={"20px"}
              ml={0}
              width={"28.5%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography
                component={Link}
                to="/productos"
                onMouseEnter={handleMouseEnter}
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                variant="subtitle1"
              >
                Productos
              </Typography>
              <Typography
                onMouseEnter={handleMouseEnter1}
                component={Link}
                to="/Soporte"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                variant="subtitle1"
              >
                Soporte
              </Typography>
              <Typography
                component={Link}
                to="/soluciones"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
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
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "transparent",
                  },
                }}
                variant="subtitle1"
              >
                Catálogo
              </Typography>
            </Box>

            <Box width={"59%"} mt={"20px"} pl={"31.5%"} display={"flex"}>
              <Typography
              component={Link}
              to={"/nosotros"}
                variant="subtitle1"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    cursor: "pointer",
                    color: "primary.main",
                  },
                }}
              >
               
                  Nosotros
               
              </Typography>
              <Typography
                ml={"7%"}
                variant="subtitle1"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    cursor: "pointer",
                    color: "primary.main",
                  },
                }}
              >
                <ScrollLink to="seccionDestino1" smooth={true}>
                  Contacto
                </ScrollLink>
              </Typography>
            </Box>
          </Box>
        </Box>
        {menuOpen && (
          <DropdownMenu
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        )}
        {menuOpen1 && (
          <DropdownMenu1
            handleMouseEnter1={handleMouseEnter1}
            handleMouseLeave1={handleMouseLeave1}
          />
        )}
      </Box>
    </>
  );
};

export default NavBar;
