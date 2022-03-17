//importar libreria externa para el carrusel
//instalar primero yarn (brew install yarn)
//posteriormente ejecutar -> yarn add @brainhubeu/react-carousel

import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";


const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis proyectos</h2>
            </div>

            <Carousel 
                plugins={['arrows', 'infinite', 'autoPlay']}
                slides={Slides}
                breakpoints={{
                    760: {
                        plugins:['infinite','autoPlay'],
                        },  
                    500: {
                        plugins:['infinite','autoPlay'],
                    },
                }}
                
            />
            
        </div>
    )
}

export default Slider
