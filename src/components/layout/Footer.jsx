import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box width={"100%"} height={"200px"} bgcolor={"#383A3C"}>
      <Box width={"70%"} m={"auto"} display={"flex"}>
        <Box width={"25%"} mt={4} >
          <Typography fontWeight={800} color={"primary"} variant="body2">DRTK</Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">Distribuidor Oficial DrayTek</Typography>
          <Typography  mt={2} fontWeight={200} color={"#EBEBEA"} variant="body2">Buenos Aires</Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">Peru 743, Piso 5, Dpto 31</Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">C1068AAE, CABA</Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2">Tel: 2152-3755</Typography>
        </Box>
        <Box width={"65%"} mt={10} >
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2"> <strong style={{fontWeight:500}}>E-mail:</strong> info@draytek.com.ar</Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2"> <strong style={{fontWeight:500}}>Ventas:</strong> ventas@draytek.com.ar</Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2"> <strong style={{fontWeight:500}}>Soporte:</strong> soporte@draytek.com.ar</Typography>
          <Typography fontWeight={200} color={"#EBEBEA"} variant="body2"> <strong style={{fontWeight:500}}>Administración:</strong> admin@draytek.com.ar</Typography>
        </Box>
        <Box width={"15%"} mt={4}>
          <img src="/300px-DrayTek_Logo3.png" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
