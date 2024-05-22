import React from 'react'
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Service from "./Service";
import SectionContact from "./Contact";
import HeaderNav from "../components/layout/header/header"
import Footer from "../components/layout/footer/Footer"


import { Route, Routes, BrowserRouter } from "react-router-dom";
function Rutas() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white">
        <HeaderNav />
      </div>
      <main className='content'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyectos" element={<Project />} />
              <Route path="/sobre-mi" element={<About />} />
              <Route path="/contacto" element={<SectionContact />} />
              <Route path="/clases" element={<Service />} />
          </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default Rutas