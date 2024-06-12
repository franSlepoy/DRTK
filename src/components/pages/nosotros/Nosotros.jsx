import { Box, Divider, Typography } from "@mui/material";

const Nosotros = () => {
  return (
    <>
      <Box pb={12}>
        <Box id="seccionDestino" textAlign={"center"} mt={8}>
          <Typography fontWeight={"300"} variant="h1" color={"secondary"}>
            Nosotros
          </Typography>
        </Box>
        <Box pt={5} width={"73%"} m={"auto"} display={"flex"}>
          <Box width={"60%"}>
            <Box>
              <Typography
                color={"#F08D97"}
                variant="subtitle1"
                fontWeight={"600"}
                sx={{ lineHeight: "21px" }}
              >
                DrayTek
              </Typography>
              <Typography
                color={"#7A7A7A"}
                variant="subtitle1"
                fontWeight={"300"}
                sx={{ lineHeight: "21px", mt: 3 }}
              >
                Fundada en 1997, DrayTek Corporation es un fabricante de equipos
                de red y sistemas de gestión con sede en Taiwán. Desde ISDN,
                VDSL hasta LTE, DrayTek siempre se ha esforzado por proporcionar
                a las PyMEs y a los profesionales conexiones confiables, rápidas
                y seguras. Nuestra misión es brindar servicios de conectividad
                altamente integrados y de alta calidad a un precio asequible y
                ser su socio confiable para soluciones de red.
              </Typography>
            </Box>
            <Divider sx={{ mt: 3 }} />
            <Box mt={4}>
              <Typography
                color={"#F08D97"}
                variant="subtitle1"
                fontWeight={"600"}
                sx={{ lineHeight: "21px" }}
              >
                DRTK
              </Typography>
              <Typography
                color={"#7A7A7A"}
                variant="subtitle1"
                fontWeight={"300"}
                sx={{ lineHeight: "21px", mt: 3 }}
              >
                ¡Estamos orgullosos de representar oficialmente la marca DrayTek
                en el mercado argentino!
              </Typography>
              <Typography
                color={"#7A7A7A"}
                variant="subtitle1"
                fontWeight={"300"}
                sx={{ lineHeight: "21px" }}
              >
                Nuestro objetivo es ofrecer un servicio integral preventa y
                postventa, asistencia y soporte técnico, así como un plan de
                formación integral para revendedores que deseen profundizar sus
                habilidades en este sector en constante evolución.
              </Typography>
            </Box>
          </Box>
          <Box mt={6} ml={10}>
            <img src="/about_banner 1.png" alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Nosotros;
