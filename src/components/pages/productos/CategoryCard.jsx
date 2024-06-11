import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const CategoryCard = ({ id, link, titulo, imagen }) => {
  return (
    <>
      <Box
        component={Link}
        to={link}
        sx={{
          display: "flex",
          flexDirection: "column",
          width:"100%",
          textDecoration: "none",
          bgcolor: "#FFFFFF",
          p: 2.5,
          m: "5px",
          '&:hover .title': { // Selecciona el título cuando se hace hover sobre la tarjeta
            fontWeight: '500',
          },
        }}
      >
        <Box m={"auto"}>
          <img width={"100%"} src={imagen} alt="" />
        </Box>
        <Box>
          <Typography className="title" fontWeight={300} color={"#F08D97"} pt={1.5} variant="h3">
            {titulo}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CategoryCard;
