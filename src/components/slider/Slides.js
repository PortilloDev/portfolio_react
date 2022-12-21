import React from 'react';
import Foto1 from '../../media/foto1.jpg';
import Foto2 from '../../media/foto2.jpg';
import Foto3 from '../../media/foto3.jpg';
import Foto4 from '../../media/foto4.jpg';
import Foto5 from '../../media/foto5.jpg';
import Foto6 from '../../media/foto6.jpg';
import Foto7 from '../../media/foto7.jpg';
import Foto8 from '../../media/foto8.jpg';
import Foto9 from '../../media/foto9.jpg';
import Foto10 from '../../media/foto10.jpg';
import Foto11 from '../../media/foto11.png';
import "./Slider.css";

const slidesInfo = [
    {
        src: Foto1,
        alt: "Foto 1",
        desc: ""
    },
    {
        src: Foto2,
        alt: "Foto 2",
        desc: ""
    },
    {
        src: Foto3,
        alt: "Foto 3",
        desc: ""
    },
    {
        src: Foto4,
        alt: "Foto 4",
        desc: ""
    },
    {
        src: Foto5,
        alt: "Foto 5",
        desc: ""
    },
    {
        src: Foto6,
        alt: "Foto 6",
        desc: ""
    },
    {
        src: Foto7,
        alt: "Foto 7",
        desc: ""
    },
    {
        src: Foto8,
        alt: "Foto 8",
        desc: ""
    },
    {
        src: Foto9,
        alt: "Foto 9",
        desc: ""
    },
    {
        src: Foto10,
        alt: "Foto 10",
        desc: ""
    },
    {
        src: Foto11,
        alt: "Foto 11",
        desc: ""
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img className="responsive" src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
           
        </div>
    </div>
))

export default slides;