import { Box, Typography } from "@mui/material";

const SolucionesCard = ({ id, titulo, imagen, descripcion }) => {
  return (
    <Box
      sx={{
        textDecoration: "none",
        bgcolor: "#FFFFFF",
        p: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box textAlign={"center"}>
        <img height={"120px"} src={imagen} alt="imagen de producto" />
      </Box>
      <Box mt={2}>
        <Typography
          sx={{ lineHeight: "24px" }}
          fontWeight={300}
          color={"#F08D97"}
          variant="h6"
        >
          {titulo}
        </Typography>
        <Typography mt={2} fontWeight={400} color={"#7D7D7D"} variant="body2">
          {descripcion}
        </Typography>
      </Box>
    </Box>
  );
};

export default SolucionesCard;
