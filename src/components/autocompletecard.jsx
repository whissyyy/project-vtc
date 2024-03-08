import React from 'react';

const AutocompleteCard = ({ addressSuggestions, onClick }) => {
  
  return (
    <div className="autocomplete-overlay">
      {addressSuggestions && addressSuggestions.map((suggestion, index) => (
        <div key={index} onClick={() => onClick(suggestion.properties.formatted)} className="list-group-item">{suggestion.properties.formatted}</div>
      ))}
    </div>
  );
};

export default AutocompleteCard;
