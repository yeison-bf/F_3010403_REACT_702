import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Users = () => {
  const navegate = useNavigate()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
          setUsers(response.data.results)
        }).catch((err) => {
        });
    }

    fetchData()
  }, [])



  const handleViewsDetail = (id) => {
    navegate('/home/views-users/' + id)
  }

  return (
    <>
      <div className="container">
        <div className="card p-5">
          <table className='table'>
            <thead>
              <tr>
                <th className="filaImagen">Imagen</th>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Genero</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((element, index) => (
                <tr key={index}>
                  <td className="filaImagen"><img className="imagenTableUsers" src={element.image} alt="" /> </td>
                  <td >{element.name}</td>
                  <td>{element.species}</td>
                  <td>{element.gender}</td>
                  <td>{element.status}</td>
                  <td><button onClick={() => handleViewsDetail(element.id)} className='btn btn-primary btn-sm'>Ver</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}
