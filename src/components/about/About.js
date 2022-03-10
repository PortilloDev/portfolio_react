import React from 'react'
import "./About.css";

import Foto from '../../media/fotoPerfil.jpg';
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Sobre mí</h3>
                <p>
                Mi nombre es Rafael Portillo soy Guitarrista. <br/> Durante mi trayectoria he formado 
                parte de diferentes proyectos musicales tales como 
                <a href="https://www.instagram.com/yellowsandmb/" target="_blank" rel="noreferrer"> Yellow Sand</a>, 
                <a href="https://www.instagram.com/fullsexband/" target="_blank" rel="noreferrer"> Full Sex </a>
                y además lo he compaginado con mi proyecto personal,
                <a href="https://www.instagram.com/blue_rhino_record/" target="_blank" rel="noreferrer"> Blue Rhino</a>, del que también soy productor.
                </p>
            </div>
            <div className="about-img">
                <img className="responsive-about" src={Foto} alt="about" />
            </div>
        </div>
    )
}

export default About
