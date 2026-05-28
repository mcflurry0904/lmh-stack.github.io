import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { ContactItem } from '../../data/resumeData'
import styles from './ClosingSection.module.css'

interface ClosingSectionProps {
  statement: string
  contacts: ContactItem[]
}

function ClosingSection({ statement, contacts }: ClosingSectionProps) {
  const reduceMotion = useReducedMotion()
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('sections.closing')}>
      <motion.p
        className={styles.statement}
        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {statement}
      </motion.p>
      <motion.div
        className={styles.contacts}
        initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
      >
        {contacts.map((item) => (
          <p key={item.label} className={styles.contactItem}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
          </p>
        ))}
      </motion.div>
    </section>
  )
}

export default ClosingSection
