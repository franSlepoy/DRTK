import { Box, Divider, Typography } from "@mui/material";

import Carousel from "react-material-ui-carousel";
import { fotosCarousel } from "./FotosCarousel";
import Productos from "../productos/Products";

const Home = () => {
  return (
    <>
      <Box bgcolor={"#FAFAFA"}>
        <Box>
          <Carousel sx={{ height: "550px" }}>
            {fotosCarousel.map((foto) => (
              <Box key={"foto.id"} width={"100%"}>
                <img
                  width={"100%"}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={foto.imagen}
                  alt="carousel de fotos de la empresa"
                />
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box>
          <Productos />
        </Box>

        <Box>
          <Box textAlign={"center"} mt={5}>
            <Typography fontWeight={"300"} variant="h1" color={"secondary"}>
              Institucional
            </Typography>
          </Box>
          <Box pt={6} display={"flex"} width={"73%"} m={"auto"}>
            <Box sx={{ bgcolor: "#FFFFFF", p: 2.5,  }}>
              <iframe
                width="480"
                height="260"
                src="https://www.youtube.com/embed/mBv7FwXKEtI?si=JG3ryVcOYvhbKIFw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
 gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <Typography
                fontWeight={300}
                color={"#F08D97"}
                pt={1.5}
                variant="h3"
              >
                Perfil de la Empresa
              </Typography>
            </Box>
            <Box sx={{ bgcolor: "#FFFFFF", p: 2.5, ml: 2 }}>
              <iframe
                width="480"
                height="260"
                src="https://www.youtube.com/embed/XYocOpfEzX4?si=421xrfv5sIgd7Zap"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
 gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <Typography
                fontWeight={300}
                color={"#F08D97"}
                pt={1.5}
                variant="h3"
              >
                ¿Qué caracteriza a un Router DrayTek?
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box textAlign={"center"} mt={12}>
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
                  Fundada en 1997, DrayTek Corporation es un fabricante de
                  equipos de red y sistemas de gestión con sede en Taiwán. Desde
                  ISDN, VDSL hasta LTE, DrayTek siempre se ha esforzado por
                  proporcionar a las PyMEs y a los profesionales conexiones
                  confiables, rápidas y seguras. Nuestra misión es brindar
                  servicios de conectividad altamente integrados y de alta
                  calidad a un precio asequible y ser su socio confiable para
                  soluciones de red.
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
                  ¡Estamos orgullosos de representar oficialmente la marca
                  DrayTek en el mercado argentino!
                </Typography>
                <Typography
                  color={"#7A7A7A"}
                  variant="subtitle1"
                  fontWeight={"300"}
                  sx={{ lineHeight: "21px" }}
                >
                  Nuestro objetivo es ofrecer un servicio integral preventa y
                  postventa, asistencia y soporte técnico, así como un plan de
                  formación integral para revendedores que deseen profundizar
                  sus habilidades en este sector en constante evolución.
                </Typography>
              </Box>
            </Box>
            <Box mt={6} ml={10}>
              <img src="/about_banner 1.png" alt="" />
            </Box>
          </Box>
        </Box>

        <Box  mt={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6566.751259535077!2d-
58.37466062396735!3d-
34.61994672182108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x95a33268fa0ed447%3A0xf202
2ea3dcc4500!2sdraytek%20argentina%20google%20maps!3m2!1d-34.624086999999996!2d-
58.370923!5e0!3m2!1ses!2sar!4v1626740021379!5m2!1ses!2sar"
            width="100%"
            height="320"
            style={{border:"none"}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </>
  );
};

export default Home;
