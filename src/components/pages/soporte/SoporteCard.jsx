import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SoporteCard = ({ id, link, titulo, imagen }) => {
  return (
    <>
      <Box
        component={Link}
        to={link}
        target="_blank" // Abre el enlace en una nueva pestaña
        rel="noopener noreferrer" // Mejora la seguridad
        sx={{
          textDecoration: "none",
          p: 2.5,
          m: "5px",
          '&:hover .title': { // Selecciona el título cuando se hace hover sobre la tarjeta
            fontWeight: '600',
          },
        }}
      >
        <Box textAlign={"center"}>
          <img
            height={"220px"}
            width={"220px"}
            src={imagen}
            alt="logo de soporte"
          />
        </Box>
        <Box>
          <Typography
            textAlign={"center"}
            fontWeight={300}
            color={"#F08D97"}
            pt={1.5}
            variant="h3"
            className="title"
          >
            {titulo}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SoporteCard;
