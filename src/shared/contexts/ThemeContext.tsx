import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { ThemeProvider } from "@emotion/react";
import { DarkTheme, LightTheme } from '../themes';
import { Box } from '@mui/system';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}
const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'dark' ? 'light' : 'dark')
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName])
  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width='100vw'  height='100vh' bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}