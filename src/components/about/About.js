import React from 'react'
import "./About.css";

import Foto from '../../media/fotoPerfil.jpg';
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Sobre mí</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisci tempor incidunt ut labore et dolore magna aliqua veniam, quis nostrud exercitation ullamcorpor s commodo consequat. Duis autem vel eum irrure esse molestiae consequat, vel illum dolore eu fugi et iusto odio dignissim qui blandit praesent luptat exceptur sint occaecat cupiditat non provident, deserunt mollit anim id est laborum et dolor fuga distinct. Nam liber tempor cum soluta nobis elige quod maxim placeat facer possim omnis volupt
                </p>
            </div>
            <div className="about-img">
                <img src={Foto} alt="about" />
            </div>
        </div>
    )
}

export default About
