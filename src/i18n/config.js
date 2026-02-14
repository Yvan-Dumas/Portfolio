import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import fr from './fr.json';

//.use(LanguageDetector).
i18n.use(initReactI18next).init({
    resources : {
        en : { translation : en},
        fr : { translation : fr}
    },
    fallbackLng : 'en', // Default language
    interpolation : {
        escapeValue : false
    }
});

export default i18n;