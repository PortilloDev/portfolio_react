import React from 'react';
import Foto1 from '../../media/foto1.jpg';
import Foto2 from '../../media/foto2.jpg';
import Foto3 from '../../media/foto3.jpg';
import Foto4 from '../../media/foto4.jpg';
import Foto5 from '../../media/foto5.jpg';
import Foto6 from '../../media/foto6.jpg';
import Foto7 from '../../media/foto7.jpg';
import Foto8 from '../../media/foto8.jpg';

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
        desc: "Concierto festival Fuenlabrada"
    },
    {
        src: Foto4,
        alt: "Foto 4",
        desc: "Acustico en Parla con Toni"
    },
    {
        src: Foto5,
        alt: "Foto 5",
        desc: "Concierto festival Fuenlabrada"
    },
    {
        src: Foto6,
        alt: "Foto 6",
        desc: "Estudio de grabación"
    },
    {
        src: Foto7,
        alt: "Foto 7",
        desc: "Full Sex"
    },
    {
        src: Foto8,
        alt: "Foto 8",
        desc: "Antes de un concierto"
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img className="responsive" src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;