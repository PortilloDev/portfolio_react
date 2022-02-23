import React from 'react'
import "./Footer.css";
import Form from "./FooterForm";

const Footer = () => {
    return (
        <footer className="footer">
            <Form/>
            <div className="footer-contact">
            </div>
            <div className="footer-sns">
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
                    <a href="https://es-es.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="fas fa-envelope envelope"></i>
                    </a>
                </div>

                <div className="design-by">
                    <a href="https://ivan-portillo-perez.com" target="_blank" rel="noreferrer">
                            Diseñado por Iván Portillo
                    </a>    
                </div>
            </div>
        </footer>
    )
}

export default Footer
