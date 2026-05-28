import type { TFunction } from 'i18next'

export type ResumeTag = string

export interface OpeningContent {
  role: string
  headline: string
  intro: string
  hint: string
}

export interface IdentityItem {
  title: string
  description: string
}

export interface CapabilityItem {
  title: string
  description: string
  tags: ResumeTag[]
}

export interface TimelineItem {
  company: string
  period: string
  summary: string
  tags: ResumeTag[]
  achievements: string[]
}

export interface ContactItem {
  label: string
  value: string
}

export interface ResumeData {
  opening: OpeningContent
  identity: IdentityItem[]
  capabilities: CapabilityItem[]
  experiences: TimelineItem[]
  closing: {
    statement: string
    contacts: ContactItem[]
  }
}

interface TimelineTranslationItem extends Omit<TimelineItem, 'company'> {
  company?: string
}

const COMPANY_NAMES: string[] = ['日本某系统开发公司', '友邦保险项目', '创意信息股份有限公司', '独立项目开发', '宏利金融']

export function getResumeData(t: TFunction<'translation'>): ResumeData {
  const translatedExperiences = t('resume.experiences', { returnObjects: true }) as TimelineTranslationItem[]
  const experiences: TimelineItem[] = translatedExperiences.map((item, index) => ({
    ...item,
    company: COMPANY_NAMES[index] ?? item.company ?? '',
  }))

  return {
    opening: {
      role: t('resume.opening.role'),
      headline: t('resume.opening.headline'),
      intro: t('resume.opening.intro'),
      hint: t('resume.opening.hint'),
    },
    identity: t('resume.identity', { returnObjects: true }) as IdentityItem[],
    capabilities: t('resume.capabilities', { returnObjects: true }) as CapabilityItem[],
    experiences,
    closing: {
      statement: t('resume.closing.statement'),
      contacts: t('resume.closing.contacts', { returnObjects: true }) as ContactItem[],
    },
  }
}
