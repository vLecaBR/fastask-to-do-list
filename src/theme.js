import { createTheme } from '@mui/material/styles';

// Tema Claro
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007bff', // Cor primária (botões, links)
    },
    background: {
      default: '#ffffff',  // Cor de fundo geral para o modo claro
      paper: '#f8f9fa',    // Cor de fundo de componentes (cards, etc.)
    },
    text: {
      primary: '#000000',  // Cor do texto principal no modo claro
      secondary: '#555555', // Cor do texto secundário
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // Fundo claro para campos de input
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#007bff', // Cor do botão no modo claro
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#0056b3', // Cor de hover para o botão
          },
        },
      },
    },
  },
});

// Tema Escuro
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007bff', // Cor primária para o modo escuro
    },
    background: {
      default: '#121212',  // Cor de fundo geral para o modo escuro
      paper: '#1c1c1c',    // Cor de fundo de componentes (cards, etc.)
    },
    text: {
      primary: '#ffffff',  // Cor do texto principal no modo escuro
      secondary: '#bbbbbb', // Cor do texto secundário
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333', // Fundo escuro para campos de input
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#007bff', // Cor do botão no modo escuro
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#0056b3', // Cor de hover para o botão
          },
        },
      },
    },
  },
});
