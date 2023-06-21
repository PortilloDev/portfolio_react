import React from 'react'
import coverVideo from "../../media/coverVideo.mp4";


const CoverImage = () => {
    return (

        <div className="w-full h-auto">
            <div className="w-full h-full flex-col absolute space-y-96 py-4 items-center ">
                <div className="mt-8">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>Rafael Portillo Pérez</h1>
                    <p className='text-base md:text-white bold'>Músico | Guitarrista | Compositor | Productor</p>
                </div>
            </div>
            <div className="w-full h-full">
                <video className='object-cover h-full w-full' src={coverVideo} autoPlay loop muted type="video/mp4">
                </video>
            </div>
        </div>



    )
}

export default CoverImage