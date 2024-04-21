import React from 'react';
import "./Reservation.css";
const AutocompleteCard = ({ addressSuggestions,onClick }) => {

  if (!addressSuggestions || addressSuggestions.length === 0) {
    return null; 
  }
  return (
    <div className="autocomplete-overlay">
      {addressSuggestions && addressSuggestions.map((suggestion, index) => (
        <div key={index} onClick={() => onClick(suggestion.formatted)} className="list-group-item"><div className="black-border">{suggestion.formatted}</div></div>
      ))}
    </div>
  );
};

export default AutocompleteCard;
