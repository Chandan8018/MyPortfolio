import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { pdfjs } from "react-pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./pages/Projects";
import HeroSection from "./pages/HeroSection";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const theme = createTheme({
    breakpoints: {
      xs: "320px",
      sm: "476px",
      md: "640px",
      bs: "768px",
      lg: "900px",
      xl: "1024",
      "2xl": "1280",
    },
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<HeroSection />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
