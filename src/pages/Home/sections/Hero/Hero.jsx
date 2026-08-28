import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'
import CountUp from '../../../../components/CountUp/CountUp'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.bg}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridOverlay} />
      </div>

      <div className="container">
        <div className={styles.inner}>
          {/* Left: Content */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              India's Premier Chess Academy
            </div>

            <h1 className={`hero-title ${styles.title}`}>
              Master Chess. <span className="gradient-text">Build Better</span> Thinkers.
            </h1>

            <p className={styles.subtitle}>
              Skillgenc Chess Academy combines expert coaching, structured curriculum, and
              competitive preparation to help students master chess — and develop the strategic
              thinking, focus, and confidence that last a lifetime.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}><CountUp end={5000} suffix="+" /></span>
                <span className={styles.statLabel}>Students</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}><CountUp end={50} suffix="+" /></span>
                <span className={styles.statLabel}>Expert Coaches</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}><CountUp end={3} /></span>
                <span className={styles.statLabel}>Cities</span>
              </div>
            </div>

            <div className={styles.ctas}>
              <Link to="/book-trial" className="btn btn-gold btn-lg">
                Book a Free Trial
                <ArrowRight size={18} />
              </Link>
              <Link to="/#programs" className="btn btn-outline btn-lg">
                Explore Programs
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
