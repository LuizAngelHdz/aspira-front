import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
      contrast: '#000',
      contrastBg: '#000'
    },
    secondary: {
      main: '#ffff',
      contrast: '#308fe8'
    },
    background: {
      main: '#000',
      secondary: '#090909'
    }
  },
});

export { darkTheme }