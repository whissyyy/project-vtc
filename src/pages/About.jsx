import React from 'react';
import "./About.css";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const About = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <div className="about">
      <p>
        {t('about.paragraph1')}
      </p>
      <p>
        {t('about.paragraph2')}
      </p>
      <p>
        {t('about.paragraph3')}
      </p>
      <p>
        {t('about.paragraph4')}
      </p>
      <p>
        {t('about.paragraph5')}
      </p>
    </div>
  );
}

export default About;
