import React from "react";

const Users = ({ dataUsers }) => {
    return (
        <>
            <h2>Listado de usuarios</h2>


            <table className="table bordered">
                <thead>
                    <th>Items</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    {dataUsers.map((element, index)=>(
                    <tr>
                        <td>{(index+1)}</td>
                        <td>{element.name}</td>
                        <td>{element.lastname}</td>
                        <td>{element.email}</td>
                        <td>
                            <button className="btn btn-primary btn-sm">Ver</button>
                            <button className="btn btn-success btn-sm">editar</button>
                            <button className="btn btn-danger btn-sm">eliminar</button>
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Users;