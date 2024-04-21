import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import dd from './dd.png'; 
import './NavBar.css';


function NavBar() {
  const phoneNumber = '0769575319'; // Replace with your phone number

  const handlePhoneNumberClick = () => {
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/+330769575319");
  };

  return (
    <Navbar expand="lg" style={{backgroundColor:"grey"}}>
    <Container>
      <Navbar.Brand>
      <img src={dd} style={{ width: "120px" }} />

      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navmrg"> {/* Use ml-auto to align items to the right */}
          <Nav.Link style={{ cursor:"pointer"}} as={Link} to="Reservation" smooth={true} duration={100}>RESERVATION</Nav.Link>
          <Nav.Link style={{ cursor:"pointer"}}  as={Link} to="Voitures" smooth={true} duration={100}>NOS VÉHICULES</Nav.Link>
          <Nav.Link style={{ cursor:"pointer"}} as={Link} to="Avis" smooth={true} duration={100}>AVIS</Nav.Link>
          

          <Nav.Link onClick={handlePhoneNumberClick}>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
        +33 7.695.753.19
      </Nav.Link>     
        <Nav.Link onClick={handleWhatsappClick}>
        <FontAwesomeIcon icon={faWhatsapp} size="lg"  style={{ color: 'Green' , marginRight:"3%" ,width: '35px', height: '35px'}} />
      </Nav.Link>     </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
