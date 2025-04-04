import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ViewsUsers = () => {

  // Capturamos el dato que viene por parametro
  const { id } = useParams()
  // Creamos una constante para almacenar el objeto de la api
  const [user, setUser] = useState({})


  // Llamamos al hooks de useffect
  useEffect(() => {
    const fetchData = () => {
      axios.get('https://rickandmortyapi.com/api/character/' + id)
        .then((response) => {
          setUser(response.data)
        }).catch((err) => {
        });
    }

    fetchData()
  }, [])


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={user.image} alt="" />
          </div>

          <div className="col-8">
            <div className="informacion">
              <label htmlFor="">Nombre</label>
              <input disabled type="text" className='form-control' value={user.name} />
            </div>
            <div className="informacion">
              <label htmlFor="">Genero</label>
              <input disabled type="text" className='form-control' value={user.gender}  />
            </div>
            <div className="informacion">
              <label htmlFor="">Especie</label>
              <input disabled type="text" className='form-control' value={user.species}  />
            </div>
            <div className="informacion">
              <label htmlFor="">Origen</label>
              <input disabled type="text" className='form-control'   />
            </div>
            <div className="informacion">
              <label htmlFor="">Estatus</label>
              <input disabled type="text" className='form-control' value={user.status} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
