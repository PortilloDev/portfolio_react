import React from 'react'
import "./InfoModal.css";
import coverVideo from "../../media/CoverMePiro.mp4";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
const InfoModal = () => {
  return (
    <div className="cover-container">
            <ReactPlayer
                url={coverVideo}
                muted
                playing={true}
                controls={true}
                loop
                className="video-modal"
                width="100%"
                height="100%"
            />
           
            <div  className="content" >
                <div className="content-description">
                    <h1 className='content-header'>Me Piro</h1>     
                    <p className='content-text'>Por <span>Blue Rhino</span></p>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/rafael.portillo.988" target="_blank" rel="noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com/rafaportilloper" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com/rafa_porti_guitar/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://twitter.com/rafaportilloper" target="_blank" rel="noreferrer"><FaYoutube /></a>
                </div>
            </div>         
        </div>
        
  )
}

export default InfoModal