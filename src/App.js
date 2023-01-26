import './App.css';
import { Home } from './views/Home/Home';
import { lightTheme } from './theme'
import { ThemeProvider } from '@mui/material/styles';
import ModalState from './Context/Modal/ModalState';
import LoaderState from './Context/Loader/LoaderState';
import { Loader } from './components/Loader'
import { ModalContext } from './components/ModalContext'


function App() {
  return (
    <ModalState>
      <LoaderState>
        <div className="App">
          <Loader />
          <ModalContext />
          <ThemeProvider theme={lightTheme} >

            <Home />
          </ThemeProvider>
        </div>
      </LoaderState>
    </ModalState>
  );
}

export default App;
