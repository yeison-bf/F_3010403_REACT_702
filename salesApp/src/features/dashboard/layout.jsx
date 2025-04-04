import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './styleDashboard.css'
export const Layout = () => {

    const navegation = useNavigate()
    const logout = ()=>{
        navegation('/', { replace: true });

    }

    return (
        <div className='dashboard'>
            <nav>
                <ul>
                    <li>
                        <Link className='font-semibold text-xl tracking-tight text-white-600' to="/home/users">Usuarios</Link>
                    </li>
                    <li>
                        <Link className='font-semibold text-xl tracking-tight text-white-600' to="/home/products">Productos</Link>
                    </li>
                    <li className='m-6'><Link className='font-semibold text-xl tracking-tight' to="/home/api">API</Link></li>

                </ul>
            </nav>
            <div className="contenedor">
                <div className="nabvar">
                    <p>Bienvenido</p> <small><a onClick={logout}>Salir</a></small>
                </div>
                <div className="contenidos">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
