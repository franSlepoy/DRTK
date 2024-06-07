import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  link,
  titulo,
  imagen,
  descripcion1,
  descripcion2,
  descripcion3,
  descripcion4,
  descripcion5,
}) => {
  return (
    <Box
      component={Link}
      to={link}
      sx={{
        textDecoration: "none",
        bgcolor: "#FFFFFF",
        p: 4,
        height: '100%',
        display: "flex",
        flexDirection: "column",
        '&:hover .title': { // Selecciona el título cuando se hace hover sobre la tarjeta
            fontWeight: '600',
          },
      }}
    >
      <Box textAlign={"center"}>
        <img height={"120px"} src={imagen} alt="imagen de producto" />
      </Box>
      <Box mt={2}>
        <Typography className="title" sx={{lineHeight:"24px"}} fontWeight={300} color={"#F08D97"} variant="h6">
          {titulo}
        </Typography>
        <Typography mt={2} fontWeight={400} color={"#7D7D7D"} variant="body2">
          {descripcion1}
        </Typography>
        <Typography
          lineHeight={"18px"}
          fontWeight={400}
          color={"#7D7D7D"}
          variant="body2"
        >
          {descripcion2}
        </Typography>
        <Typography
          lineHeight={"18px"}
          fontWeight={400}
          color={"#7D7D7D"}
          variant="body2"
        >
          {descripcion3}
        </Typography>
        <Typography
          lineHeight={"18px"}
          fontWeight={400}
          color={"#7D7D7D"}
          variant="body2"
        >
          {descripcion4}
        </Typography>
        <Typography
          lineHeight={"18px"}
          fontWeight={400}
          color={"#7D7D7D"}
          variant="body2"
        >
          {descripcion5}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
