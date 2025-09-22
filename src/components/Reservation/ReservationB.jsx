import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';

function ContactButtons() {
    const location = useLocation();

    const isReservationRoute = location.pathname === '/Reserver';
  
  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <a style={{ fontSize: '28px' }} className="btn btn-outline-dark btn-block" href="tel:+330769575319">
    <FontAwesomeIcon icon={faPhone} size="lg" />
    +33 7.695.753.19
  </a>
  <br />
  <a style={{ fontSize: '28px' }} className="btn btn-outline-dark btn-block" href="tel:0769575319">
    <FontAwesomeIcon icon={faPhone} size="lg" />   07.695.753.19
  </a>
  <br />
  <a  className="btn btn-success btn-block" href="https://wa.me/+330769575319">
    WhatsApp<FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ width: '120', marginRight: '3%', height: '20px' }} />
  </a>
  <br/>

</div>

  );
}

export default ContactButtons;
