import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formuser } from './pages/users/formuser'
import Users from './pages/users/users'

function App() {
  return (
    <>
      <div className='container-fluid p-5'>
        <div className="row">
          <div className="col-4 p-4">
            <Formuser/>
          </div>
          <div className="col-8 p-4">
            <Users />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
