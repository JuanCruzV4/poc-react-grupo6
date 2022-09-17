import React from "react";

const ClienteList = ({cliente, clientes, setListUpdate}) => {

    const handleDelete = id => {
        const requestInit = {
            method : 'DELETE'
           }
           fetch('http://localhost:3000/api/v1/cliente' + id, requestInit)
           .then(res => res.text())
           .then(res => console.log(res))

           setListUpdate(true)
    }
    let{usuario, nombre, apellido, fechaNacimiento, direccion, telefono,razonSocial} = cliente

    const handleUpdate = id => {
        const requestInit = {
            method : 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cliente)
           }
           fetch('http://localhost:3000/api/v1/cliente' + id, requestInit)
           .then(res => res.text())
           .then(res => console.log(res))

           setListUpdate(true)
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>CUIL</th>
                    <th>CUIT</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha Nac</th>
                    <th>Direccion</th>
                    <th>Tel</th>
                    <th>Razon Social</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.cuil}</td>
                                <td>{cliente.cuit}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.apellido}</td>
                                <td>{cliente.fechaNacimiento}</td>
                                <td>{cliente.direccion}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.razonSocial}</td>
                                <td>
                                    <div className="mb-3">
                                        <button onClick={()=> handleDelete(cliente.id)} className="btn btn-danger">Eliminar</button>

                                    </div>
                                    <div className="mb-3">
                                        <button onClick={()=> handleUpdate(cliente.id)} className="btn btn-dark">Actualizar</button>

                                    </div>
                                </td>

                            </tr>
                )

                )}
                
            </tbody>
        </table>
    )
}

export default ClienteList;