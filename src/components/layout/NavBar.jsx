import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleDownloadPDF = () => {
    // Construye la URL del archivo PDF
    const pdfURL = "/AminoMed2024.pdf";

    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "AminoMed2024.pdf"; // Nombre del archivo a descargar

    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace temporal
    document.body.removeChild(link);
  };
  return (
    <>
      <Box>
        <Box pt={"6px"} height={"72px"} sx={{ bgcolor: "#EFEFEF" }}>
          <Box display={"flex"}>
            <Box component={Link} to="/" mt={2} pl={"2%"} pr={"1.6%"}>
              <img src="/300px-DrayTek_Logo3.png" alt="logo de la empresa" />
            </Box>

            <Box
              mt={"20px"}
              ml={1}
              width={"28.5%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography
                component={Link}
                to="/Productos"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main", // Cambia a tu color deseado
                  },
                }}
                variant="subtitle1"
              >
                {" "}
                Productos
              </Typography>
              <Typography
                component={Link}
                to="/Soporte"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main", // Cambia a tu color deseado
                  },
                }}
                variant="subtitle1"
              >
                {" "}
                Soporte
              </Typography>
              <Typography
                component={Link}
                to="/soluciones"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main", // Cambia a tu color deseado
                  },
                }}
                variant="subtitle1"
              >
                {" "}
                Soluciones
              </Typography>
              <Typography
                component={Link}
                to="/Catálogo"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main", // Cambia a tu color deseado
                  },
                }}
                variant="subtitle1"
              >
                {" "}
                Catálogo
              </Typography>
            </Box>

            <Box width={"59%"} mt={2} pl={"31%"} display={"flex"}>
              <Typography
                component={Link}
                to="/Nosotros"
                variant="subtitle1"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main", // Cambia a tu color deseado
                  },
                }}
              >
                Nosotros
              </Typography>
              <Typography
                component={Link}
                to="/Contacto"
                ml={"7%"}
                variant="subtitle1"
                sx={{
                  textDecoration: "none",
                  color: "secondary.main",
                  "&:hover": {
                    color: "primary.main", // Cambia a tu color deseado
                  },
                }}
              >
                Contacto
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
