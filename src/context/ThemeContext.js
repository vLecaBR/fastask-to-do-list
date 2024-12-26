import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  // Define os temas personalizados
  const lightTheme = {
    background: '#ffffff',
    text: '#000000',
    sidebarBackground: '#f7f7f7',
    sidebarText: '#000000',
    headerBackground: '#e0e0e0',
    headerText: '#000000',
  };

  const darkTheme = {
    background: '#121212',
    text: '#ffffff',
    sidebarBackground: '#333333',
    sidebarText: '#ffffff',
    headerBackground: '#222222',
    headerText: '#ffffff',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  // Crie o tema do MUI baseado no estado atual
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          background: {
            default: theme.background,
          },
          text: {
            primary: theme.text,
          },
          primary: {
            main: '#007bff',
          },
        },
      }),
    [isDarkMode, theme]
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
