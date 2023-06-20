import "./Work.css";
import Card from "../slider/Card"
import CardData from "./WorkCardData";
import React from 'react'

export const Work = () => {
  return (
    <div className="card-section">
      <br></br>
        <div className="card-container">
            {CardData.map((val, ind) => {
                return(
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

  )
}

export default Work;