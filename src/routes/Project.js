import React, {useState, useEffect} from "react";
import CoverImg from "../components/cover/CoverImg";
import { Work } from "../components/info/Work";


const Project = () => {
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

      <CoverImg heading="PROYECTOS" text="Alguno de mis trabajos más recientes"/>
      <Work/>

    </div>
    );
};

export default Project;