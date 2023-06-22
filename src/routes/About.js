import React, {useState, useEffect} from "react";
import About from "../components/about/About";
import CoverImg from "../components/cover/CoverImg";

const Abouts = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollHeight(position);
    }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);
  return  (
    <div> 
      <CoverImg heading="SOBRE MI" text="Soy guitarrista y compositor"/>
      <About />
    </div>
    );
};

export default Abouts;