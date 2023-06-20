import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import SectionContact from "./components/form/SectionContact";
import Modal from "./components/Modal/Modal";
import {registerVisited} from './components/services/index';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [active, setActive] = useState(true);
  const toogle = () => {
    setActive(!active)
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
    useEffect(() => {
        let status = registerVisited();
        console.log(status);
    }, []);
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <SectionContact/>
      <Footer />
    </div>
  );
}

export default App;
