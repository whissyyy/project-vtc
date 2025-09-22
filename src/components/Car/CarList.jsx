import React from 'react';
import CarCard from './CarCard';
import im1 from "../assets/cars/mercedes-benz-e.jpg";
import im2 from "../assets/cars/mercedes-class--s-black.jpg"
import im3 from "../assets/cars/Tesla-Model-X.jpg"
import im4 from "../assets/cars/mc-vito.jpg"
import { Row, Col } from 'react-bootstrap';

const CarList = () => {
  const cars = [
    {
      image_path: im1,
      title: "BERLINE",
      description: "Mercedes Classe C\n, Tesla Model 3\n, BMW Série 3\n, Audi A7"
    },
    {
      image_path: im2,
      title: "GRANDE BERLINE",
      description: "Mercedes Classe E\n, Tesla Model S\n, BMW Série 5\n,Mercedes Classe S"
    },
    {
      image_path: im3,
      title: "SUV",
      description: "Nissan Qashqai\n, Tesla Model Y\nMercedes GLS"
    },
    {
      image_path: im4,
      title: "VAN",
      description: "Mercedes Classe V , \nToyota Proace Verso"
    }
  ];

  return (
    <div>
      <Row>
  {cars.map((car, index) => (
    <Col key={index} xs={12} lg={3}>
      <CarCard
        imagePath={car.image_path}
        alt={car.title}
        description={car.description}
      />
    </Col>
  ))}
</Row>

    </div>
  );
};

export default CarList;
