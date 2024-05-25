import React from 'react'
import "./About.css";

import Foto from '../../media/foto6.jpg';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>¿Quién soy?</h1>
                <p>
                Soy Rafa, un apasionado guitarrista, compositor y productor musical, y me complace compartir mi mundo musical contigo. 
                A través de estas palabras, deseo sumergirte en un viaje lleno de acordes, melodías cautivadoras y la magia de la creación musical. <br/> Durante mi trayectoria he formado 
                parte de diferentes proyectos musicales tales como <a href="https://www.instagram.com/yellowsandmb/" target="_blank" rel="noreferrer"> Yellow Sand</a> o <a href="https://www.instagram.com/fullsexband/" target="_blank" rel="noreferrer"> Full Sex </a> </p>
                <p>
                    Pero no solo me detengo en la composición. Como productor musical, me encanta llevar mis ideas más allá, dar vida a cada canción y moldearla hasta alcanzar su máximo potencial. Me apasiona trabajar en el estudio, experimentando con diferentes texturas sonoras, capas instrumentales y técnicas de producción vanguardistas.
                    Mi objetivo es crear un sonido que sea auténtico, que transmita emociones y que resuene en el corazón de quienes lo escuchan. a través de mi proyecto personal
                    <a href="https://www.instagram.com/blue_rhino_record/" target="_blank" rel="noreferrer"> Blue Rhino</a>
                </p>
                <p>
                    
                </p>
                <Link to="/contacto">
                    <button className='btn'>Contactar</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className='img-stack top'>
                        <img src={Foto} alt="true" loading="lazy"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
