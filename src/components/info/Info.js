import React from 'react'
import "./Info.css";

const Info = () => {
    return (
        <div className="info-container">
            <div className="info">
                <div className='title-container'>
                    <h1>Últimas novedades</h1>

                    <div className="info">
                        <p className="news-subTitle"> Nuevo lanzamiento en el canal de YouTube!! </p>
                    </div>
                </div>
            </div>
            <p  align="center">
                <strong>ME PIRO!!</strong>
                </p>
            <div className="youtube-container">
                
                <p align="center">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/qxicmTQEoNg" title="Me piro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </p>
            </div>
            <div className="youtube-container">
                
                <p align="center">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/Ao_yw4H8Hz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
            </div>

            <div className="spoty-container">
                <div className="info">
                    <h1>Composiciones y temas</h1>
                </div>
                <div className="spoty-title">
                    <h5>Creaciones propias</h5>
                </div>
                <iframe className="spoty" src="https://open.spotify.com/embed/album/7pisJbuy9Ft2hVBoq036qj?utm_source=generator" width="100%" height="100px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spoty"></iframe>
            </div>

            <div className="spoty-container">
                <div className="spoty-title">
                    <h5>Últimas colaboraciones </h5>
                </div>
                <iframe className="spoty"
                        src="https://open.spotify.com/embed/track/0pSutDfygeHurVwSgovTJ3?utm_source=generator&theme=0"
                        width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spoty"></iframe>
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
