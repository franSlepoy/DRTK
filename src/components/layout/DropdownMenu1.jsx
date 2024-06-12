import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { soporteData } from "../pages/soporte/SoporteData";

const DropdownMenu1 = ({ handleMouseEnter, handleMouseLeave }) => {
  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "absolute",
        top: "72px",
        left: "21%",
        width: "12%",
        bgcolor: "#FFFFFF",
        boxShadow: 3,
        display: "block",
        zIndex: 10,
        p: "32px",
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
            mt={"8px"}
            p={"4px"}
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
        ))}
      </Grid>
    </Box>
  );
};

export default DropdownMenu1;
