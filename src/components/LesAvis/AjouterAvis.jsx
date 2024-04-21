
import React, { useState,useEffect } from 'react';
import Stars from './Stars';
import './Avis.css';
import { Rating } from '@mui/material';
import Input from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getDatabase,ref, set ,push,get} from "firebase/database";
import firebaseConfig from './Config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyalert = () => toast.warn("You have already commented from this device.");
const notifysuccess = () => toast.success("merci pour votre commentaire");
const AjouterAvis = (onAddReview) => {
  const [hasCommented, setHasCommented] = useState(
    localStorage.getItem('hasCommented') === 'true'
  );
    const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const handleStarsChange = (event, newValue) => {
    setRating(newValue);
  }

  useEffect(() => {
    localStorage.setItem('hasCommented', hasCommented);
  }, [hasCommented]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 16).replace('T', ' '); // yyyy-mm-dd hh:mm
        let test = formattedDate+name;

    if ((hasCommented)&&(localStorage.getItem('id') !== test)) {
      notifyalert();
      return;
    }

    localStorage.setItem('hasCommented', true);
    setHasCommented(true);
    if (!name || !comment || !rating) return;
      const app = initializeApp(firebaseConfig);

    const database = getDatabase(app);
    let  id="";
    if (localStorage.getItem('id') == null) {
       id = formattedDate+name;
       localStorage.setItem('id', id);
       console.log(localStorage.getItem('id'));
    }else{
      id=localStorage.getItem('id');
      localStorage.setItem('id', id);
    console.log(localStorage.getItem('id'));
    }

    set(ref(database, 'Reviews/' + id),{
      name: name,
      comment: comment,
      date: formattedDate,
      rating: rating
    })
    .then(() => {
      notifysuccess();
      setName('');
      setComment('');
      setRating(5);
      onAddReview();
    })
    .catch((error) => {
      console.error("Error saving data: ", error);
    });
  };


  return (
    <div className="vtc-avis" >
    <form  onSubmit={handleSubmit}>
<div className="review-form avisdiv">
      <div className='input-wrapper' style={{width:"100%"}}>
        <input id="nameInput" className="form-control" type="text" placeholder="Votre Nom" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div style={{marginTop:"3%", marginBottom:"3%"}}>
        <textarea id="commentInput" className="form-control" placeholder="Votre Commentaire" value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      

      <Stars value={rating} onChange={handleStarsChange} />
      <button className="btn btn-secondary" type="submit">Soumettre l'avis</button>
      <ToastContainer />
      </div>
    </form>
    </div>
  );
};

export default AjouterAvis;
