import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007acc',
      light: '#3399dd',
      dark: '#005c99',
    },
    secondary: {
      main: '#2c3e50',
      light: '#3e5771',
      dark: '#1a252f',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 24px',
        },
      },
    },
  },
});

export default theme;