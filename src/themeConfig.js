import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#D42D26',
      light: '#F08D97',
    },
    secondary: {
      main: '#383A3C',
      light: '#7D7D7D',
    },
    background: {
      default: 'rgba(56, 58, 60, 0.08)',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#383A3C',
      secondary: '#7A7A7A',
      disabled: '#F08D97',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightMedium: 600,
    h1: {
      fontSize: 30,
      fontWeight: 600,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
    },
    h3: {
      fontSize: 20,
    },
    subtitle1: {
      fontSize: 16,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 11,
    },
  },
});