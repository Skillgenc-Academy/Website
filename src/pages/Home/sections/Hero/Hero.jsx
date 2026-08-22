import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Suspense, lazy } from 'react'
import styles from './Hero.module.css'

const ChessBoard3D = lazy(() => import('../../../../components/ChessBoard3D/ChessBoard3D'))

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Dynamic Blue Background */}
      <div className={styles.bg}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridOverlay} />
      </div>

      {/* Playful Floating Pieces */}
      <div className={styles.floatingPieces}>
        <div className={`${styles.piece} ${styles.p1}`}>♚</div>
        <div className={`${styles.piece} ${styles.p2}`}>♞</div>
        <div className={`${styles.piece} ${styles.p3}`}>♟</div>
        <div className={`${styles.piece} ${styles.p4}`}>♜</div>
      </div>

      <div className="container">
        <div className={styles.inner}>
          {/* Left: Content */}
          <div className={styles.content}>
            <div className={styles.badgeWrap}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                India's Premier Chess Academy
              </div>
            </div>

            <h1 className={`hero-title ${styles.title}`}>
              Master Chess. <br/>
              <span className={styles.highlight}>Build Better</span><br/>
              Thinkers.
            </h1>

            <p className={styles.subtitle}>
              Skillgenc Chess Academy combines expert coaching, structured curriculum, and
              competitive preparation to help students master chess — and develop the strategic
              thinking, focus, and confidence that last a lifetime.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>8,000+</span>
                <span className={styles.statLabel}>Students</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>50+</span>
                <span className={styles.statLabel}>Expert Coaches</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Cities</span>
              </div>
            </div>

            <div className={styles.ctas}>
              <Link to="/book-trial" className={styles.primaryBtn}>
                Book a Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link to="/#programs" className={styles.secondaryBtn}>
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Right: 3D Chess Board */}
          <div className={styles.canvasWrap}>
            <div className={styles.canvasGlow} />
            <Suspense fallback={
              <div className={styles.chessFallback}>
                <div className={styles.chessEmoji}>♚</div>
                <div className={styles.loadingDots}>
                  <span /><span /><span />
                </div>
              </div>
            }>
              <ChessBoard3D />
            </Suspense>
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
