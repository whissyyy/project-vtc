import React from 'react';
import Card from 'react-bootstrap/Card';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { faBabyCarriage, faBottleWater, faSuitcase, faWifi } from '@fortawesome/free-solid-svg-icons';
const IconCard = () => {
  return (

   
    <div style={{marginTop:"5%"}}>
    
<h1 className='ch1'>SERVICES À BORD</h1>
<h3 className='cp'>Retrouvez à bord de nos véhicules un ensemble de service gratuit.

</h3>

        <Row style={{paddingTop:"2%"}}>
            <Col xs={12} sm={6} md={3}>
          <Card style={{backgroundColor:"#edf1f7"}}>
            <div>
          <FontAwesomeIcon icon={faBottleWater} size="lg" style={{ width: '120px', height: '120px' }} />
          </div>
            <Card.Body>
              <Card.Title>BOUTEILLES D'EAU</Card.Title>
              <Card.Text>Bouteilles d'eau et friandises sont à votre disposition.</Card.Text>
            </Card.Body>           
            </Card>
            </Col>
            <Col xs={12} sm={6} md={3}>
            <Card  style={{backgroundColor:"#edf1f7"}}>  
            <div>
          <FontAwesomeIcon icon={faSuitcase} size="lg" style={{ width: '120px', height: '120px' }} />
          </div>
            <Card.Body>
              <Card.Title>BAGAGE</Card.Title>
              <Card.Text>Pas de suppléments pour le transport de vos bagages.

</Card.Text>
            </Card.Body>           
            </Card> 
            </Col>
            <Col xs={12} sm={6} md={3}>  <Card  style={{backgroundColor:"#edf1f7"}}>
  <div>
          <FontAwesomeIcon icon={faBabyCarriage} size="lg" style={{ width: '120px', height: '120px' }} />
          </div>
            <Card.Body>
              <Card.Title>ENFANTS</Card.Title>
              <Card.Text>Sièges bébé et rehausseurs gratuit pour voyager en sécurité.

</Card.Text>
            </Card.Body>           
            </Card>            </Col>
            <Col xs={12} sm={6} md={3}>   <Card  style={{backgroundColor:"#edf1f7"}}>
   <div>
          <FontAwesomeIcon icon={faWifi} size="lg" style={{ width: '120px', height: '120px' }} />
          </div>
            <Card.Body>
              <Card.Title>WIFI</Card.Title>
              <Card.Text>Restez connecté ! Vous trouverez internet à bord de nos véhicules.</Card.Text>
            </Card.Body>           
            </Card>
            </Col>

            </Row>
      </div>
  );
}

export default IconCard;
