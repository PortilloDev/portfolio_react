import React from 'react'
import Form from "./Form";
const SectionContact = () => {
    return (
        <div className="section-contact">
            <div className="contact-description">
                <h1>Contacto</h1>
                    <br/>
                    <p>Hola, si deseas que colaboremos juntos, puede ponerse en contacto conmigo desde el formulario o mis redes sociales.</p>
            </div>
            <div className="contact-form">
                <Form/>
            </div>
        </div>
    )
}

export default SectionContact


