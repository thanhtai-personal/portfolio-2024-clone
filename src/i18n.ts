import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import vi from "./lang/vi";
import en from "./lang/en";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
});

export default i18n;