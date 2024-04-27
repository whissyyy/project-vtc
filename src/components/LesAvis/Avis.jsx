import React from 'react';
import './Avis.css';
import { AviStars } from './Stars';
import AjouterAvis from './AjouterAvis'; // Import the AjouterAvis component
import { useState,useEffect } from 'react';
import firebaseConfig from './Config'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref,get } from "firebase/database";
import { useTranslation } from 'react-i18next';
import i18n from '../../translations/translation';

const Avis = () => {
  const [reviews, setReviews] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    get(ref(database, 'Reviews/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const reviewsData = snapshot.val();
          const reviewsArray = reviewsData ? Object.values(reviewsData) : [];
          setReviews(reviewsArray.reverse()); // Reversing the array before setting it
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [reviews]);

 
  const addReview = () => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    get(ref(database, 'Reviews/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const reviewsData = snapshot.val();
          const reviewsArray = reviewsData ? Object.values(reviewsData) : [];
          setReviews(reviewsArray.reverse()); // Reversing the array before setting it
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  
  return (
    <section className="reviews-section">
<h2 style={{fontSize:"32px"}} className="section-heading ch1">{t('avis.clientReviews')}</h2>
      <div className="add-review-section">
        <AjouterAvis onAddReview={addReview} />
      </div>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h3>{review.name}</h3>
          <p>{review.comment}</p>
          <p>{t('avis.rating')} :  {review.rating}</p>
          <AviStars nbstarts={review.rating} />
          <p>{t('avis.date')} : {review.date}</p>
        </div>
      ))}
    </section>
  );
};

export default Avis;
