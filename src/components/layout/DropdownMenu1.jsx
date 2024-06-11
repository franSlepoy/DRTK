import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { soporteData } from "../pages/soporte/SoporteData";

const DropdownMenu1 = ({ handleMouseEnter1, handleMouseLeave1 }) => {
  return (
    <Box
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}
      sx={{
        position: "absolute",
        top: "72px",
        left: "21%",
        width: "10%",
        bgcolor: "#FFFFFF",
        boxShadow: 3,
        display: "block",
        zIndex: 10,
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        {soporteData.map((category) => (
          <Typography
            key={category.id}
            sx={{
              "&:hover": {
                color: "#F08D97",
                fontWeight: "500",
              },
            }}
            pl={1}
            pt={1}
            color={"#7D7D7D"}
            lineHeight={"16px"}
            variant="body2"
          >
            <Link
              to={category.link}
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Mejora la seguridad
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {category.titulo}
            </Link>
          </Typography>
          /*  {categoriesWithProducts[category.titulo]?.map((product) => (
              <Typography
                color={"#7D7D7D"}
                lineHeight={"16px"}
                variant="body2"
                key={product.id}
                sx={{
                  mt: 1,
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
                  {product.titulo}
                </Link>
              </Typography>
            ))} */
        ))}
      </Grid>
    </Box>
  );
};

export default DropdownMenu1;
