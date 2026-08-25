import { Link } from 'react-router-dom'
import styles from './WhyBetter.module.css'

const features = [
  {
    icon: '♟',
    piece: 'Expert Coaches',
    title: 'Expert Coaches',
    description:
      'Learn from FIDE-rated coaches and state champions with proven track records of training tournament-winning students.',
    accent: '#0153D9',
  },
  {
    icon: '♜',
    piece: 'Structured Curriculum',
    title: 'Structured Curriculum',
    description:
      'Progress through 5 carefully designed levels — from beginner fundamentals to FIDE-rated competitive preparation.',
    accent: '#0153D9',
  },
  {
    icon: '♝',
    piece: 'Personalized Learning',
    title: 'Personalized Learning',
    description:
      'Every student receives training adapted to their unique ability, pace, and goals — not a one-size-fits-all approach.',
    accent: '#0153D9',
  },
  {
    icon: '♛',
    piece: 'Tournament Prep',
    title: 'Tournament Preparation',
    description:
      'We prepare students for inter-school, district, state, and FIDE-rated tournaments with dedicated competitive coaching.',
    accent: '#F9D024',
  },
  {
    icon: '♞',
    piece: 'Practice & Analysis',
    title: 'Practice & Analysis',
    description:
      'Improve rapidly through targeted puzzle training, game reviews, and deep positional and tactical analysis sessions.',
    accent: '#F9D024',
  },
  {
    icon: '♚',
    piece: 'Progress Tracking',
    title: 'Progress Tracking',
    description:
      'Detailed performance reports help parents and students understand growth, identify weaknesses, and celebrate wins.',
    accent: '#F9D024',
  },
]

export default function WhyBetter() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ Why Skillgenc</div>
          <h2 className="section-title">
            Why We Are <span className="gradient-text">Better Than Others</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            We combine professional coaching methodology with modern learning tools to deliver
            results that traditional chess classes simply cannot match.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.cardGlow} style={{ '--accent': f.accent }} />
              <div className={styles.iconWrap} style={{ '--accent': f.accent }}>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
              <div className={styles.cardLine} style={{ '--accent': f.accent }} />
            </div>
          ))}
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
