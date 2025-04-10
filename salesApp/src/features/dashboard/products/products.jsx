import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GetDataProducts } from './services/serives.products';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const navitage = useNavigate()
  const [dataProducts, setDataProducts ]= useState([])

  useEffect(() => {
    
    const getData = async () =>{
      const data = await GetDataProducts()
      setDataProducts(data.data.message)
    }

    getData()
  }, [])
  

  const viewForm = () =>{
    navitage('/home/formProducts')
  }

  return (
    <>
      <div className="container">
        <div className="row m-5">
          <button onClick={viewForm} className='btn btn-primary'>Nuevo registro</button>
        </div>
        <div className="card p-5">
          <table className='table'>
            <thead> 
              <tr>
                <th>Items</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataProducts.map(element => (
                <tr>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.count}</td>
                  <td>{element.price}</td>
                  <td>xxx</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}
