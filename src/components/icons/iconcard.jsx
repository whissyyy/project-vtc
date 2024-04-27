import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { faBabyCarriage, faBottleWater, faSuitcase, faWifi } from '@fortawesome/free-solid-svg-icons';
import i18n from '../../translations/translation';

const IconCard = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <div style={{marginTop:"5%"}}>
      <h1 className='ch1'>{t('iconcard.services')}</h1>
      <h3 className='cp'>{t('iconcard.serviceDescription')}</h3>
      <Row style={{paddingTop:"2%"}}>
        <Col xs={12} sm={6} md={3} style={{paddingBottom:"3%"}}>
          <Card style={{backgroundColor:"#edf1f7"}}>
            <div>
              <FontAwesomeIcon icon={faBottleWater} size="lg" style={{ width: '120px', height: '120px' }} />
            </div>
            <Card.Body>
              <Card.Title>{t('iconcard.water')}</Card.Title>
              <Card.Text>{t('iconcard.waterDescription')}</Card.Text>
            </Card.Body>           
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} style={{paddingBottom:"3%"}}>
          <Card  style={{backgroundColor:"#edf1f7"}}>  
            <div>
              <FontAwesomeIcon icon={faSuitcase} size="lg" style={{ width: '120px', height: '120px' }} />
            </div>
            <Card.Body>
              <Card.Title>{t('iconcard.luggage')}</Card.Title>
              <Card.Text>{t('iconcard.luggageDescription')}</Card.Text>
            </Card.Body>           
          </Card> 
        </Col>
        <Col xs={12} sm={6} md={3} style={{paddingBottom:"3%"}}>
          <Card  style={{backgroundColor:"#edf1f7"}}>
            <div>
              <FontAwesomeIcon icon={faBabyCarriage} size="lg" style={{ width: '120px', height: '120px' }} />
            </div>
            <Card.Body>
              <Card.Title>{t('iconcard.children')}</Card.Title>
              <Card.Text>{t('iconcard.childrenDescription')}</Card.Text>
            </Card.Body>           
          </Card>            
        </Col>
        <Col xs={12} sm={6} md={3} style={{paddingBottom:"3%"}}>
          <Card  style={{backgroundColor:"#edf1f7"}}>
            <div>
              <FontAwesomeIcon icon={faWifi} size="lg" style={{ width: '120px', height: '120px' }} />
            </div>
            <Card.Body>
              <Card.Title>{t('iconcard.wifi')}</Card.Title>
              <Card.Text>{t('iconcard.wifiDescription')}</Card.Text>
            </Card.Body>           
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default IconCard;
