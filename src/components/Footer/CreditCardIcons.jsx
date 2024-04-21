import React from "react";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png"
import paypal from "../assets/paypal.png";
import cash from "../assets/cash.png";
import americanexp from "../assets/american-express.png" 
const CreditCardIcons = () => (
  <div>
    <img src={visa} alt="Visa" />
    <img src={mastercard} alt="Mastercard" />
    <img src={paypal} alt="PayPal" />
    <img src={americanexp} alt="americanexp" />
    <img src={cash} alt="Cash" />

  </div>
);

export default CreditCardIcons;
