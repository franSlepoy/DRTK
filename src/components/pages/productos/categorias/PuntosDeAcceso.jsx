import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { puntosDeAcceso, routers } from "../ProductsData";


const PuntosDeAcceso = () => {
  return (
    <>
      <Box pb={8} width={"100%"} bgcolor={"#FAFAFA"}>
        <Box width={"73%"} m={"auto"} pl={"5px"} pt={11}>
          <Typography sx={{ fontWeight: "450" }} variant="h1" color={"#F08D97"}>
          Puntos de Acceso
          </Typography>
        </Box>

        <Box ml={-3}>
      <Box pt={4.5} width={"70%"} m={"auto"}>
        <Grid container spacing={2}>
          {puntosDeAcceso.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <ProductCard
                imagen={card.imagen}
                titulo={card.titulo}
                descripcion1={card.descripcion1}
                descripcion2={card.descripcion2}
                descripcion3={card.descripcion3}
                descripcion4={card.descripcion4}
                descripcion5={card.descripcion5}
                link={card.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
      </Box>
    </>
  );
};

export default PuntosDeAcceso;
