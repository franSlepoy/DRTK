import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Vigor2915 = () => {
  return (
    <>
      <Box bgcolor={"#FAFAFA"}>
        <Box width={"73%"} m={"auto"}>
          <Box display={"flex"} pt={12}>
            <Box>
              <Typography fontWeight={"500"} color={"#F08D97"} variant="h3">
                Routers
              </Typography>
              <Typography
                mt={1}
                fontWeight={500}
                color={"#383A3C"}
                variant="h1"
              >
                Vigor 2915 Series
              </Typography>
              <Typography
                fontWeight={300}
                color={"#7D7D7D"}
                variant="subtitle1"
              >
                Router confiable para oficinas pequeñas y hogares
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
                La serie Vigor 2915 es una solución de gestión de red integrada
                diseñada para pequeñas empresas. La interfaz WAN principal es
                Gigabit Ethernet y los usuarios pueden agregar una conexión WAN
                secundaria utilizando el puerto LAN 4, el puerto USB o la
                interfaz Wi-Fi. La Dual WAN provee balanceo de carga o
                redundancia de enlaces para garantizar un acceso confiable a
                Internet. La serie Vigor 2915 también es un servidor VPN robusto
                para hasta 16 túneles simultáneos. Las funciones de firewall y
                filtrado de contenido pueden controlar el tráfico de red
                entrante y saliente, y también ofrece funciones de
                administración de ancho de banda que optimizan la asignación de
                ancho de banda y permite el mejor uso del ancho de banda
                disponible.
              </Typography>

              <Typography
                pt={2}
                fontWeight={"300"}
                color={"#D42D26"}
                variant="subtitle1"
                component={Link}
                to="https://www.draytek.com/products/vigor2915"
              >
                + info
              </Typography>
            </Box>
            <Box ml={2}>
              <img
                height={"400px"}
                src="/2915ac_left_H1125.png"
                alt="imagen de producto"
              />
            </Box>
          </Box>
        </Box>
        <Box width={"80%"} m={"auto"} mt={8} display={"flex"}>
          <Box
            width={"25%"}
            pl={0}
            pr={2}
            pb={2}
            pt={2}
            borderRight={"solid #7A7A7A 0.1px"}
          >
            <Typography width={"160px"} m={"auto"} textAlign={"center"} color={"#383A3C"} variant="h2">
            Hasta 2 WAN
            </Typography>
            <Typography
              textAlign={"center"}
              lineHeight={"21px"}
              color={"#383A3C"}
              variant="subtitle1"
              width={"200px"}
              m={"auto"}
            >
              Balanceo de carga
            </Typography>
          </Box>
          <Box width={"25%"} p={2} borderRight={"solid #7A7A7A 1px"}>
            <Typography textAlign={"center"} color={"#383A3C"} variant="h2">
              16 VPN
            </Typography>
            <Typography
              textAlign={"center"}
              lineHeight={"21px"}
              color={"#383A3C"}
              variant="subtitle1"
              width={"160px"}
              m={"auto"}
            >
              Rendimiento IPsec de hasta 250 Mbps
            </Typography>
          </Box>
          <Box width={"25%"} p={2} borderRight={"solid #7A7A7A 0.1px"}>
            <Typography textAlign={"center"} color={"#383A3C"} variant="h2">
              8 VPN SSL
            </Typography>
            <Typography
              textAlign={"center"}
              lineHeight={"21px"}
              color={"#383A3C"}
              variant="subtitle1"
              width={"160px"}
              m={"auto"}
            >
              Rendimiento de hasta 150 Mbps
            </Typography>
          </Box>
          <Box width={"25%"} p={2}>
            <Typography textAlign={"center"} color={"#383A3C"} variant="h2">
              30k Sesiones
            </Typography>
            <Typography
              textAlign={"center"}
              lineHeight={"21px"}
              color={"#383A3C"}
              variant="subtitle1"
              width={"180px"}
              m={"auto"}
            >
              Recomendado para una red de 15 hosts
            </Typography>
          </Box>
        </Box>
        <Box mt={10} textAlign={"center"}>
          <img src="/2915ac_interface.png" alt="imagen de producto" />
        </Box>

        <Box>
          <Box
            width={"73%"}
            justifyContent={"space-between"}
            m={"auto"}
            display={"flex"}
            pt={5}
            pb={12}
          >
            <Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">1</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    Entrada de alimentación
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">2</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    Interruptor de encendido / apagado
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">3</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    1 x USB 2.0
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">4</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    Puerto WAN 1 x GbE RJ-45
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">5</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    Puerto LAN 3 x GbE RJ-45
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">6</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    Puerto WAN / LAN 1x GbE RJ-45
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">7</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    Botón WLAN / WPS (modelo ac)
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">8</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    Botón de reset
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box
                  textAlign={"center"}
                  bgcolor={"#FF4C4C"}
                  color={"white"}
                  width={"18px"}
                  height={"18px"}
                  borderRadius={"50%"}
                >
                  {" "}
                  <Typography variant="body2">9</Typography>
                </Box>
                <Box ml={1}>
                  <Typography
                    lineHeight={"21px"}
                    color={"#383A3C"}
                    variant="subtitle1"
                  >
                    Antena inalámbrica (modelo ac)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Vigor2915;
