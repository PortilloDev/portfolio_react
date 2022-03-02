import React from 'react'
import Form from "./Form";
const SectionContact = () => {
    return (
        <div className="section-contact">
            <div className="contact-description">
                <h1>Contacto</h1>
                    <br/>
                    <p> Si te gusta lo que hago, quieres pasar a saludar o crees que podemos colaborar escríbeme a traves del formulario para que nos pongamos en contacto.</p>
            </div>
            <div className="contact-form">
                <Form/>
            </div>
        </div>
    )
}

export default SectionContact


