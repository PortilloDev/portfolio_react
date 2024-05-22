import React, { useState, useEffect } from "react";
import CoverImg from "../components/cover/CoverImg";
import Class from "../components/service/Class";


const Service = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  return (
    <div>
      <div>
        <CoverImg heading="CLASES PARTICULARES" text="Profesor de clases particulares" />
      </div>
      <div>
        <Class />
      </div>
    </div>

  );
};

export default Service;