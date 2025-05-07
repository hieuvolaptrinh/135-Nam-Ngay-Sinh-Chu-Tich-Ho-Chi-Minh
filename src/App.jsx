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
import BacHoQuote from "./components/BacHoQuote";
import UserReflection from "./components/UserReflection";
import Box from "@mui/material/Box";
import { Col, Row } from "react-bootstrap";
import MainLayout from "./pages/MainLayout";
import Banner from "./components/Home/Banner";

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
          <Route
            path="/"
            element={
              <>
                <Banner />
                <MainLayout>
                  <Home />
                </MainLayout>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path="/history"
            element={
              <MainLayout>
                <History />
              </MainLayout>
            }
          />
          <Route
            path="/events"
            element={
              <MainLayout>
                <EventPage />
              </MainLayout>
            }
          />
        </Routes>
        <Footer />
      </Router>
      <BackToTopButton />
    </ThemeProvider>
  );
}

export default App;
