import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formuser } from './pages/users/formuser'
import Users from './pages/users/users'
import { useState } from 'react'

function App() {

  const [dataUsers, setDataUsers] = useState([]);
  const titulo = 'Formulario de registro de usuarios';
  
  // Guardar datos en el arreglo
  const saveDataUser = (user) =>{
    setDataUsers([...dataUsers, user])
  }


  return (
    <>
      <div className='container-fluid p-5'>
        <div className="row">
          <div className="col-4 p-4">
            <Formuser saveDataUser={saveDataUser} titulo={titulo}/>
          </div>
          <div className="col-8 p-4">
            <Users dataUsers={dataUsers} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
