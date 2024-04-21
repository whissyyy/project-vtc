import React from 'react'
import Home from './Home'
import About from './About'
import { Footer } from '../components/Footer/Footer'
import Reservation from '../components/Reservation/Reservation'
import Cars from '../components/Car/Cars'
import IconCard from '../components/icons/iconcard'
import Avis from "../components/LesAvis/Avis";
import AjouterAvis from '../components/LesAvis/AjouterAvis'
const Main = () => {
  return (
    <div>
      <div id="Reservation">
          <Reservation/>
          </div>
          <div id='About'>
            <About/>
          </div>
          
          <div id="Voitures">
          <Cars/>
          </div>
          <IconCard/>
          <div id="Avis">
          <Avis/>
          </div>
          <Footer/>
          
{/*
      <Home/>
    <About/>
  <Footer/>*/}
    </div>
  )
}

export default Main