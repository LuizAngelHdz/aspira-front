import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
      contrast: '#fff',
      contrastBg: '#000'
    },
    secondary: {
      main: '#0a1929',
      contrast: '#308fe8'
    },
    background: {
      main: '#fff',
      secondary: '#EFEFEF',
    }
  },
});

export { lightTheme }