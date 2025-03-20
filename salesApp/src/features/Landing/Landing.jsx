import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

export const Landing = () => {
    return (
        <>
        <div className='containerLanding'>
            <Navbar />
            <div>Hola, estoy en la Landing</div>
            <Footer />
        </div>
        </>
    )
}
