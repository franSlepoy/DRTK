import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { routers, switches, puntosDeAcceso, accesorios } from "../ProductsData";

const DetalleDeProducto = () => {
  const { id } = useParams();

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

        {/* Header: texto + imagen */}
        <Box width={{ xs: "92%", md: "73%" }} m={"auto"}>
          <Box
            display={"flex"}
            pt={12}
            flexDirection={{ xs: "column-reverse", md: "row" }}
          >
            <Box>
              <Typography fontWeight={"500"} color={"#F08D97"} variant="h3">
                {producto.categoria}
              </Typography>
              <Typography mt={1} fontWeight={500} color={"#383A3C"} variant="h1">
                {producto.titulo}
              </Typography>
              <Typography fontWeight={300} color={"#7D7D7D"} variant="subtitle1">
                {producto.subTitulo}
              </Typography>
              <Typography
                width={{ xs: "100%", md: "90%" }}
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
            <Box
              ml={{ xs: 0, md: 2 }}
              mb={{ xs: 3, md: 0 }}
              textAlign={{ xs: "center", md: "left" }}
              flexShrink={0}
            >
              <img
                src={producto.imagen}
                alt="imagen de producto"
                style={{ maxHeight: "400px", maxWidth: "100%", width: "auto", height: "auto" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Stats (4 columnas → 2×2 en mobile) */}
        <Box
          width={{ xs: "92%", md: "80%" }}
          m={"auto"}
          mt={8}
          display={"flex"}
          flexWrap={{ xs: "wrap", md: "nowrap" }}
        >
          <Box
            width={{ xs: "50%", md: "25%" }}
            pl={0}
            pr={2}
            pb={2}
            pt={2}
            borderRight={"solid #7A7A7A 0.1px"}
          >
            <Typography textAlign={"center"} color={"#383A3C"} variant="h2">
              {producto.descripcionDetalle1}
            </Typography>
            <Typography
              textAlign={"center"}
              lineHeight={"21px"}
              color={"#383A3C"}
              variant="subtitle1"
              width={"200px"}
              m={"auto"}
            >
              {producto.subDescripcionDetalle1}
            </Typography>
          </Box>
          <Box width={{ xs: "50%", md: "25%" }} p={2} borderRight={"solid #7A7A7A 1px"}>
            <Typography textAlign={"center"} color={"#383A3C"} variant="h2">
              {producto.descripcionDetalle2}
            </Typography>
            <Typography
              textAlign={"center"}
              lineHeight={"21px"}
              color={"#383A3C"}
              variant="subtitle1"
              width={"160px"}
              m={"auto"}
            >
              {producto.subDescripcionDetalle2}
            </Typography>
          </Box>
          <Box width={{ xs: "50%", md: "25%" }} p={2} borderRight={"solid #7A7A7A 0.1px"}>
            <Typography textAlign={"center"} color={"#383A3C"} variant="h2">
              {producto.descripcionDetalle3}
            </Typography>
            <Typography
              textAlign={"center"}
              lineHeight={"21px"}
              color={"#383A3C"}
              variant="subtitle1"
              width={"160px"}
              m={"auto"}
            >
              {producto.subDescripcionDetalle3}
            </Typography>
          </Box>
          <Box width={{ xs: "50%", md: "25%" }} p={2}>
            <Typography textAlign={"center"} color={"#383A3C"} variant="h2">
              {producto.descripcionDetalle4}
            </Typography>
            <Typography
              textAlign={"center"}
              lineHeight={"21px"}
              color={"#383A3C"}
              variant="subtitle1"
              width={"180px"}
              m={"auto"}
            >
              {producto.subDescripcionDetalle4}
            </Typography>
          </Box>
        </Box>

        {/* Imagen de interfaz */}
        <Box mt={10} textAlign={"center"} px={{ xs: 2, md: 0 }}>
          <img
            src={producto.imagen2}
            alt="imagen de producto"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        {/* Entradas 1–9 */}
        <Box
          width={{ xs: "92%", md: "73%" }}
          justifyContent={"space-between"}
          m={"auto"}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          pt={5}
        >
          <Box mb={{ xs: 1, md: 0 }}>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada1}
            </Typography>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada2}
            </Typography>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada3}
            </Typography>
          </Box>
          <Box mb={{ xs: 1, md: 0 }}>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada4}
            </Typography>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada5}
            </Typography>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada6}
            </Typography>
          </Box>
          <Box>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada7}
            </Typography>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada8}
            </Typography>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada9}
            </Typography>
          </Box>
        </Box>

        {/* Entradas 10–13 */}
        <Box
          pt={2}
          pb={12}
          width={{ xs: "92%", md: "73%" }}
          justifyContent={"space-between"}
          m={"auto"}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada10}
            </Typography>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada11}
            </Typography>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada12}
            </Typography>
          </Box>
          <Box>
            <Typography lineHeight={"21px"} color={"#383A3C"} variant="subtitle1">
              {producto.entrada13}
            </Typography>
          </Box>
        </Box>

      </Box>
    </>
  );
};

export default DetalleDeProducto;
