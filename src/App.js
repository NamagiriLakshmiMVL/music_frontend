import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DisplayArea } from './pages/DisplayArea';
import { Songs } from './pages/Songs';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Songs/>}/>
      </Routes>
      

     
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
