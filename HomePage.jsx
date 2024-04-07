
import React from 'react';
import Navbar from './src/components/Navbar';
import HeroMonologue from './src/components/HeroMonologue';
import LandingPage from './src/Pages/LandingPage';


function HomePage(){
  return(
    <>
      <Navbar/>
      <HeroMonologue/>
      <LandingPage/>
    </>
  ) 
}


export default HomePage;