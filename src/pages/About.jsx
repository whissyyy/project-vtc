import React from 'react';
import { Helmet } from 'react-helmet';
import "./About.css";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import ContactButtons from '../components/Reservation/ReservationB';
const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <Helmet>
        <title>Ultimate Drivers - services de transport sur la Côte d’Azur</title>
        <meta name="description" content="Ultimate Drivers fournit des services de transport 24h/24 et 7j/7 sur la Côte d’Azur, y compris Cannes, Antibes, Nice, Monaco et Saint Tropez. Nous proposons une gamme de véhicules et des chauffeurs professionnels anglophones." />
        <meta name="keywords" content="Ultimate Drivers, Côte d’Azur, services de transport, transfert aéroport, chauffeur privé, van, SUV, circuits touristiques, voyages en Europe,taxi,vtc" />
      </Helmet>
      <div>
      </div>
      <br/>
      <h3>{t('about.servicesTitle')}</h3>
      <p>
        {t('about.paragraph1')}
      </p>
      <h3>{t('about.flexibilityTitle')}</h3>

      <p>
        {t('about.paragraph2')}
      </p>
      <h3>{t('about.airportTransfersTitle')}</h3>

      <p>
        {t('about.paragraph3')}
      </p>
      <h3>{t('about.toursTitle')}</h3>

      <p>
        {t('about.paragraph4')}
      </p>
      <h3>{t('about.contactTitle')}</h3>
      <p>
        {t('about.paragraph5')}
      </p>
    </div>
  );
}

export default About;
