import { createTheme } from '@mui/material';
import { COLORS } from './colors';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    secondary: {
      main: '#ffffff'
    },
    primary: {
      main: COLORS.primary
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
        },
        contained: {
          boxShadow: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: COLORS.black
        },
      },
    },
  },
});
