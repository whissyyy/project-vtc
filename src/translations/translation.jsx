import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationAR from './ar.json'; // Arabic
import translationFR from './fr.json'; // French
import translationZH from './zh.json'; // Chinese
import translationJA from './ja.json'; // Japanese
import translationES from './es.json'; // Spanish
import translationDE from './de.json'; // German
import translationPT from './pt.json'; // Portuguese
import translationEN from './en.json'; // English

const userLanguage = navigator.language || navigator.userLanguage;
i18n.use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: translationAR,
      },
      fr: {
        translation: translationFR,
      },
      en: {
        translation: translationEN,
      },
      zh: {
        translation: translationZH,
      },
      ja: {
        translation: translationJA,
      },
      es: {
        translation: translationES,
      },
      de: {
        translation: translationDE,
      },
      pt: {
        translation: translationPT,
      },
    },
    lng: navigator.language, // Default language is French
    fallbackLng: 'fr', // Fallback language is French
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
