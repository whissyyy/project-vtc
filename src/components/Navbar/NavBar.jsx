import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../translations/translation';
import dd from './dd.png';

function NavBar() {
  const { t } = useTranslation();
  const phoneNumber = '0769575319'; // Replace with your phone number

  const handlePhoneNumberClick = () => {
    window.open(`tel:${phoneNumber}`, '_blank');
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.me/+330769575319');
  };

  const changeLanguage = newlng => {
    i18n.changeLanguage(newlng);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: 'grey' }}>
      <Container>
        <Navbar.Brand>
        <Nav.Link as={Link} to="About" smooth={true} duration={500}   style={{ cursor: 'pointer' }}
        >
        <img src={dd} style={{ width: '120px' }} alt="Ultimate Drivers" />
          </Nav.Link>
        </Navbar.Brand>
        <Dropdown className="vtc-language float-lg-right">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {i18n.language}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: '20px' }}>
              <Dropdown.Item onClick={() => changeLanguage('fr')}>Francais</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('es')}>español</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('de')}>Deutsch</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('pt')}>português</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('ar')}>عربي</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('zh')}>日本語</Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('ja')}>中国人</Dropdown.Item>
              {/* Add more languages as needed */}
            </Dropdown.Menu>
          </Dropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navmrg">
          <Nav.Link as={Link} to="Reservation" smooth={true} duration={500}   style={{ cursor: 'pointer' }}
          >
  {t('navbar.reservation')}
</Nav.Link>
<Nav.Link as={Link} to="Voitures" smooth={true} duration={500}   style={{ cursor: 'pointer' }}
>
{t('navbar.vehicles')}
            </Nav.Link>
            <Nav.Link as={Link} to="Avis" smooth={true} duration={500}   style={{ cursor: 'pointer' }}
            >
            {t('navbar.reviews')}
            </Nav.Link>
            <Nav.Link onClick={handlePhoneNumberClick}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
              +33 7.695.753.19
            </Nav.Link>
            <Nav.Link onClick={handleWhatsappClick}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="lg"
                style={{ color: 'Green', marginRight: '3%', width: '35px', height: '35px' }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default NavBar;
