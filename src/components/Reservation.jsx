import React, { useState } from 'react';
import "./Reservation.css";
import AutocompleteCard from './autocompletecard';
import Card from 'react-bootstrap/Card';

export const Reservation = () => {
    const [selectedOption, setSelectedOption] = useState('aller');
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const [adrdpt, setadrdpt] = useState("");
    const [adrarv, setadrarv] = useState("");
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const [addressSuggestions2, setAddressSuggestions2] = useState([]);
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [showAutocomplete2, setShowAutocomplete2] = useState(false);
    const API_KEY = 'b89b2faff9b448779ae8b30acd71eb4d';

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);
        console.log(newDate);
    };

    const handleAdressClick = (formattedAddress) => {
        setadrdpt(formattedAddress);
        setShowAutocomplete(false);
    }

    const handleAdress2Click = (formattedAddress) => {
        setadrarv(formattedAddress);
        setShowAutocomplete2(false);
    }

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
        }, 200);
    };

    const handleAdrdptInputChange = async (e) => {
        const searchText = e.target.value;
        setadrdpt(searchText);
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&apiKey=${API_KEY}`);
        const data = await response.json();
        setAddressSuggestions(data.features);
    };

    const handleAdrarvInputChange = async (e) => {
        const searchText = e.target.value;
        setadrarv(searchText);
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&apiKey=${API_KEY}`);
        const data = await response.json();
        setAddressSuggestions2(data.features);
    };

    return (
        <div className="reservation-container">
            <form>
                <div className="container">
                    <Card style={{ width: '18rem' }}>
                        <div>
                            <div>
                                <input
                                    value={adrdpt}
                                    required
                                    type="text"
                                    name="adrdpt"
                                    id="oo"
                                    onBlur={handleAdrdptBlur}
                                    onFocus={handleAdrdptFocus}
                                    placeholder='adresse de depart'
                                    onChange={handleAdrdptInputChange} />
                            </div>
                            <div className='cardautocomplete'>
                                {showAutocomplete && <AutocompleteCard
                                    addressSuggestions={addressSuggestions}
                                    onClick={handleAdressClick} />}
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    value={adrarv}
                                    required
                                    type="text"
                                    name="adrarv"
                                    id="oo"
                                    onBlur={handleAdrarvBlur}
                                    onFocus={handleAdrarvFocus}
                                    placeholder='adresse de arrive'
                                    onChange={handleAdrarvInputChange} />
                            </div>
                            <div className='cardautocomplete'>
                                {showAutocomplete2 && <AutocompleteCard
                                    addressSuggestions={addressSuggestions2}
                                    onClick={handleAdress2Click} />}
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                required
                                type="date"
                                min={today}
                                name="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                        <div className='radio-button-container'>
                        <input name='radio-button-label'
                                    type="radio"
                                    value="aller"
                                    checked={selectedOption === 'aller'}
                                    onChange={handleOptionChange}
                                />
                            <label>Aller</label>
                            <input name='radio-button-label'
                                    type="radio"
                                    value="aller/retour"
                                    checked={selectedOption === 'aller/retour'}
                                    onChange={handleOptionChange}
                                />
                            <label> Aller/Retour</label>
                               
                        </div>
                    </Card>
                </div>
            </form>
        </div>
    );
};

export default Reservation;
