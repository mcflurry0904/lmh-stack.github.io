import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGE_STORAGE_KEY, supportedLanguages } from './i18n'
import './App.css'

interface Metric {
  value: string
  label: string
}

interface Project {
  title: string
  meta: string
  description: string
}

interface SkillGroup {
  title: string
  description: string
  tags: string[]
}

interface Experience {
  company: string
  period: string
  summary: string
}

interface Contact {
  label: string
  value: string
  href?: string
}

interface ResumeContent {
  brand: string
  menuLabel: string
  closeMenuLabel: string
  nav: Array<{ id: string; label: string }>
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    intro: string
    tags: string[]
    metrics: Metric[]
  }
  projectsTitle: string
  projects: Project[]
  skillsTitle: string
  skills: SkillGroup[]
  experienceTitle: string
  experiences: Experience[]
  contactTitle: string
  contactStatement: string
  contacts: Contact[]
}

function App() {
  const { t, i18n } = useTranslation()
  const content = t('webResume', { returnObjects: true }) as ResumeContent
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const language = i18n.resolvedLanguage ?? i18n.language
    document.documentElement.lang = language
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [i18n.language, i18n.resolvedLanguage])

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const currentLanguage = i18n.resolvedLanguage ?? i18n.language

  return (
    <div className="appShell">
      <header className="siteHeader">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          {content.brand}
        </a>
        <button
          className="menuButton"
          type="button"
          aria-label={menuOpen ? content.closeMenuLabel : content.menuLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={`siteNav ${menuOpen ? 'siteNavOpen' : ''}`} aria-label="Primary">
          {content.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="languageSwitcher" aria-label={t('ui.language')}>
            {supportedLanguages.map((language) => (
              <button
                key={language}
                type="button"
                className={currentLanguage === language ? 'languageButton languageButtonActive' : 'languageButton'}
                onClick={() => {
                  setMenuOpen(false)
                  void i18n.changeLanguage(language)
                }}
              >
                {language === 'zh-CN' ? t('ui.lang.zhCN') : t('ui.lang.en')}
              </button>
            ))}
          </div>
        </nav>
        <div className="scrollProgress" aria-hidden="true">
          <span style={{ transform: `scaleX(${scrollProgress})` }} />
        </div>
      </header>

      <main>
        <section id="top" className="heroSection">
          <div className="heroContent">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="subtitle">{content.hero.subtitle}</p>
            <p className="intro">{content.hero.intro}</p>
            <div className="tagRow">
              {content.hero.tags.map((tag, index) => (
                <span key={tag} className={index === 0 ? 'tag tagInverted' : 'tag'}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <aside className="metricPanel" aria-label={content.skillsTitle}>
            {content.hero.metrics.map((metric) => (
              <div key={metric.label} className="metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </aside>
        </section>

        <section id="projects" className="contentSection">
          <div className="sectionHeader">
            <span>01</span>
            <h2>{content.projectsTitle}</h2>
          </div>
          <div className="projectGrid">
            {content.projects.map((project) => (
              <article key={project.title} className="projectCard">
                <p>{project.meta}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="contentSection">
          <div className="sectionHeader">
            <span>02</span>
            <h2>{content.skillsTitle}</h2>
          </div>
          <div className="skillGrid">
            {content.skills.map((skill) => (
              <article key={skill.title} className="skillBlock">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="tagRow compact">
                  {skill.tags.map((tag) => (
                    <span key={`${skill.title}-${tag}`} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="contentSection">
          <div className="sectionHeader">
            <span>03</span>
            <h2>{content.experienceTitle}</h2>
          </div>
          <div className="experienceList">
            {content.experiences.map((item) => (
              <article key={`${item.company}-${item.period}`} className="experienceItem">
                <time>{item.period}</time>
                <div>
                  <h3>{item.company}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contactSection">
          <div>
            <p className="eyebrow">{content.contactTitle}</p>
            <h2>{content.contactStatement}</h2>
          </div>
          <div className="contactList">
            {content.contacts.map((contact) => (
              <p key={contact.label}>
                <span>{contact.label}</span>
                {contact.href ? <a href={contact.href}>{contact.value}</a> : <strong>{contact.value}</strong>}
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
