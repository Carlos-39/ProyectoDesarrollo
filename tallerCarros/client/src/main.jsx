import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from '../i18n/Español/es.json'
import en from '../i18n/Inglés/en.json'
import pt from '../i18n/Portugues/pt.json'






//idioma por defecto "es = español; en = ingles
i18next.use(initReactI18next).init({lng: "pt" , 
interpolation: {
  escapeValue:false,
}, 
resources: {
  es: {
    translation: es,
  },
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  }
}

}) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
