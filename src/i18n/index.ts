import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from './resources'

export const LANGUAGE_STORAGE_KEY = 'app-language'
export const supportedLanguages = ['en', 'zh-CN'] as const

function normalizeLanguage(language: string | null | undefined): (typeof supportedLanguages)[number] {
  if (!language) {
    return 'zh-CN'
  }

  return language.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en'
}

const initialLanguage = normalizeLanguage(
  typeof window === 'undefined' ? 'zh-CN' : localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? navigator.language,
)

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'zh-CN',
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
