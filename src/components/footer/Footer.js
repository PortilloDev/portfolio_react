import React from 'react'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="w-full h-auto bg-black">
            <div className="footer-container">
                {/* div links */}
                <div className="sns-links">
                    <a href="https://www.instagram.com/rafa_porti_guitar/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/rafael.portillo.988" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    <a href="https://twitter.com/rafaportilloper" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC96l79apfbgtAIg6lkQGmTQ" target="_blank" rel="noreferrer">
                        <i className="fab fa-youtube fa-lg youtube"></i>
                    </a>
                </div>
                {/* div design */}
                <div className="design-by">
                    <a href="https://notasweb.me" target="_blank" rel="noreferrer" className="design_autor">
                    © Diseñado por Iván Portillo, desarrollador y creador de contenido en Notasweb.me 
                    </a>    
                </div>
            </div>
        </footer>
    )
}

export default Footer
