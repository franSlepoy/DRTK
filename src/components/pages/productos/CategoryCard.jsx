import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const CategoryCard = ({ id, link, titulo, imagen }) => {
  return (
    <>
      <Box
        component={Link}
        to={link}
        sx={{ textDecoration: "none", bgcolor: "#FFFFFF", p: 2.5, m: "5px" }}
      >
        <Box>
          <img src={imagen} alt="" />
        </Box>
        <Box>
          <Typography fontWeight={300} color={"#F08D97"} pt={1.5} variant="h3">
            {titulo}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CategoryCard;
