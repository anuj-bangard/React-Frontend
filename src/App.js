import Home from './pages/Home';
import Header from '../src/components/header/Header';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import Footer from './components/footer/Footer';

const theme = createTheme({
  typography: {
    fontFamily: `"GalanoGrotesque", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Header />
        <Home />
        <Footer />
        <CssBaseline />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
