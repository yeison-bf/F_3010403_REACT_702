import React, { useContext, useEffect, useState } from 'react'

export const Formuser = ({ saveDataUser, titulo }) => {

    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    // Funcion para guardar los datos
    const saveData = (e) => {
        e.preventDefault()
        saveDataUser({name, lastname, email});
        setName('')
        setLastName('')
        setEmail('')
    }


    return (
        <>
            <h2>{titulo}</h2>
            <form onSubmit={saveData}>
                <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input onChange={(e) => setLastName(e.target.value)} value={lastname} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" />
                </div>
                <button type='submit' className='btn btn-success col-12'>Guardar</button>
            </form>


        </>

    )
}
