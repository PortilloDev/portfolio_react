import { Link } from "react-router-dom";
import "./Card.css";
import React from 'react'


export const Cards = (props) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg pb-16 mb-14">

      <img className="w-full" src={props.src} alt={props.title} loading="lazy" />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2 text-center">
          {props.title}
         </div>
        <p className="text-gray-900 text-base text-center">
          {props.text}
        </p>
      </div>
      <div className="px-6 pt-4 pb-4 bg-white rounded-b-md flex justify-between">
        
        <Link
          to={props.source.youtube}
          target="_blank"
          className="bg-red-500 hover:bg-gray-700 text-gray-900 font-bold py-2 px-4 rounded-lg text-end"
        >
          Youtube
        </Link>
        <Link
          to={props.source.spotify}
          target="_blank"
          className="bg-green-500 hover:bg-gray-700 text-gray-900 font-bold py-2 px-4 rounded-lg text-end"
        >
          Spotify
        </Link>
      </div>
    </div>



  )
}


export default Cards;