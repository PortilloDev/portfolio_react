import React, {useState, useEffect} from "react";
import Cover from "../components/cover/Cover";

import Footer from "../components/footer/Footer";


const Home = () => {
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

      <Cover/>

    </div>
    );
};

export default Home;