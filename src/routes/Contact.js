import React, {useState, useEffect} from "react";

import CoverImg from "../components/cover/CoverImg";
import SectionContact from "../components/form/SectionContact";

const Contact = () => {
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

      <CoverImg heading="Contacto" text="Trabajemos juntos y creemos algo único"/>
      <SectionContact />

    </div>
    );
};

export default Contact;