import React from 'react';
import Foto1 from '../../media/foto1.jpg';
import Foto2 from '../../media/foto2.jpg';
import Foto3 from '../../media/foto3.jpg';
import Foto4 from '../../media/foto4.jpg';
import Foto5 from '../../media/foto5.jpg';
import Foto6 from '../../media/foto6.jpg';

import "./Slider.css";

const slidesInfo = [
    {
        src: Foto1,
        alt: "Foto 1",
        desc: "Con Yellow Sand"
    },
    {
        src: Foto2,
        alt: "Foto 2",
        desc: "Ensayo con Full Sex"
    },
    {
        src: Foto3,
        alt: "Foto 3",
        desc: "Concierto festival Fuenlabrada 2018"
    },
    {
        src: Foto4,
        alt: "Foto 4",
        desc: "Acustico en Parla"
    },
    {
        src: Foto5,
        alt: "Foto 5",
        desc: "Concierto festival Fuenlabrada 2019"
    },
    {
        src: Foto6,
        alt: "Foto 6",
        desc: "Estudio de grabación"
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;