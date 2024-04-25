import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col components from your grid library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CreditCardIcons from './CreditCardIcons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import "./Footer.css"
export const Footer = () => {
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
          <h2>Liens rapides</h2>
          <div>
          <Nav.Link style={{ cursor:"pointer" ,textDecoration: "underline"}} as={Link} to="Reservation" smooth={true} duration={100}>RESERVATION</Nav.Link>
          <Nav.Link style={{ cursor:"pointer",textDecoration: "underline"}}  as={Link} to="Voitures" smooth={true} duration={100}>NOS VÉHICULES</Nav.Link>
          <Nav.Link style={{ cursor:"pointer",textDecoration: "underline"}} as={Link} to="Avis" smooth={true} duration={100}>AVIS</Nav.Link>
</div>

        </Col>
        <Col>
          <h2>Payment</h2>
          <CreditCardIcons />
        </Col>
      </Row>
      <div className="footer-bottom">
      </div>

        &copy; 2024 | Tous droits réservés | <span>Conçu par <a href="#"> Ultimate Driver</a></span>
      </div>
    </footer>
    </div>
  );
};
