import { BookOpen, Gamepad2, BrainCircuit, Activity, BarChart3 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import styles from './Platform.module.css'

export default function Platform() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Our Platform | Skillgenc Chess Academy</title>
        <meta name="description" content="Discover our integrated chess platform that combines live classes, practice tools, and deep analytics in one seamless experience." />
      </Helmet>
      <section className={styles.hero}>
        <div className="container">
          <div className="section-tag">✦ Technology</div>
          <h1 className="section-title" style={{ marginTop: '16px' }}>
            Everything You Need to <span className="gradient-text">Become a Better Player</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            Our integrated chess platform combines live classes, practice tools, 
            and deep analytics in one seamless experience.
          </p>

          <div className={styles.videoWrapper}>
            {/* Replace this YouTube URL with your actual promotional video */}
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0" 
              title="Platform Preview" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.features}>
            
            {/* Feature 1 */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><BookOpen size={24} /></div>
                <h2>Learn</h2>
                <p>
                  Access structured lessons, interactive boards, and curriculum materials. 
                  Our platform makes it easy to review past lessons and prepare for upcoming ones.
                </p>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>
                    <span className={styles.dot} style={{ background: '#ff5f56' }}/>
                    <span className={styles.dot} style={{ background: '#ffbd2e' }}/>
                    <span className={styles.dot} style={{ background: '#27c93f' }}/>
                  </div>
                  <div className={styles.mockBody}>
                    <div className={styles.placeholderBoard} />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={`${styles.featureRow} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><Gamepad2 size={24} /></div>
                <h2>Practice & Play</h2>
                <p>
                  Solve thousands of tactical puzzles matched to your exact skill level. 
                  Participate in academy-only tournaments and practice matches against peers.
                </p>
              </div>
              <div className={styles.featureVisual}>
                 <div className={styles.mockup}>
                  <div className={styles.mockHeader}>
                    <span className={styles.dot} style={{ background: '#ff5f56' }}/>
                    <span className={styles.dot} style={{ background: '#ffbd2e' }}/>
                    <span className={styles.dot} style={{ background: '#27c93f' }}/>
                  </div>
                  <div className={styles.mockBody}>
                    <div className={styles.placeholderUI} />
                  </div>
                </div>
              </div>
            </div>

             {/* Feature 3 */}
             <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><BrainCircuit size={24} /></div>
                <h2>Analyze</h2>
                <p>
                  Post-game analysis tools highlight blunders, inaccuracies, and missed 
                  opportunities. Learn from your mistakes with engine assistance and coach feedback.
                </p>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>
                    <span className={styles.dot} style={{ background: '#ff5f56' }}/>
                    <span className={styles.dot} style={{ background: '#ffbd2e' }}/>
                    <span className={styles.dot} style={{ background: '#27c93f' }}/>
                  </div>
                  <div className={styles.mockBody}>
                    <div className={styles.placeholderChart} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
