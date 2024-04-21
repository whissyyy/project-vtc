import React from 'react';
import CarList from './CarList'; // Import CarList instead of CarCard
import './Cars.css';
const Cars = () => {
  return (
    <div>
      <h1 className='ch1'>NOS VÉHICULES</h1>
      <h3 className='cp'>Tous nos véhicules sont récents et tout équipés. Vous voyagerez dans les meilleures conditions possibles. Que vous soyez seul ou en groupe, nous avons des véhicules adaptés.</h3>
   <CarList />
    </div>
  );
}

export default Cars;
