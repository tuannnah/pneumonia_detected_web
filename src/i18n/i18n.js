import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from  'i18next-http-backend'

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  detection:{
    order: ['cookie', 'htmlTag',  'localStorage',  'path', 'subdomain'],
  },
  backend:{
    loadPath: '/assets/locales/{{lng}}/translation.json'
  },
  react:{useSuspense:false},
});

