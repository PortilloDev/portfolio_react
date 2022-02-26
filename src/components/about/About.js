import React from 'react'
import "./About.css";

import Foto from '../../media/fotoPerfil.jpg';
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Sobre mí</h3>
                <p>
                Mi nombre es Rafael Portillo soy Guitarrista. <br/> Durante mi trayectoria he formado parte de diferentes proyectos musicales tales como Yellow Sand, Full Sex y además lo he compaginado con mi proyecto personal, Blue Rhino Records, del que también soy productor.
                </p>
            </div>
            <div className="about-img">
                <img src={Foto} alt="about" />
            </div>
        </div>
    )
}

export default About
