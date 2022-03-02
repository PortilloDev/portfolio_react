import React, {useState} from 'react';
import "./Form.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {sendMessage} from './../services/index';

const FooterForm = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    //const [formularioNoEnviado, cambiarFormularioNoEnviado] = useState(false);
    
    const handleSubmit = (data) => {
        let status = ''
        
        status = sendMessage(data);

        return status;
    }
    
	return (
		<>
        <Formik
            initialValues={{ 
                name: '',
                email: '',
                subject: '',
                comments :''
            }}
            validate={(valores)=>{
                let errores = {};

                if(!valores.email) {
                    errores.email = 'Por favor, ingrese un correo'
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                    errores.email = 'Debe ser un correo valido'
                }

                if(!valores.name) {
                    errores.name = 'Por favor, ingrese un nombre'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                    errores.name = 'El nombre solo puede contener letras y espacios'
                }

                if(!valores.subject) {
                    errores.subject = 'Por favor, indique un asunto'
                }

                if(!valores.comments) {
                    errores.comments = 'No ha indicado ningún comentario'
                }

                return errores;
            }}
            
            onSubmit={(valores, {resetForm})=>{
                resetForm();
                handleSubmit(valores)
                console.log("Formulario enviado!");
                cambiarFormularioEnviado(true);
                setTimeout(()=> cambiarFormularioEnviado(false), 5000)
                
            }}
        >
            {({errors})=>(
                <Form className="formulario" handleSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <Field
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            id="name"                            
                        />
                        <ErrorMessage name="name" component={()=>(
                            <div className="error">{errors.name}</div>
                        )}/>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="email"
                        />
                        <ErrorMessage name="email" component={()=>(
                            <div className="error">{errors.email}</div>
                        )}/>
                    </div>
                    <div>
                        <label htmlFor="subject">Asunto</label>
                        <Field
                            type="text"
                            name="subject"
                            placeholder="Asunto del mensaje"
                            id="subject"
                        />
                        <ErrorMessage name="subject" component={()=>(
                            <div className="error">{errors.subject}</div>
                        )}/>
                    </div>
                    <div>
                        <label htmlFor="comments">Mensaje</label>
                        <Field
                            name="comments"
                            as="textarea"
                            placeholder="Deja aquí tú mensaje"
                            id="comments"
                        /> 
                        <ErrorMessage name="comments" component={()=>(
                            <div className="error">{errors.comments}</div>
                        )}/>
                    </div>

                    <button type="submit">Enviar</button>
                    {formularioEnviado && <p className="exito">Formulario enviado con exito! </p>}
                </Form>
            )}
        </Formik>
            
		</>
	);
}


export default FooterForm
