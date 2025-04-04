import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetOneDataApi } from '../services/api.services'

export const ViewsDetail = () => {

    // Capturamos el dato que viene por parametro
    const { id } = useParams() //8
    // Creamos una constante para almacenar el objeto de la api
    const [user, setUser] = useState({})

    // Llamamos al hooks de useffect
    useEffect(() => {
        const fetchDataOne = async () => {
           const response = await GetOneDataApi(id)
           console.log("respuesta de uan busqueda ", response.data)
        }
        fetchDataOne()
    }, [id])



    return (
        <div>ViewsDetail</div>
    )
}
