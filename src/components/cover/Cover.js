import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";


const CoverImage = () => {
    return (

        <div className="flex items-center justify-center h-screen w-full">

            <div className="w-full h-full">
                <video className='object-cover h-full w-full' loading="lazy" src={coverVideo} autoPlay loop muted type="video/mp4">
                </video>
            </div>
        </div>



    )
}

export default CoverImage