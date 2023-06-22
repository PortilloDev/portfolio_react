import "./Work.css";
import Card from "../card/Card"
import CardData from "./WorkCardData";
import React from 'react'

export const Work = () => {
  return (
    <div>
      <div className="mt-4 mb-4 text-3xl text-white text-center">
        <h3>Accede a mis producciones propias y colaboraciones</h3>
      </div>
      <div className="card-section">

        <br></br>
        <div className="card-container">
          {CardData.map((val, ind) => {
            return (
              <Card
                key={ind}
                src={val.src}
                title={val.title}
                text={val.text}
                source={val.source}
              />
            )
          })}
        </div>
        <br></br>
        <br></br>
      </div>
    </div>


  )
}

export default Work;