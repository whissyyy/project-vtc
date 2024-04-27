import React from 'react';
import CarList from './CarList'; // Import CarList instead of CarCard
import './Cars.css';
import { useTranslation } from 'react-i18next';
const Cars = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className='ch1'>{t('car.title')}</h1>
      <h3 className='cp'>{t('car.paragraph')}</h3>
   <CarList />
    </div>
  );
}

export default Cars;
