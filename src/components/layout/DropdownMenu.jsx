import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import {
  categorias,
  routers,
  switches,
  puntosDeAcceso,
  accesorios,
} from "../pages/productos/ProductsData"; // Ajusta la ruta a tu archivo de datos

const DropdownMenu = ({ handleMouseEnter, handleMouseLeave }) => {
  // Map categories to their respective products
  const categoriesWithProducts = {
    Routers: routers,
    Switches: switches,
    "Puntos de Acceso": puntosDeAcceso,
    Accesorios: accesorios,
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "absolute",
        top: "72px",
        left: "12%",
        width: "32%",
        bgcolor: "#FFFFFF",
        boxShadow: 3,
        display: "block",
        zIndex: 10,
        p: "20px",
      }}
    >
      <Grid container >
        {categorias.map((category) => (
          <Grid item xs={3} key={category.id}>
            <Typography
              fontWeight={500}
              mt={"8px"}
              p={"4px"}
              lineHeight={"16px"}
              variant="body2"
              color="#F08D97"
              
            >
              <Link
                to={category.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {category.titulo}
              </Link>
            </Typography>
            {categoriesWithProducts[category.titulo]?.map((product) => (
              <Typography
                color={"#7D7D7D"}
                lineHeight={"16px"}
                variant="body2"
                key={product.id}
                sx={{
                  mt: "8px",
                  p: "4px",
                  "&:hover": {
                    color: "#F08D97",
                    fontWeight: "500",
                  },
                }}
              >
                <Link
                  to={product.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.tituloMenu}
                </Link>
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DropdownMenu;
