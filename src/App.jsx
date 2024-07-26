import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
