import React, { useState } from 'react'
import { Navbar } from '../Landing/components/navbar'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navegation = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dataAccess, setDataAccess] = useState({
    email:'yeison@gmail.com',
    password:"Hola1234"
  })

  const login = (e) =>{
    e.preventDefault()
    if(email == dataAccess.email && password == dataAccess.password){
      navegation('/home/users', { replace: true });
    }else{
      alert("Credenciales incorrectas")
    }
  }


  return (
    <>
      <Navbar />
      <div className="flex  items-center justify-center text-white">

        <div className="w-full max-w-lg">
          <img src="https://img.freepik.com/vector-gratis/diseno-logotipo-degradado-colorido-letra_474888-2309.jpg" alt="" className='logoLogin' />
          <form onSubmit={login} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Correo
              </label>
              <input onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Contraseña
              </label>
              <input onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Acceder
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
