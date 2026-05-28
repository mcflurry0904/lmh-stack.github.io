import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { IdentityItem } from '../../data/resumeData'
import styles from './IdentitySection.module.css'

interface IdentitySectionProps {
  items: IdentityItem[]
}

function IdentitySection({ items }: IdentitySectionProps) {
  const reduceMotion = useReducedMotion()
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('sections.identity')}>
      <h2 className={styles.sectionTitle}>{t('sections.identity')}</h2>
      <div className={styles.list}>
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.item}
            initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: index * 0.07, ease: 'easeOut' }}
          >
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default IdentitySection
