import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/customsoftware" element={<div>Custom Software</div>} />
          <Route path="/mobileapps" element={<div>Mobile Apps</div>} />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/revolution" element={<div>The Revolution</div>} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="/estimate" element={<div>Free Estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
