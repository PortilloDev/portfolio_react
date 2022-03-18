import React from 'react'
import "./Info.css";

const Info = () => {
    return (
        <div className="info-container">
            <div className="info">
                <h1>Composiciones y temas</h1>
            </div>
            <div className="spoty-container">
                <div className="spoty-title">
                    <h5>Creaciones propias</h5>
                </div>
                <iframe className="spoty" src="https://open.spotify.com/embed/album/7pisJbuy9Ft2hVBoq036qj?utm_source=generator" width="100%" height="100px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spoty"></iframe>
            </div>

            <div className="spoty-container">
                <div className="spoty-title">
                    <h5>Lo mejor de mis bandas</h5>
                </div>
                <iframe className="spoty" src="https://open.spotify.com/embed/playlist/5fO7hmSkndaGLMt7cYlmV1?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spoty"></iframe>
            </div>
            <div className="info">
                <h1>Trabajemos juntos y creemos algo único</h1>
            </div>
            
        </div>
    )
}

export default Info
