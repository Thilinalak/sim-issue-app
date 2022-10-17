import i18n from 'i18next' 
import {initReactI18next}  from 'react-i18next'
import * as RNLocalize from "react-native-localize"
import 'intl-pluralrules'

import english from './english.json'
import sinhala from './sinhala.json'

const languageDetector ={
    type: 'languageDetector',
    async: true,
    detect:(callback) =>{
        return callback(RNLocalize.getLocales()[0].languageCode)
    },
    init: ()=>{},
    cacheUserLanguage: ()=>{}
}

i18n
    .use(languageDetector)
    .use(initReactI18next).init({
    // lng: "en",
    fallbackLng: 'en',
    resources:{
        en: english,
        si: sinhala
    },

    react:{
        useSuspense:false
    },
    interpolation: {
        escapeValue: false 
      }
})

export default i18n