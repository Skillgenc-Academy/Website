import { Link } from 'react-router-dom'
import styles from './KidsZone.module.css'

const funFeatures = [
  {
    title: 'Play with Bots!',
    desc: 'Practice against fun computer bots of all skill levels. From silly pawns to master kings!',
    icon: '🤖',
    color: 'var(--blue)'
  },
  {
    title: 'Earn Rewards',
    desc: 'Solve puzzles and win games to unlock cool avatars, badges, and shiny trophies!',
    icon: '🏆',
    color: 'var(--gold)'
  },
  {
    title: '100% Kid Safe',
    desc: 'A friendly, ad-free environment designed specifically for young minds to focus and learn.',
    icon: '🛡️',
    color: 'var(--dark-blue)'
  }
]

export default function KidsZone() {
  return (
    <section className={styles.section} id="kids-zone">
      {/* Top Wave */}
      <div className={styles.waveTop}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
        </svg>
      </div>

      {/* Floating Chess Pieces */}
      <div className={styles.floatingPieces}>
        <div className={`${styles.piece} ${styles.p1}`}>♞</div>
        <div className={`${styles.piece} ${styles.p2}`}>♛</div>
        <div className={`${styles.piece} ${styles.p3}`}>♝</div>
        <div className={`${styles.piece} ${styles.p4}`}>♜</div>
        <div className={`${styles.piece} ${styles.p5}`}>♟</div>
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.badgeWrap}>
            <span className={styles.badge}>Kids Zone</span>
          </div>
          
          <h2 className={styles.title}>
            Make Chess <span className={styles.highlight}>FUN!</span>
          </h2>
          <p className={styles.subtitle}>
            Learning chess doesn't have to be boring. Dive into a world of colorful pieces, 
            fun puzzles, and exciting rewards!
          </p>

          <div className={styles.grid}>
            {funFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className={styles.card}
                style={{ '--card-color': feature.color }}
              >
                <div className={styles.iconWrap}>{feature.icon}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
                <div className={styles.cardBg}></div>
              </div>
            ))}
          </div>

          <div className={styles.ctaWrap}>
            <Link to="/book-trial" className={styles.playBtn}>
              Start Playing Now! ♟️
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className={styles.waveBottom}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
        </svg>
      </div>
    </section>
  )
}
