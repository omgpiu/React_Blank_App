import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ru from './locales/ru.json'

export type LanguageType = 'en' | 'ru'

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  debug: process.env.NODE_ENV === 'development',
  resources: {
    en: {
      translation: en as Record<string, unknown>,
    },
    ru: {
      translation: ru as Record<string, unknown>,
    },
  },
})

// eslint-disable-next-line import/no-default-export
export default i18n
