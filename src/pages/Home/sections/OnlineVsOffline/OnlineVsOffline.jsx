import { Globe, Building2, Star, Check, Minus } from 'lucide-react'
import styles from './OnlineVsOffline.module.css'

const comparisonData = [
  { label: 'Convenience', online: 5, offline: 3 },
  { label: 'Personalization', online: 5, offline: 3 },
  { label: 'Coach Accessibility', online: 5, offline: 3 },
  { label: 'Game Analysis', online: 5, offline: 3 },
  { label: 'Progress Tracking', online: 5, offline: 2 },
  { label: 'Flexibility', online: 5, offline: 2 },
  { label: 'Technology & Tools', online: 5, offline: 3 },
  { label: 'Travel Required', online: 'No', offline: 'Yes' },
]

function StarRating({ count }) {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? '#FFB800' : 'transparent'}
          color={i < count ? '#FFB800' : 'rgba(0,0,0,0.1)'}
          className={styles.starIcon}
        />
      ))}
    </div>
  )
}

export default function OnlineVsOffline() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ The Future of Learning</div>
          <h2 className="section-title">
            Online vs Offline <span className="gradient-text">Chess Classes</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            It's not just about learning chess online. It's about creating a smarter, more personalized and measurable learning experience for your child.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.comparisonTable}>
          <div className={styles.row}>
            <div className={styles.labelCol}></div>
            <div className={`${styles.valCol} ${styles.valOnlineHeader}`}>
              <Globe size={24} className={styles.headerIcon} />
              <h3>ONLINE CHESS COACHING</h3>
            </div>
            <div className={`${styles.valCol} ${styles.valOfflineHeader}`}>
              <Building2 size={24} className={styles.headerIcon} />
              <h3>OFFLINE CHESS CLASSES</h3>
            </div>
          </div>

          {comparisonData.map((item, idx) => (
            <div key={idx} className={styles.row}>
              <div className={styles.labelCol}>
                <span className={styles.labelText}>{item.label}</span>
              </div>
              <div className={`${styles.valCol} ${styles.valOnline}`}>
                {typeof item.online === 'number' ? (
                  <StarRating count={item.online} />
                ) : (
                  <span className={styles.textHighlight}>{item.online}</span>
                )}
              </div>
              <div className={`${styles.valCol} ${styles.valOffline}`}>
                {typeof item.offline === 'number' ? (
                  <StarRating count={item.offline} />
                ) : (
                  <span className={styles.textDim}>{item.offline}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomLine}>
          <div className={styles.bottomLineInner}>
            <h3>Learn Better. Practice Smarter. Progress Faster.</h3>
            <p>
              A structured online chess program that combines expert coaching, technology, assessment, and continuous feedback—all from wherever your child is.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
