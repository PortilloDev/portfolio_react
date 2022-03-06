import React from 'react'
import "./Info.css";

const Info = () => {
    return (
        <div className="info-container">
            <div className="info">
                <h1>Mis canciones</h1>
            </div>
            <div className="spoty-container">
                <iframe className="spoty" src="https://open.spotify.com/embed/playlist/37i9dQZF1EQpgT26jgbgRI?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spoty"></iframe>
            </div>
            <div className="info">
                <h1>Trabajemos juntos y creemos algo único</h1>
            </div>
            
        </div>
    )
}

export default Info
