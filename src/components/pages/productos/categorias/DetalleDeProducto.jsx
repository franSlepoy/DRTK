import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { routers, switches, puntosDeAcceso, accesorios } from "../ProductsData"; // Asegúrate de importar todos los productos

const DetalleDeProducto = () => {
  const { id } = useParams();

  // Encuentra el producto correspondiente
  const producto = [
    ...routers,
    ...switches,
    ...puntosDeAcceso,
    ...accesorios,
  ].find((p) => p.id === parseInt(id));

  if (!producto) {
    return <Typography variant="h1">Producto no encontrado</Typography>;
  }
  return (
    <>
      <Box bgcolor={"#FAFAFA"}>
        <Box width={"73%"} m={"auto"}>
          <Box display={"flex"} pt={12}>
            <Box>
              <Typography fontWeight={"500"} color={"#F08D97"} variant="h3">
                {producto.categoria}
              </Typography>
              <Typography
                mt={1}
                fontWeight={500}
                color={"#383A3C"}
                variant="h1"
              >
                {producto.titulo}
              </Typography>
              <Typography
                fontWeight={300}
                color={"#7D7D7D"}
                variant="subtitle1"
              >
                {producto.subTitulo}
              </Typography>
              <Typography
                width={"90%"}
                mt={2}
                mb={2}
                fontWeight={300}
                lineHeight={"18px"}
                color={"#383A3C"}
                variant="body1"
              >
                {producto.descripcionLarga}
              </Typography>

              <Typography
                pt={2}
                fontWeight={"300"}
                color={"#D42D26"}
                variant="subtitle1"
                component={Link}
                to={producto.masInfo}
              >
                + info
              </Typography>
            </Box>
            <Box ml={2}>
              <img
                height={"400px"}
                src={producto.imagen}
                alt="imagen de producto"
              />
            </Box>
          </Box>
          <Box mt={6} display={"flex"}>
            <Box>
              <Typography variant="h2">{producto.descripcionDetalle1}</Typography>
              <Typography>{producto.subDescripcionDetalle1}</Typography>
            </Box>
            <Box>
              <Typography>{producto.descripcionDetalle2}</Typography>
              <Typography>{producto.subDescripcionDetalle2}</Typography>
            </Box>
            <Box>
              <Typography>{producto.descripcionDetalle3}</Typography>
              <Typography>{producto.subDescripcionDetalle3}</Typography>
            </Box>
            <Box>
              <Typography>{producto.descripcionDetalle4}</Typography>
              <Typography>{producto.subDescripcionDetalle4}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DetalleDeProducto;
