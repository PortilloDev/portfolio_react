import { NavLink } from "react-router-dom";
import "./Card.css";
import React from 'react'


export const Cards = (props) => {
  return (
    <div class="max-w-sm rounded-md overflow-hidden shadow-lg pb-16 mb-14">
      <img class="w-full" src={props.src} alt={props.title}/>
        <div class="px-6 py-4 bg-white">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-900 text-base">
            {props.text}
          </p>
        </div>
        <div class="px-6 pt-4 pb-4 bg-white rounded-b-md text-end">
          <a class="bg-gray-300 hover:bg-gray-700 text-gray-900 font-bold py-2 px-4 rounded-lg">Ver</a>
        </div>
    </div>



  )
}


export default Cards;