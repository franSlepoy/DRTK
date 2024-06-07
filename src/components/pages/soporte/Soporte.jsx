import { Box, Grid, Typography } from "@mui/material";
import { soporteData } from "./SoporteData";
import SoporteCard from "./SoporteCard";

const Soporte = () => {
  return (
    <>
      <Box ml={-2} bgcolor={"#FAFAFA"} pt={8} pb={10}>
        <Box textAlign={"center"} mb={5}>
          <Typography fontWeight={"300"} variant="h1" color={"secondary"}>
            Soporte Técnico
          </Typography>
        </Box>

        <Box pt={4.5} width={"70%"} m={"auto"}>
          <Grid container spacing={2}>
            {soporteData.map((card) => (
              <Grid item xs={12} sm={6} md={3} key={card.id}>
                <SoporteCard
                  imagen={card.imagen}
                  titulo={card.titulo}
                  link={card.link}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box width={"65%"} m={"auto"}>
          <Box width={"72%"}>
            <Typography
              lineHeight={"21px"}
              color={"#7D7D7D"}
              mt={5}
              variant="subtitle1"
            >
              <strong>
                Tel: 2152-3755 |
                <a
                  style={{
                    textTransform: "none",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                  href="mailto:soporte@draytek.com.ar "
                >
                  {""} E-mail: soporte@draytek.com.ar
                </a>
              </strong>
            </Typography>
            <Typography
              lineHeight={"21px"}
              color={"#7D7D7D"}
              mt={3}
              variant="subtitle1"
            >
              Al comunicarse con soporte técnico por favor indique el{" "}
              <strong>Modelo,</strong> el {""}
              <strong>Número de Serie</strong> y la{" "}
              <strong>Versión de Firmware</strong> del producto por el cual está
              realizando la consulta.
            </Typography>
            <Typography
              lineHeight={"21px"}
              color={"#7D7D7D"}
              mt={3}
              variant="subtitle1"
            >
              DRTK ofrece cursos gratuitos de capacitación técnica de DrayTek.
              Si usted es un Integrador de Sistemas o un Reseller de Informática
              y desea participar de los mismos por favor comuníquese con
              nosotros.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Soporte;
