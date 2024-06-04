import { Box, Typography } from "@mui/material";
import { categorias } from "./ProductsData";
import CategoryCard from "./CategoryCard";

const Productos = () => {
  return (
    <Box>
      <Box textAlign={"center"} mb={5}>
        <Typography fontWeight={"300"} variant="h1" color={"secondary"}>
          Productos
        </Typography>
      </Box>

      <Box display={"flex"} width={"73%"} m={"auto"}>
        {categorias.map((card) => (
          <CategoryCard
            key={card.id}
            titulo={card.titulo}
            imagen={card.imagen}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Productos;
