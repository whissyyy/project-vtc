import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
const CarCard = ({ imagePath, title, description }) => {
  return (
    <div>
     
          <Card>
            <Card.Img 
              className="car-image" 
              variant="top"  
              src={imagePath}
            
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
         
</Card>
      </div>
  );
}

export default CarCard;
