import React, { useState } from 'react';
import "./Reservation.css";
import Card from 'react-bootstrap/Card';
import UserData from './UserData';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, } from '@fortawesome/free-solid-svg-icons';
import "./mrc.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { useTranslation } from 'react-i18next'; // Import useTranslation hook




export const Reservation = () => {
    const form = useRef();
    const { t } = useTranslation(); // Initialize the useTranslation hook

    const [value, setValue] = useState();
    const today = new Date();
    const formattedDate = new Date(today).toISOString().split('T')[0] // yyyy-mm-dd
    const [selectedOption, setSelectedOption] = useState('aller');
    const [userData1, setUserData1] = useState({ adrdpt1: '', adrarv1: '',date1:formattedDate,time1:'00:00' });
    const [userData2, setUserData2] = useState({ adrdpt2: '', adrarv2: '',date2:formattedDate , time2:'00:00'});
    const [fullName, setFullName] = useState({ firstName: '', lastName: '' });
    const [phone, setPhone] = useState('');

    const notifysuccess = () => {
      toast.success(t('notification.not-succresv'), { position: "bottom-center" });
    };

    const handleNameChange = (event) => {
        const { name, value } = event.target;
        setFullName(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      const resetForm = () => {
        setPhone('');
        setFullName({
          firstName:"",
          lastName:""
        })
        setUserData2({
          adrdpt2: "",
          adrarv2: "",
          date2: {formattedDate},
          time2: '00:00'
        });
        setUserData1({
          adrdpt1: "",
          adrarv1: "",
          date1: {formattedDate},
          time1: '00:00'
        });
      };
      
      

    function sendanemail (tmpkey,formdata){
        emailjs
        .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,tmpkey, formdata, {
          publicKey: process.env.REACT_APP_EMAILJS_USER_ID,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            notifysuccess();
            resetForm();

          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleAdrdptChange = (value, instanceId) => {
        if (instanceId === 1) {
            setUserData1(prevState => ({ ...prevState, adrdpt1: value }));
        } else if (instanceId === 2) {
            setUserData2(prevState => ({ ...prevState, adrdpt2: value }));
        }
    };
    const handletimechange  = (value, instanceId) => {
      if (instanceId === 1) {
          setUserData1(prevState => ({ ...prevState, time1: value }));
      } else if (instanceId === 2) {
          setUserData2(prevState => ({ ...prevState, time2: value }));
      }
    }

    const handleAdrarvChange = (value, instanceId) => {
        if (instanceId === 1) {
            setUserData1(prevState => ({ ...prevState, adrarv1: value }));
        } else if (instanceId === 2) {
            setUserData2(prevState => ({ ...prevState, adrarv2: value }));
        }
    };
    const handleDateChange = (value, instanceId) => {
        if (instanceId === 1) {
            setUserData1(prevState => ({ ...prevState, date1: value }));
        } else if (instanceId === 2) {
            setUserData2(prevState => ({ ...prevState, date2: value }));
        }
    };
      
  
    const sendEmail = (e) => {
        e.preventDefault();
        if (selectedOption === "aller"){
            sendanemail(process.env.REACT_APP_EMAILJS_TEMPLATE_ID,form.current) 

      }else{
        console.log(form.current);
        sendanemail(process.env.REACT_APP_EMAILJS_TEMPLATE_ID2,form.current)

      }
    }
    return (
        
        <div className="reservation-container ">
      
            <div className='bgt'>
            <h1 className='ch12' style={{paddingTop:"1%"}}>{t('reservation.heading')}</h1>

                <div className="row "  >
                <div className="col pstyle  " style={{paddingTop:"1%"}}>
                    <div className='res'>
                    <div id="vtc-reservation-nice" style={{paddingBottom:"2%",marginTop:"2%"}}>
                    <a style={{ fontSize: "28px" }} className="btn btn-outline-dark btn-block" href="tel:+330769575319">
    <FontAwesomeIcon icon={faPhone} size="lg" />
    +33 7.695.753.19
</a>



</div>
<a style={{ fontSize: "28px" }} className="btn btn-outline-dark btn-block" href="tel:0769575319" >
    <FontAwesomeIcon icon={faPhone} size="lg" />   07.695.753.19
</a>
<br/>
<a style={{marginTop:"2%"}}className="btn btn-success btn-block" href="https://wa.me/+330769575319" >
WhatsApp<FontAwesomeIcon icon={faWhatsapp} size="lg" style={{width:"120" ,marginRight: "3%", height: '20px' }} />
</a>
         
          </div> 
</div>
                <div className="col" style={{paddingTop:"1%", minWidth:"350px"}} >

                <div className='bgimage'>
                <form  ref={form} onSubmit={sendEmail}>

                <Card  className="shadow p-4 mb-2 rounded transparent-card" >
  <div className="containerform">
    <h3 className="text-center mb-4"></h3>
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">{t('reservation.nom')}</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={fullName.firstName}
            onChange={handleNameChange}
            required
          />
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="input-group input-group-sm">
          <div className="input-group-prepend">
            <span className="input-group-text">{t('reservation.prenom')}</span>
          </div>
          <input
          required
            type="text"
            className="form-control"
            name="lastName"
            value={fullName.lastName}
            onChange={handleNameChange}
          />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-3">
        <PhoneInput
          defaultCountry="fr"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputProps={{ className: "form-control" }}
          name="telephone"
        />
      </div>
    </div>
    <UserData
      instanceId={1}
      adrdpt={userData1.adrdpt1}
      adrarv={userData1.adrarv1}
      date={userData1.date1}
      onAdrdptChange={value => handleAdrdptChange(value, 1)}
      onAdrarvChange={value => handleAdrarvChange(value, 1)}
      onDateChange={value => handleDateChange(value, 1)}
      onTimeChange={value => handletimechange(value,1)}
      todaydate={formattedDate}
      time={userData1.time1}

    />
    {selectedOption === 'retour' && (
      <div>
        <p style={{ color: "white", fontSize: "24px" ,fontWeight:"bold" }}> {t('reservation.retour')}</p>
      <UserData
        instanceId={2}
        adrdpt={userData2.adrdpt2}
        adrarv={userData2.adrarv2}
        date={userData2.date2}
        time={userData2.time2}

        todaydate={formattedDate}
        onAdrdptChange={value => handleAdrdptChange(value, 2)}
        onAdrarvChange={value => handleAdrarvChange(value, 2)}
        onDateChange={value => handleDateChange(value, 2)}
        onTimeChange={value => handletimechange(value,2)}
      />
            </div>

    )}


    <div className='radio-button-container'>
    <input 
    type="radio"
    className="btn-check"
    name="radio-button-label"
    id="option1"
    autocomplete="off"
    value="aller"
    checked={selectedOption === 'aller'}
    onChange={handleOptionChange}
/>
<label className="btt" htmlFor="option1">{t('reservation.al')}</label>

<input
    type="radio"
    className="btn-check"
    name="radio-button-label"
    id="option2"
    value="retour"
    checked={selectedOption === 'retour'}
    onChange={handleOptionChange}
/>
<label className="btt" htmlFor="option2"> {t('reservation.alr')}</label>
    </div>
    <div className="text-center mt-4">
    <button style={{marginBottom:"5%"}} className="btn btn-success btn-block" type="submit">{t('reservation.submitButton')}</button>
    </div>
  </div>
</Card>
</form>
</div>


                
                    </div>
    
               </div>
            
            
            </div>
        </div>
    );
};

export default Reservation;
