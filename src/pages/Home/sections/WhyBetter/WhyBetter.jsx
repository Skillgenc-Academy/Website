import { Check, X, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './WhyBetter.module.css'

const comparisonData = [
  { 
    feature: 'Batch Size', 
    skillgenc: 'Maximum 5 students', 
    others: 'Often 9–10+ students' 
  },
  { 
    feature: 'Individual Attention', 
    skillgenc: 'Focused attention for every student', 
    others: 'Attention divided among larger groups' 
  },
  { 
    feature: 'Foundation Course', 
    skillgenc: 'Beginner Foundation completed in 4 months', 
    others: 'May take 6–8 months' 
  },
  { 
    feature: 'Learning Method', 
    skillgenc: 'Structured curriculum + revision classes + live examples + daily puzzles', 
    others: 'Often topic-by-topic learning with limited revision' 
  },
  { 
    feature: 'Assignments', 
    skillgenc: 'Practice assignments after every class', 
    others: 'Assignments may be less frequent' 
  },
  { 
    feature: 'Assessment & Progress Report', 
    skillgenc: 'Assessment every 16 classes + detailed progress report covering strengths, weaknesses, gameplay, skills & areas for improvement', 
    others: 'Assessment/reporting may be less frequent or limited' 
  },
  { 
    feature: 'Tournaments & Practical Play', 
    skillgenc: 'Regular tournaments (Monthly once) + live game practice to apply learned skills', 
    others: 'Tournament opportunities and practical exposure may be limited' 
  },
]

export default function WhyBetter() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ Why Skillgenc</div>
          <h2 className="section-title">
            Skillgenc vs <span className="gradient-text">Other Academies</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '16px auto 0' }}>
            We combine professional coaching methodology with modern learning tools to deliver
            results that traditional chess classes simply cannot match.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.comparisonWrapper}>
          <div className={styles.tableCard}>
            
            <div className={styles.tableHeader}>
              <div className={styles.colFeature}>
                <h3>Feature</h3>
              </div>
              <div className={styles.colSkillgenc}>
                <div className={styles.colHighlight}>
                  <ShieldCheck className={styles.icon} size={28} />
                  <h3>Skillgenc</h3>
                  <p className={styles.badge}>Premium Standard</p>
                </div>
              </div>
              <div className={styles.colOthers}>
                <h3>Other Academies</h3>
                <p>Traditional</p>
              </div>
            </div>

            <div className={styles.tableBody}>
              {comparisonData.map((row, idx) => (
                <div key={idx} className={styles.tableRow}>
                  <div className={styles.colFeature}>
                    <span className={styles.featureName}>{row.feature}</span>
                  </div>
                  
                  <div className={styles.colSkillgenc}>
                    <div className={styles.valueSkillgenc}>
                      <Check size={18} className={styles.checkIcon} />
                      <span>{row.skillgenc}</span>
                    </div>
                  </div>
                  
                  <div className={styles.colOthers}>
                    <div className={styles.valueOthers}>
                      <X size={18} className={styles.xIcon} />
                      <span>{row.others}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link to="/book-trial" className="btn btn-gold btn-lg">
            Experience the Difference - Book a Trial
          </Link>
        </div>
      </div>
    </section>
  )
}
