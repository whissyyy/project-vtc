import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col components from your grid library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CreditCardIcons from './CreditCardIcons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import "./Footer.css"
import { useTranslation } from 'react-i18next';
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div style={{color:'white', paddingTop:"2%"}}>
    <footer style={{backgroundColor:'#222'}}x>
    <div style={{paddingTop:"2%"}}> 
      <Row>
        <Col>
          <h2 className="logo">Ultimate Drivers</h2>
          <div className="contact" style={{ paddingRight: "10%" }}>
            <span><FontAwesomeIcon icon={faPhone} /> 07-695-753-19</span>
            <span><FontAwesomeIcon icon={faEnvelope} style={{ paddingRight: '10px'  }} /> ultimatedrivervtc@gmail.com</span>
            <FontAwesomeIcon icon={faTwitter} style={{ paddingRight: '10px' }} />
            <FontAwesomeIcon icon={faInstagram} style={{ paddingRight: '10px' }} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </Col>
        
        <Col>
          <h2> {t('footer.LP')}</h2>
          <div>
          <Nav.Link style={{ cursor:"pointer" ,textDecoration: "underline"}} as={Link} to="Reservation" smooth={true} duration={100}>{t('navbar.reservation')}</Nav.Link>
          <Nav.Link style={{ cursor:"pointer",textDecoration: "underline"}}  as={Link} to="Voitures" smooth={true} duration={100}> {t('navbar.vehicles')}</Nav.Link>
          <Nav.Link style={{ cursor:"pointer",textDecoration: "underline"}} as={Link} to="Avis" smooth={true} duration={100}>{t('navbar.reviews')}</Nav.Link>
</div>

        </Col>
        <Col>
          <h2> {t('footer.payment')}</h2>
          <CreditCardIcons />
        </Col>
      </Row>
      <div className="footer-bottom">
      </div>

        &copy; 2024 | {t('footer.tdr')} | <span>{t('footer.cpar')} <a href="#"> Ultimate Driver</a></span>
      </div>
    </footer>
    </div>
  );
};
