import React from 'react'
import "./Footer.css";
import Form from "./FooterForm";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <div className="contact-description">
                <h1>Contacto</h1>
                    <br/>
                    <p>Hola, Si deseas que colaboremos juntos, puede ponerse en contacto conmigo desde el formulario o mis redes sociales.</p>
                </div>
                <div className="contact-form">
                    <Form/>
                </div>
            </div>
            <div className="footer-sns">
                {/* div links */}
                <div className="sns-links">
                    <a href="https://www.instagram.com/?hl=es" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                    <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    <a href="https://es-es.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="mailto:rafaportiperez@gmail.com" target="_blank" rel="noreferrer">
                        <i className="fas fa-envelope envelope"></i>
                    </a>
                </div>
                {/* div design */}
                <div className="design-by">
                    <a href="https://notasweb.me" target="_blank" rel="noreferrer" className="design_autor">
                    © Diseñado por Iván Portillo, desarrollador y creador de contenido en Notasweb 
                    </a>    
                </div>
            </div>
        </footer>
    )
}

export default Footer
