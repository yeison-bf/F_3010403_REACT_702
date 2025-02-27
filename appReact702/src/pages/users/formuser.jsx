import React from 'react'

export const Formuser = () => {
    return (
        <> 
            <h2>Registro</h2>
            <form action="">

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nombres</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Apellidos</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <button type='submit' className='btn btn-success col-12'>Guardar</button>
            </form>


        </>

    )
}
