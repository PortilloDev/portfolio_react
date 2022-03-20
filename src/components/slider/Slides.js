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
        desc: "En el estudio con Full Sex"
    },
    {
        src: Foto3,
        alt: "Foto 3",
        desc: "Concierto festival Fuenlabrada"
    },
    {
        src: Foto4,
        alt: "Foto 4",
        desc: "Foto con el maestro Toni Del Campo"
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
    },
    {
        src: Foto9,
        alt: "Foto 9",
        desc: "Ensayo con Full Sex"
    },
    {
        src: Foto10,
        alt: "Foto 10",
        desc: "Yellow Sand"
    },
    {
        src: Foto11,
        alt: "Foto 11",
        desc: "Yellow Sand"
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