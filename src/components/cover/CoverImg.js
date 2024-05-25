import React, { Component } from 'react'
import Photo from "../../media/fotoPerfil.jpg";
class  Project extends Component {
    render(){
        return (
            <div className=" w-full h-full">
                <div className="w-full h-full flex-col absolute space-y-96 py-4 items-center ">
                    <h1 className='text-5xl text-white mt-28 font-bold'>{this.props.heading}</h1>
                   
                </div>
                <div className=" w-full h-full lg:h-96 lg:object-fill">
                    <img className='object-cover h-full w-full' loading="lazy" src={Photo} alt={Photo}></img>
                </div>
            </div>
          )
    }
}

export default Project;
