import React from 'react';
import AutocompleteCard from './autocompletecard';
import "./UserData.css"

const UserData = ({ adrdpt, adrarv, date,todaydate,onDateChange,onAdrdptChange, onAdrarvChange,onTimeChange,time,instanceId}) => {
    const [addressSuggestions, setAddressSuggestions] = React.useState([]);
    const [addressSuggestions2, setAddressSuggestions2] = React.useState([]);
    const [showAutocomplete, setShowAutocomplete] = React.useState(false);
    const [showAutocomplete2, setShowAutocomplete2] = React.useState(false);
    const API_KEY = 'b89b2faff9b448779ae8b30acd71eb4d';
 
    
    const handleAdressClick = (formattedAddress) => {
        console.log("abc");
        onAdrdptChange(formattedAddress);
        setAddressSuggestions([]);
    };

    const handleAdress2Click = (formattedAddress) => {
        onAdrarvChange(formattedAddress);
        setAddressSuggestions2([]);
    };

    const handleAdrdptFocus = () => {
        setShowAutocomplete(true);
    };

    const handleAdrarvFocus = () => {
        setShowAutocomplete2(true);
    };

    const handleAdrdptBlur = () => {
        setTimeout(() => {
          setShowAutocomplete(false);
        }, 200);
      };
      

    const handleAdrarvBlur = () => {
        setTimeout(() => {
            setShowAutocomplete2(false);
          }, 200);    };

    const handleAdrdptInputChange = async (e) => {
        const searchText = e.target.value;
        onAdrdptChange(searchText);
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&filter=circle:2.2712820580931066,47.064763228046274,600000&format=json&apiKey=${API_KEY}`);
        const data = await response.json();
        setAddressSuggestions(data.results);
    };

    const handleAdrarvInputChange = async (e) => {
        const searchText = e.target.value;
        onAdrarvChange(searchText);
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&filter=circle:2.2712820580931066,47.064763228046274,600000&format=json&apiKey=${API_KEY}`);
        const data = await response.json();
        setAddressSuggestions2(data.results);
    };
    const handledateinputchange =  (e) =>{
    onDateChange(e.target.value)
    }
    const handletimeinputchange =(e) =>{
      onTimeChange(e.target.value)
    }

    return (
        <div>
            <div>
                <div>
                <div className="input-group input-group-sm mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-sm">Adresse départ : </span>
  </div>
                    <input
                        value={adrdpt}
                        required
                        type="text"
                        name={"adrdpt" + instanceId}
                        id="{adrdptId}"
                        onBlur={handleAdrdptBlur}
                        onFocus={handleAdrdptFocus}
                        onChange={handleAdrdptInputChange} 
                        className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                </div>
                <div className='cardautocomplete'>
  {showAutocomplete && addressSuggestions && addressSuggestions.length > 0 && (
    <AutocompleteCard
      addressSuggestions={addressSuggestions}
      onClick={handleAdressClick}
    />
  )}
</div>

            </div>
            <div>
                <div>
                <div className="input-group input-group-sm mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-sm">Adresse arrivée : </span>
  </div>
                    <input
                        value={adrarv}
                        required
                        type="text"
                        name={"adrarv"+instanceId}
                        id="{adrdptId}"
                        onBlur={handleAdrarvBlur}
                        onFocus={handleAdrarvFocus}
                        className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                        onChange={handleAdrarvInputChange} />
                        </div>
                </div>
                <div className='cardautocomplete'>
                {showAutocomplete2&&addressSuggestions2 && addressSuggestions2.length > 0 && (
    <AutocompleteCard
      addressSuggestions={addressSuggestions2}
      onClick={handleAdress2Click}
    />
  )}
                </div>
            </div>
            <div className="vtc-dateheure" >
            <div className="input-group input-group-sm mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-sm">date départ</span>
  </div>
  <input 
    className='form-control' 
    required
    type="date"
    min={todaydate}
    name={"date"+instanceId}
    onChange={handledateinputchange}
    value={date}
  />
</div>
<div className="input-group input-group-sm mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-sm">Heure départ</span>
  </div>
  <input 
      className='form-control' 

            required
            type="time"
            name={"time"+instanceId}
            onChange={handletimeinputchange}
            value ={time}
        />
</div>

   
</div>

        </div>
    );
};

export default UserData;
