import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import OpeningSection from './components/OpeningSection/OpeningSection'
import IdentitySection from './components/IdentitySection/IdentitySection'
import CapabilitySection from './components/CapabilitySection/CapabilitySection'
import ExperienceTimeline from './components/ExperienceTimeline/ExperienceTimeline'
import ClosingSection from './components/ClosingSection/ClosingSection'
import { getResumeData } from './data/resumeData'
import { LANGUAGE_STORAGE_KEY, supportedLanguages } from './i18n'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const resumeData = getResumeData(t)

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language
    localStorage.setItem(LANGUAGE_STORAGE_KEY, i18n.resolvedLanguage ?? i18n.language)
  }, [i18n.language, i18n.resolvedLanguage])

  return (
    <div className="appShell">
      <main className="resumePage">
        <div className="languageSwitcher" aria-label={t('ui.language')}>
          {supportedLanguages.map((language) => {
            const isActive = (i18n.resolvedLanguage ?? i18n.language) === language

            return (
              <button
                key={language}
                type="button"
                className={`languageButton ${isActive ? 'languageButtonActive' : ''}`}
                onClick={() => {
                  void i18n.changeLanguage(language)
                }}
              >
                {language === 'zh-CN' ? t('ui.lang.zhCN') : t('ui.lang.en')}
              </button>
            )
          })}
        </div>
        <OpeningSection content={resumeData.opening} />
        <IdentitySection items={resumeData.identity} />
        <CapabilitySection items={resumeData.capabilities} />
        <ExperienceTimeline items={resumeData.experiences} />
        <ClosingSection statement={resumeData.closing.statement} contacts={resumeData.closing.contacts} />
      </main>
    </div>
  )
}

export default App
