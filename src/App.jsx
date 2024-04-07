// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroMonologue from './components/HeroMonologue'
import Login from './components/Login'

import Navbar from './components/Navbar'
import Registration from './components/RegistrationPage'

function App() {
  // document.body.style.backgroundColor = "black"

  return (
    <>
    
    <h1>
      <Navbar />
      <HeroMonologue />
      <Login />
      <Registration />
     
    </h1>

    </>
  )
}

export default App



