import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box  id="seccionDestino1" width={"100%"} height={"200px"} bgcolor={"#383A3C"}>
      <Box width={"73%"} m={"auto"} display={"flex"}>
        <Box width={"25%"} mt={4}>
          <Typography fontWeight={800} color={"primary"} variant="body2">
            DRTK
          </Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">
            Distribuidor Oficial DrayTek
          </Typography>
          <Typography mt={2} fontWeight={200} color={"#EBEBEA"} variant="body2">
            Buenos Aires
          </Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">
            Peru 743, Piso 5, Dpto 31
          </Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">
            C1068AAE, CABA
          </Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">
            Tel: 2152-3755
          </Typography>
        </Box>
        <Box width={"65%"} mt={10}>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">
            {" "}
            <strong style={{ fontWeight: 500 }}>E-mail: </strong>
            <a
              style={{
                textTransform: "none",
                color: "inherit",
                textDecoration: "none",
              }}
              href="mailto: info@draytek.com.ar"
            >
              info@draytek.com.ar
            </a>{" "}
          </Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">
            {" "}
            <strong style={{ fontWeight: 500 }}> Ventas: </strong>
            <a
              style={{
                textTransform: "none",
                color: "inherit",
                textDecoration: "none",
              }}
              href="mailto: ventas@draytek.com.ar"
            >
              ventas@draytek.com.ar
            </a>{" "}
          </Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">
            {" "}
            <strong style={{ fontWeight: 500 }}>Soporte: </strong>{" "}
            <a
              style={{
                textTransform: "none",
                color: "inherit",
                textDecoration: "none",
              }}
              href="mailto: soporte@draytek.com.ar"
            >
              soporte@draytek.com.ar
            </a>{" "}
          </Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">
            {" "}
            <strong style={{ fontWeight: 500 }}>Administración: </strong>{" "}
            <a
              style={{
                textTransform: "none",
                color: "inherit",
                textDecoration: "none",
              }}
              href="mailto: admin@draytek.com.ar"
            >
              admin@draytek.com.ar
            </a>{" "}
          </Typography>
        </Box>
        <Box ml={-5} width={"15%"} mt={4}>
          <img src="/300px-DrayTek_Logo3.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
