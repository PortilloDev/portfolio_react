import React from 'react'
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import SectionContact from "./Contact";
import HeaderNav from "../components/layout/header/header"
import Footer from "../components/layout/footer/Footer"


import { Route, Routes, BrowserRouter } from "react-router-dom";
function Rutas() {
  return (
    <BrowserRouter>
    {/*Header*/}
    <HeaderNav/>
    {/*Content*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Project/>} />
        <Route path="/sobre-mi" element={<About/>} />
        <Route path="/contacto" element={<SectionContact />} />
      </Routes>
    {/*footer*/}
    <Footer/>
  </BrowserRouter>
  )
}

export default Rutas