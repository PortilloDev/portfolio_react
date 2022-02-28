import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";


const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop mediaGroup="audio/mp4"/>       
            <h1>Rafael Portillo Pérez</h1>     
            <p>Músico | Guitarrista | Compositor | Productor</p>
        </div>
    )
}

export default Cover
