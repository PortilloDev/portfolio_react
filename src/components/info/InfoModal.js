import React from 'react'
import "./InfoModal.css";
import coverVideo from "../../media/CoverMePiro.mp4";
import ReactPlayer from 'react-player';
import { FaYoutube, FaSpotify } from 'react-icons/fa';
const InfoModal = () => {
  return (
    <div className="cover-container">
        
            <ReactPlayer
                url={coverVideo}
                playing={true}
                controls={true}
                loop
                className="video-modal"
                width="100%"
                height="100%"
            />
           
            <div  className="grid" >
                <div className='flex flex-row justify-between gap-6'>
                    <p className='text-base lg:text-xl font-bold mt-6'>! Ya puedes ver el video completo en ! </p>
                    <a className='mt-2' href="https://www.youtube.com/watch?v=qxicmTQEoNg&themeRefresh=1" target="_blank" rel="noreferrer"><FaYoutube />Youtube</a>
                </div>
                <div className='flex flex-row justify-between  gap-6'>
                    <p className='text-base lg:text-xl  mt-6'>O escuchar la canción en  </p>
                    <a className='mt-2' href="https://open.spotify.com/album/0hb7QJ3IcbP89JCfl9UX4G" target="_blank" rel="noreferrer"><FaSpotify />Spotify</a>
                </div>
                

            </div>         
        </div>
        
  )
}

export default InfoModal