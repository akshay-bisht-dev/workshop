import React from 'react'
import About from './components/About'
import Cities from './components/Cities'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Cities/>
    <Services/>
    <About/>
    </>
  )
}

export default App