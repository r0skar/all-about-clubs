import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        PAGE_NOT_FOUND: 'Page not found',
        NO_DATA: 'Failed to fetch data',
        MILL_EURO: 'Millionen Euro',
        CLUB_DETAILS: {
          part1: 'Der Club <strong>{{name}}</strong> aus {{country}} hat einen Wert von {{value}} Millionen Euro.',
          part2: '<strong>{{name}}</strong> konnte bislang {{european_titles}} Siege auf europäischer Ebene erreichen.'
        }
      }
    }
  },
  lng: 'de',
  fallbackLng: 'de',
  interpolation: {
    escapeValue: false
  }
})
