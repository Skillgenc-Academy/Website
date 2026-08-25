import { Check, X, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './OnlineVsOffline.module.css'

const comparisonData = [
  { feature: 'Convenience', online: 5, offline: 3 },
  { feature: 'Personalization', online: 5, offline: 3 },
  { feature: 'Coach Accessibility', online: 5, offline: 3 },
  { feature: 'Game Analysis', online: 5, offline: 3 },
  { feature: 'Progress Tracking', online: 5, offline: 2 },
  { feature: 'Flexibility', online: 5, offline: 2 },
  { feature: 'Technology & Tools', online: 5, offline: 3 },
  { feature: 'Travel Required', online: 'No', offline: 'Yes' },
]

function StarRating({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < count ? '#F9D024' : '#E5E7EB'}
          stroke={i < count ? '#F9D024' : '#E5E7EB'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function OnlineVsOffline() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">✦ The Smart Choice</div>
          <h2 className="section-title">
            Why Choose <span className="gradient-text">Online Chess Coaching?</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '16px auto 0' }}>
            It's not just about learning chess online. It's about creating a smarter, more personalized and measurable learning experience for your child.
          </p>
          
          <div className={styles.pillList}>
            <span>Expert Coaching</span>
            <span className={styles.dot}>•</span>
            <span>Personalized Learning</span>
            <span className={styles.dot}>•</span>
            <span>Game Analysis</span>
            <span className={styles.dot}>•</span>
            <span>Regular Assessments</span>
            <span className={styles.dot}>•</span>
            <span>Progress Tracking</span>
          </div>
        </div>

        <div className={styles.comparisonWrapper}>
          <div className={styles.tableCard}>
            
            <div className={styles.tableHeader}>
              <div className={styles.colFeature}></div>
              <div className={styles.colOnline}>
                <div className={styles.colHighlight}>
                  <ShieldCheck className={styles.icon} size={28} />
                  <h3>Online Coaching</h3>
                  <p className={styles.badge}>Skillgenc Method</p>
                </div>
              </div>
              <div className={styles.colOffline}>
                <h3>Offline Classes</h3>
                <p>Traditional</p>
              </div>
            </div>

            <div className={styles.tableBody}>
              {comparisonData.map((row, idx) => (
                <div key={idx} className={styles.tableRow}>
                  <div className={styles.colFeature}>
                    <span className={styles.featureName}>{row.feature}</span>
                  </div>
                  
                  <div className={styles.colOnline}>
                    {typeof row.online === 'number' ? (
                      <StarRating count={row.online} />
                    ) : (
                      <div className={styles.boolValue}>
                        {row.online === 'No' ? (
                          <span className={styles.noTravel}><Check size={18} /> No</span>
                        ) : (
                          row.online
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className={styles.colOffline}>
                    {typeof row.offline === 'number' ? (
                      <div className={styles.fadedStars}>
                        <StarRating count={row.offline} />
                      </div>
                    ) : (
                      <div className={styles.boolValueOffline}>
                        {row.offline === 'Yes' ? (
                          <span className={styles.yesTravel}><X size={18} /> Yes</span>
                        ) : (
                          row.offline
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        <div className={styles.bottomLine}>
          <h3 className={styles.bottomTitle}>Learn Better. Practice Smarter. Progress Faster.</h3>
          <p className={styles.bottomText}>
            A structured online chess program that combines expert coaching, technology, assessment, and continuous feedback—all from wherever your child is.
          </p>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/book-trial" className="btn btn-gold btn-lg">
              Book a Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
