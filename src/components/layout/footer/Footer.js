import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="social-icons">
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
      <div>
        <a href="https://notasweb.me" target="_blank" rel="noreferrer" className="design_autor">
          <p>© Diseñado por Iván Portillo, desarrollador y creador de contenido en Notasweb.me &copy;</p>
        </a>
      </div>

    </footer>
  )
}

export default Footer