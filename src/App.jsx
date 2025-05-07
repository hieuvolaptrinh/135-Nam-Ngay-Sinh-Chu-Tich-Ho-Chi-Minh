import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import History from "./pages/History";
import Home from "./pages/Home";
import About from "./pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EventPage from "./pages/EventPage";
import BackToTopButton from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(67, 150, 233)",
    },
    secondary: {
      main: "rgb(237, 62, 50)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>

        <Footer />
      </Router>
      <BackToTopButton />
    </ThemeProvider>
  );
}

export default App;
