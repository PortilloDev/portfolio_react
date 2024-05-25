import React from 'react';
import { Link } from 'react-router-dom';
import "./Class.css";
import ContactImage from '../../media/contact.jpg';

const Class = () => {
    return (
        <div className="class-container">
            <h1 className="class-title">Clases de Guitarra Online</h1>
            <div className="class-text">
                <div className="intro">
                    <img src={ContactImage} alt="Contacto" loading="lazy" className="contact-img" />
                    <p>Si te gusta mi trabajo y quieres que te de clases de guitarra, no dudes en ponerte en contacto conmigo, no importa si tienes conocimientos previos o empiezas de cero. Me apasiona enseñar y ayudar a mis alumnos a conseguir sus objetivos.</p>
                </div>
                <p>Doy clases de guitarra eléctrica y acústica, para todas las edades. Aprenderemos técnica, acordes, escalas, armonía y diferentes estilos. Adapto las clases a las necesidades e inquietudes del alumno.</p>
                <p>Además tengo conocimientos en grabación, mezcla y producción musical, que si el alumno quiere podemos incorporar a las clases.</p>
                <p>Presenciales en Madrid/Sur (en casa del profesor), a domicilio (suplemento a domicilio) o modalidad online.</p>
                <p className="cta">¡Infórmate sin compromiso!</p>
                <p className='mail-line'><i className="fa fa-envelope" aria-hidden="true"></i> Mail: <a href='mailto:lucax22@hotmail.com'> lucax22@hotmail.com </a> </p>
                <Link to="/contacto">
                    <p className='btn'>Contactar</p>
                </Link>
            </div>
            <div className="contact-info">
     
            </div>
        </div>
    );
}

export default Class;
