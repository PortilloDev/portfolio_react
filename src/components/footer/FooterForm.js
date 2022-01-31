import React from 'react'

class FooterForm extends React.Component {
    constructor(args) {
        super(args)
        this.state = {
            name:'',
            email:'',
            coments:'',
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
        if(!this.validate()) {
            return;
        }
        fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name : this.state.name,
            email : this.state.email,
            coments : this.state.coments,
        })
    });

    event.preventDefault();
        this.setState({
            message:('Enviado correctamente!')
        })
    }

    validate() {
        const messages = [];
        const errors = 0;
        if(this.state.acept != true ) {
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
        if(this.state.coment.value !== "" ) {
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


    render(){
        return (
            <div>
                            <h1>Contacto</h1>
                            <div>
                                <label htmlFor="name"> Nombre: </label>
                                <input 
                                    type="text" id="name" name="name" 
                                    value={this.state.name} 
                                    onChange={this.onChange.bind(this)}/>
                            </div>
                            <div>
                                <label htmlFor="email"> Email: </label>          
                                <input
                                    type="text" name="email" id="email"
                                    value={this.state.email} 
                                    onChange={this.onChange.bind(this)}/>   
                            </div>
                            <div>
                                <label htmlFor="coments"> Comentarios: </label>
                                <textarea 
                                    name="coments" placeholder="Añade tus comentarios" id="coments"
                                    value={this.state.coments} 
                                    onChange={this.onChange.bind(this)}/> 
                            </div>
                            <div>
                                <input 
                                    type="checkbox" name="acept" id="acept" 
                                    value={this.state.acept}
                                    onChange={this.onChange.bind(this)}/> 
                                    <span>Aceptas terminos y condiciones</span>
                            </div>
                            <div>
                                <button onClick={this.handleSubmit} >Enviar</button>
                                <span style={{ color:'green' }}>{this.state.message}</span>
                            </div>
                            
                    <span>{JSON.stringify(this.state)}</span>
            </div>
        )
    }
}




export default FooterForm
