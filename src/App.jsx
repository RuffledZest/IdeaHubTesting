// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroMonologue from './components/HeroMonologue'
import Navbar from './components/Navbar'

function App() {
  // document.body.style.backgroundColor = "black"

  return (
    <>
    
    <h1>
      <Navbar />
      <HeroMonologue />
    </h1>

    </>
  )
}

export default App
