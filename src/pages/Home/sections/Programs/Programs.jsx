import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { programs } from '../../../../data/programs'
import styles from './Programs.module.css'

export default function Programs() {
  const [active, setActive] = useState(0)
  const prog = programs[active]

  return (
    <section id="programs" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ Programs</div>
          <h2 className="section-title">
            Your <span className="gradient-text">Chess Journey</span> Starts Here
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Five structured levels designed to take any student from absolute beginner to
            FIDE-rated competitive player.
          </p>
          <div className="divider" />
        </div>

        {/* Tab Selector */}
        <div className={styles.tabs}>
          {programs.map((p, i) => (
            <button
              key={p.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''} ${p.premium ? styles.tabPremium : ''}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabPiece}>{p.piece}</span>
              <span className={styles.tabLabel}>{p.level}</span>
              {p.premium && <span className={styles.premiumBadge}>ELITE</span>}
            </button>
          ))}
        </div>

        {/* Active Program Card */}
        <div className={`${styles.card} ${prog.premium ? styles.cardPremium : ''}`}>
          <div className={styles.cardLeft}>
            <div className={styles.pieceDisplay}>
              <span className={styles.bigPiece}>{prog.piece}</span>
              <div className={styles.pieceGlow} />
            </div>
            <div>
              <div className={styles.pieceName}>{prog.pieceName} Level</div>
              <h3 className={styles.levelTitle}>{prog.level}</h3>
              <p className={styles.tagline}>"{prog.tagline}"</p>
            </div>

            {/* Metrics */}
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>{prog.duration}</span>
                <span className={styles.metricLabel}>Duration</span>
              </div>
              <div className={styles.metricDiv} />
              <div className={styles.metric}>
                <span className={styles.metricValue}>{prog.modules}</span>
                <span className={styles.metricLabel}>Modules</span>
              </div>
              <div className={styles.metricDiv} />
              <div className={styles.metric}>
                <span className={styles.metricValue}>{prog.sessions}</span>
                <span className={styles.metricLabel}>Sessions</span>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctas}>
              <Link to="/pricing" className="btn btn-outline-blue">
                View Curriculum
              </Link>
              <Link to="/book-trial" className={`btn ${prog.premium ? 'btn-gold' : 'btn-primary'}`}>
                Book Free Trial
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right: Features */}
          <div className={styles.cardRight}>
            <h4 className={styles.featuresTitle}>What You'll Learn</h4>
            <ul className={styles.featureList}>
              {prog.features.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Card glow */}
          {prog.premium && <div className={styles.premiumGlow} />}
        </div>

        {/* Program nav dots */}
        <div className={styles.dots}>
          {programs.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Program ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
