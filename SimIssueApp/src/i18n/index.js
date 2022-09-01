import i18n from 'i18next' 
import {initReactI18next}  from 'react-i18next'
import 'intl-pluralrules'

import english from './english.json'
import sinhala from './sinhala.json'

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: 'en',
    resources:{
        en: english,
        sin:sinhala
    },
    react:{
        useSuspense:false
    },
    interpolation: {
        escapeValue: false 
      }
})

export default i18n