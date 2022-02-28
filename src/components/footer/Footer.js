import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Rafael Portillo Pérez</h1>
                <p>Parla (Madrid)</p>
            </div>
            <div className="footer-contact">
                <h3>Es el momento de crear</h3>
                <p>Trabajemos juntos y construyamos algo grande</p>
            </div>
            <div className="footer-sns">
                {/* div links */}
                <div className="sns-links">
                    <a href="https://www.instagram.com/rafa_porti_guitar/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                    <a href="https://twitter.com/rafaportilloper" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    <a href="https://twitter.com/rafaportilloper" target="_blank" rel="noreferrer">
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
