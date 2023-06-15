import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/en.json'
import ru from "./ru/ru.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  lng: 'ru',
  interpolation: {
    escapeValue: false
  }
});

export default i18next