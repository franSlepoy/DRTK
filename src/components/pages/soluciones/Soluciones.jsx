import { Box, Grid, Typography } from "@mui/material";
import SolucionesCard from "./SolucionesCard";
import { solucionesData } from "./SolucionesData";

const Soluciones = () => {
  return (
    <Box ml={-2} bgcolor={"#FAFAFA"} pt={8} pb={10}>
      <Box textAlign={"center"} mb={5}>
        <Typography fontWeight={"300"} variant="h1" color={"secondary"}>
          Soluciones Destacadas
        </Typography>
      </Box>

      <Box ml={-3}>
        <Box pt={4.5} width={"70%"} m={"auto"}>
          <Grid container spacing={2}>
            {solucionesData.map((card) => (
              <Grid item xs={12} sm={6} md={3} key={card.id}>
                <SolucionesCard
                  imagen={card.imagen}
                  titulo={card.titulo}
                  descripcion={card.decripcion}
                 
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Soluciones;
