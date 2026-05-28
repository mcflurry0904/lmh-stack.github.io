import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import type { TimelineItem } from '../../data/resumeData'
import Tag from '../Tag/Tag'
import styles from './ExperienceTimeline.module.css'

interface ExperienceTimelineProps {
  items: TimelineItem[]
}

interface TimelineEntryProps {
  item: TimelineItem
  index: number
}

function TimelineEntry({ item, index }: TimelineEntryProps) {
  const ref = useRef<HTMLElement | null>(null)
  const reduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: '-18% 0px -18% 0px', amount: 0.35 })

  return (
    <motion.article
      ref={ref}
      className={styles.entry}
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
    >
      <div className={styles.meta}>{item.period}</div>
      <span className={`${styles.node} ${isInView ? styles.nodeActive : ''}`} aria-hidden="true" />
      <div className={styles.content}>
        <h3 className={styles.company}>{item.company}</h3>
        <p className={styles.summary}>{item.summary}</p>
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <Tag key={`${item.company}-${tag}`} label={tag} />
          ))}
        </div>
        <ul className={styles.achievements}>
          {item.achievements.map((achievement) => (
            <li key={`${item.company}-${achievement}`}>{achievement}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('sections.experienceTimeline')}>
      <h2 className={styles.sectionTitle}>{t('sections.experienceTimeline')}</h2>
      <div className={styles.list}>
        {items.map((item, index) => (
          <TimelineEntry key={`${item.company}-${item.period}`} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceTimeline
