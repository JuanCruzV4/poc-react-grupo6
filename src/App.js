import React, {Fragment, useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import ClienteList from "./Components/ClienteList";
import Form from './Components/FormCli'

function App() {

  const [cliente, setCliente] = useState({
    cuil: '',
    cuit: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    razonSocial: ''
  })

  const [clientes, setClientes] = useState([])

  const [listUpdate, setListUpdate] = useState(false)

  useEffect( () => {
    const getClientes = () => {
      fetch('http://localhost:3000/api/v1/cliente')
      .then(res => res.json())
      .then(res => setClientes(res))
    }
    getClientes()
    setListUpdate(false)
  }, [listUpdate])

  return (
    <Fragment>
      <Navbar brand='Pampa Nutricion App'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista De Clientes</h2>
            <ClienteList cliente={cliente} clientes={clientes} setListUpdate={setListUpdate}/>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-5">
                 <h2 style={{textAlign: 'center'}}>Ingresar Cliente</h2>
                 <Form cliente={cliente} setCliente={setCliente}/>
              </div>
           </div>
      </div>
    </Fragment>
  );
}

export default App;
