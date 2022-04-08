import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./ui/Header";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApp from "./MobileApp";
import Website from "./Website";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/customsoftware' element={<CustomSoftware />} />
          <Route path='/mobileapps' element={<MobileApp/>} />
          <Route path='/websites' element={<Website/>} />
          <Route path='/revolution' element={<div>The Revolution</div>} />
          <Route path='/about' element={<div>About Us</div>} />
          <Route path='/contact' element={<div>Contact Us</div>} />
          <Route path='/estimate' element={<div>Free Estimate</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
