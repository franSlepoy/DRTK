import { Box, Grid, Typography } from "@mui/material";
import { categorias } from "./ProductsData";
import CategoryCard from "./CategoryCard";

const Productos = () => {
  return (
    <Box ml={-2} bgcolor={"#FAFAFA"} pt={8} pb={8}>
      <Box textAlign={"center"} mb={5}>
        <Typography fontWeight={"300"} variant="h1" color={"secondary"}>
          Productos
        </Typography>
      </Box>

      <Box ml={{ xs: 0, md: -3 }}>
        <Box pt={4.5} width={{ xs: "92%", md: "70%" }} m={"auto"}>
          <Grid container spacing={2}>
            {categorias.map((card) => (
              <Grid item xs={12} sm={6} md={3} key={card.id}>
                <CategoryCard
                  imagen={card.imagen}
                  titulo={card.titulo}
                  link={card.link}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Productos;
