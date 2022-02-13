import React from 'react'
import "./FooterForm.css";
class FooterForm extends React.Component {
    constructor(args) {
        super(args)
        this.state = {
            name:'',
            email:'',
            subject:'',
            comments:'',
            acept:'',
            message:''
        }
    }

    onChange(e){
        if(e.target.name === 'acept') {
            this.setState({
                [e.target.name]: e.target.checked
            })  
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })  
        }

    }

    handleSubmit(event){

       // if(!this.validate()) {
         //   return;
       // }

        const request = new XMLHttpRequest();
        const data = JSON.stringify({
            name    : this.state.name,
            email   : this.state.email,
            subject : this.state.subject,
            comments : this.state.comments,
        })
        request.open("POST", 'http://localhost:8000/api/contact', false);

        request.addEventListener('sta', function(){
            if (this.status === 200) {
                console.log(this.responseText);
            }
        });

        request.setRequestHeader("Content-Type", "AppliCAtion/Json");
        request.send(data);
    }
        /*
        fetch('http://localhost:8000/api/contact ', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name    : this.state.name,
            email   : this.state.email,
            subject : this.state.subject,
            comments : this.state.comments,
        })
    });

    event.preventDefault();
        this.setState({
            message:('Enviado correctamente!')
        })
    }
/*
     validate() {
         const messages = [];
         const errors = 0;
         if(this.state.acept !== true ) {
             errors = 1;
             messages.push({msg:'Debe aceptar las condicones'})
         }
 
         if(this.state.name.value !== "" ) {
             errors = 1;
             messages.push({msg:'Debe aceptar las condicones'})
         }
         if(this.state.email.value !== "" ) {
             errors = 1;
             messages.push({msg:'Debe aceptar las condicones'})
         }
         if(this.state.comments.value !== "" ) {
             errors = 1;
             messages.push({msg:'Debe aceptar las condicones'})
         }
 
         if (errors === 1) {
             messages.forEach(error => {
                 this.setState({
                     message:error.msg
                 })
             });
             return false;
         }
 
         return true;
 
     }
     */


    render(){
        return (
            <div className="formulario">
                            <h1>Formulario de contacto</h1><br/>

                            <h3>Escribeme y en breve me pondre en contacto contigo</h3><br/>
                            <p>
                                <label htmlFor="name" className="name"> Nombre: </label>
                                <span className="obligatorio">*</span>
                                <input 
                                    type="text" id="name" name="name" 
                                    value={this.state.name} 
                                    onChange={this.onChange.bind(this)}/>
                            </p>
                            <p>
                                <label htmlFor="email" className="email"> Email: </label>  
                                <span className="obligatorio">*</span>        
                                <input
                                    type="text" name="email" id="email"
                                    value={this.state.email} 
                                    onChange={this.onChange.bind(this)}/>   
                            </p>
                            <p>
                                <label htmlFor="subject" className="subject"> Asunto: </label>  
                                <span className="obligatorio">*</span>        
                                <input
                                    type="text" name="subject" id="subject"
                                    value={this.state.subject} 
                                    onChange={this.onChange.bind(this)}/>   
                            </p>
                            <p>
                                <label htmlFor="comments" className="mensaje"> Mensaje: </label>
                                <span className="obligatorio">*</span>
                                <textarea 
                                    name="comments" placeholder="Deja aquí tus comentarios" id="comments"
                                    value={this.state.comments} 
                                    onChange={this.onChange.bind(this)}/> 
                            </p>
                            <p>
                                <button onClick={this.handleSubmit} className="button_form">
                                    <p>Enviar</p> 
                                </button>
                                <span style={{ color:'green' }}>{this.state.message}</span>
                            </p>
                            <p className="aviso">
                                <span className="obligatorio"> * </span>los campos son obligatorios.
                            </p>
            </div>
        )
    }
}




export default FooterForm
