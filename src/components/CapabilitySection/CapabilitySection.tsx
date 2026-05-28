import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { CapabilityItem } from '../../data/resumeData'
import Tag from '../Tag/Tag'
import styles from './CapabilitySection.module.css'

interface CapabilitySectionProps {
  items: CapabilityItem[]
}

function CapabilitySection({ items }: CapabilitySectionProps) {
  const reduceMotion = useReducedMotion()
  const { t } = useTranslation()

  return (
    <section className={styles.section} aria-label={t('sections.capability')}>
      <h2 className={styles.sectionTitle}>{t('sections.capability')}</h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.card}
            initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: 'easeOut' }}
          >
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <Tag key={`${item.title}-${tag}`} label={tag} />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default CapabilitySection
