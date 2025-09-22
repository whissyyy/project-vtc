import React from 'react'
import About from './About'
import Cars from '../components/Car/Cars'
import IconCard from '../components/icons/iconcard'
import Avis from "../components/LesAvis/Avis";
import Reservation from '../components/Reservation/Reservation';
const Main = () => {
  return (
    <div>
               <div id='Reservation'>

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
    </div>
  )
}

export default Main