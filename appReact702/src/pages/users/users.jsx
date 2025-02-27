import React from "react";

const Users = () =>{
    return(
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
                    <tr>
                        <td>1</td>
                        <td>Mariana</td>
                        <td>Castro Perez</td>
                        <td>mariana@gmail.com</td>
                        <td>
                            <button className="btn btn-primary btn-sm">Ver</button>
                            <button className="btn btn-success btn-sm">editar</button>
                            <button className="btn btn-danger btn-sm">eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Users;