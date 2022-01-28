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
                plugins={['arrows', 'infinite', 'centered']}
                slidesPerPage={3}
                animationSpeed={200}
                offset={50}
                itemWidth={400}
                slides={Slides}
                breakpoints={{
                    760: {
                        slidesPerPage:1,
                        plugins:['infinite'],
                        itemWidth: 250,
                    },   
                }}
                
            />
            
        </div>
    )
}

export default Slider
