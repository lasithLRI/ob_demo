import { ThemeProvider, extendTheme } from '@oxygen-ui/react';

const MyThemeProvider = ({ children }) => {
  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#FF5499',
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#FF5456',
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;