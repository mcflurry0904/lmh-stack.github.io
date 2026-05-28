import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { OpeningContent } from '../../data/resumeData'
import styles from './OpeningSection.module.css'

interface OpeningSectionProps {
  content: OpeningContent
}

function OpeningSection({ content }: OpeningSectionProps) {
  const reduceMotion = useReducedMotion()
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('sections.opening')}>
      <motion.p
        className={styles.role}
        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        {content.role}
      </motion.p>
      <motion.h1
        className={styles.headline}
        initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.75 }}
        transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
      >
        {content.headline}
      </motion.h1>
      <motion.p
        className={styles.intro}
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
      >
        {content.intro}
      </motion.p>
      <motion.p
        className={styles.hint}
        initial={reduceMotion ? undefined : { opacity: 0 }}
        whileInView={reduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {content.hint}
      </motion.p>
    </section>
  )
}

export default OpeningSection
