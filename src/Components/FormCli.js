import React from "react";

const Form = ({cliente, setCliente}) =>{

    const handleChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value 
        })
    }
    let{usuario, nombre, apellido, fechaNacimiento, direccion, telefono,razonSocial} = cliente

    const handleSubmit = () => {

        //validacion de los datos
        
        if(usuario === '' || nombre === '' || apellido === '' || fechaNacimiento === '' || direccion === '' || telefono === '' || razonSocial === ''){
            alert('Todos los campos son obligatorios')
            return 
         
       }
        //consulta
           const requestInit = {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cliente)
           }
           fetch('http://localhost:3000/api/v1/cliente', requestInit)
           .then(res => res.text())
           .then(res => console.log(res))

           //reiniciando state del libro
           //setCliente({
           // usuario: '',
            //cuil: '',
            //cuit: '',
            //nombre: '',
            //apellido: '',
           // fechaNacimiento: '',
            //direccion: '',
           //// telefono: '',
           // razonsocial: ''
          // })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                 <label className="form-label">Usuario</label>    
                 <input name="usuario" onChange={handleChange} type="text" id="usuario" className="form-control"/>
            </div>
            <div className="mb-3">
                 <label className="form-label">Cuil</label>    
                 <input name="cuil" onChange={handleChange} type="text" id="cuil" className="form-control"/>
            </div>  
            <div className="mb-3">
                 <label className="form-label">Cuit</label>    
                 <input name="cuit" onChange={handleChange} type="text" id="cuit" className="form-control"/>
            </div>
            <div className="mb-3">
                 <label className="form-label">Nombre</label>    
                 <input name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                 <label className="form-label">Apellido</label>    
                 <input name="apellido" onChange={handleChange} type="text" id="apellido" className="form-control"/>
            </div>
            <div className="mb-3">
                 <label className="form-label">Fecha Nacimiento</label>    
                 <input name="fechaNacimiento" onChange={handleChange} type="text" id="fechaNacimiento" className="form-control"/>
            </div>
            <div className="mb-3">
                 <label className="form-label">Direccion</label>    
                 <input name="direccion" onChange={handleChange} type="text" id="direccion" className="form-control"/>
            </div>
            <div className="mb-3">
                 <label className="form-label">Telefono</label>    
                 <input name="telefono" onChange={handleChange} type="text" id="telefono" className="form-control"/>
            </div>
            <div className="mb-3">
                 <label className="form-label">Razon Social</label>    
                 <input name="razonSocial" onChange={handleChange} type="text" id="razonSocial" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;