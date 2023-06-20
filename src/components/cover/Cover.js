import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

import { Link } from 'react-router-dom';

const CoverImage = () => {
    return (
        <div className="cover">
            <div className="mask">
                <video  className="into-video" src={coverVideo} autoPlay loop muted controls type="video/mp4">
                </video> 
            </div>

            <div className="content">
                <div className="content-description">
                    <h1>Rafael Portillo Pérez</h1>     
                    <p>Músico | Guitarrista | Compositor | Productor</p>
                </div>
            </div>
        </div>
    )
}

export default CoverImage