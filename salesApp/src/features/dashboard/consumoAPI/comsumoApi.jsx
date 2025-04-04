import React, { useEffect, useState } from 'react'
import { GetDataApi } from './services/api.services';
import { useNavigate } from 'react-router-dom';

export const ConsumoApi = () => {

    const [listUser, setListUser] = useState([])
    const [showAlert, setShowAlert] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        async function dataPeticion() {
            const data = await GetDataApi()
            if (data?.status == false) {
                setShowAlert(true)
            }
            setListUser(data.data.results)
        }
        dataPeticion()
    }, []);

    const handleViewsDetail = (id) => {
        navigate('/home/viewsDetail/'+id)
    }


    return (
        <>
            <div className="container">
                <div className="card p-5">
                    {showAlert ? (
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Lo sentimos!</strong> No se encontraron datos...
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ) : ''}

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
                            {listUser.map((element, index) => (
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
