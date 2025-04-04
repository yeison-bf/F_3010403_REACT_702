import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../../../features/Landing/Landing'
import { Login } from '../../../features/auth/Login'
import { Users } from '../../../features/dashboard/users/users'
import { Products } from '../../../features/dashboard/products/products'
import { Layout } from '../../../features/dashboard/layout'
import { Error_404 } from '../../../features/404/error_404'
import { ViewsUsers } from '../../../features/dashboard/users/components/views-users'
import { ConsumoApi } from '../../../features/dashboard/consumoAPI/comsumoApi'
import { ViewsDetail } from '../../../features/dashboard/consumoAPI/components/viewsDetail'

export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/products' element={ <h2>Hola Productos</h2>} />
            <Route path='/services' element={ <h2>Hola Servicios</h2>} />
            <Route path='/login' element={<Login />} />

            {/* Rutas del dashboard */}
            <Route path='/home' element={<Layout />} > 
                <Route path='users' element={<Users />} />
                <Route path='views-users/:id' element={<ViewsUsers />} />
                <Route path='products' element={<Products />} />
                <Route path='api' element={<ConsumoApi />} />
                <Route path='viewsDetail/:id' element={<ViewsDetail />} />

            </Route>

            <Route path='*' element={<Error_404/>} />
        </Routes>
    )
}
