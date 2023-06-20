import "./CoverImg.css";
import React, { Component } from 'react'

class  Project extends Component {
    render(){
        return (
            <div className="container">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
}

export default Project;
