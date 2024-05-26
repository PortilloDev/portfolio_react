import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="flex flex-row text-center gap-8 text-4xl p-4">
        <a href="https://www.instagram.com/rafa_porti_guitar/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram instagram"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC96l79apfbgtAIg6lkQGmTQ" target="_blank" rel="noreferrer">
          <i className="fab fa-youtube fa-lg youtube"></i>
        </a>
        <a href="https://www.tiktok.com/@blue_rhino_records" target="_blank" rel="noreferrer">
          <i className="fab fa-tiktok fa-lg tiktok"></i>
        </a>
        <a href="https://www.facebook.com/rafael.portillo.988" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook facebook"></i>
        </a>
        <a href="https://twitter.com/rafaportilloper" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter twitter"></i>
        </a>

      </div>
      <div>
        <a href="https://notasweb.me" target="_blank" rel="noreferrer" >
          <p className="text-white text-xs">&copy; Diseñado por Iván Portillo, desarrollador y
           creador de contenido en Notasweb.me </p>
        </a>
      </div>

    </footer>
  )
}

export default Footer