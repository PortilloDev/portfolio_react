import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideoPromo.mp4";



const Cover = () => {
    return (
        <div className="cover-container">
            <video  className="video" src={coverVideo} autoPlay loop muted type="video/mp4">
            </video>  
           
        </div>
    )
}

export default Cover
