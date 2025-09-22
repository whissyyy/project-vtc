import React from 'react';
import CarList from './CarList'; // Import CarList instead of CarCard
import './Cars.css';
import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';
const Cars = () => {
  const { t } = useTranslation();

  return (
    <div>
        <Helmet>
        <title>Ultimate Drivers - Nos Véhicules</title>
        <meta name="description" content="Découvrez notre flotte de véhicules de luxe disponibles pour vos déplacements sur la Côte d’Azur. Nous proposons des berlines, grandes berlines, SUV et vans." />
        <meta name="keywords" content="Ultimate Drivers, Côte d’Azur, berline, grande berline, SUV, van, Mercedes, Tesla, BMW, Audi, Nissan, Toyota" />
      </Helmet>
      <h1 className='ch1'>{t('car.title')}</h1>
      <h3 className='cp'>{t('car.paragraph')}</h3>
   <CarList />
    </div>
  );
}

export default Cars;
