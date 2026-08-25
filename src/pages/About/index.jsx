import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Award, Brain } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>About Us | Skillgenc Chess Academy</title>
        <meta name="description" content="Our mission is to make meaningful chess education accessible, engaging and transformative for every learner." />
      </Helmet>

      {/* Hero / Mission */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className="section-tag">♟ Our Mission</div>
              <h1 className="hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Making Chess <span className="gradient-text">Education</span> <br />
                Accessible &amp; <span className="gradient-text">Transformative</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '20px 0 16px' }}>
                Our mission is to make meaningful chess education accessible, engaging and transformative for every learner.
              </p>
              <p className="section-subtitle" style={{ margin: '0 0 32px', opacity: 0.75 }}>
                We believe chess is more than a game. It is a powerful way to develop focus, strategic thinking, problem-solving, patience and confidence — skills that extend far beyond the chessboard.
              </p>
              <div className={styles.statsRow}>
                <div>
                  <h4>5,000+</h4>
                  <p>Learners</p>
                </div>
                <div className={styles.statLine} />
                <div>
                  <h4>10+</h4>
                  <p>Countries</p>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src="/placeholder-about.jpg" alt="Students playing chess" className={styles.imagePlaceholder} />
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section" style={{ background: '#0153D9' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title" style={{ color: '#ffffff' }}>What We <span style={{ color: '#F9D024' }}>Believe</span></h2>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Target size={28} /></div>
              <h3>Chess is a Way of Thinking</h3>
              <p>
                We see chess as a powerful tool for developing thoughtful decision-making and strategic thinking.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Eye size={28} /></div>
              <h3>Every Learner Can Grow</h3>
              <p>
                With the right guidance, practice and environment, every student can develop their abilities at their own pace.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Brain size={28} /></div>
              <h3>Learning Should Be Engaging</h3>
              <p>
                Children learn best when they are curious, challenged and enjoying the process.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Award size={28} /></div>
              <h3>The Lessons Go Beyond the Board</h3>
              <p>
                The habits developed through chess — focus, patience, discipline and resilience — can influence how children approach challenges in everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section" style={{ background: '#f8f9fc', color: '#000' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title" style={{ color: '#000' }}>Our <span className="gradient-text">Approach</span></h2>
            <p className="section-subtitle" style={{ color: 'rgba(0,0,0,0.6)', margin: '16px auto 0' }}>
              How we put our beliefs into practice, one learner at a time.
            </p>
          </div>

          <div className={styles.journeyCreative}>
            <div className={styles.journeyCard}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.journeyContent}>
                <h4>Structured Learning</h4>
                <p>A progressive learning journey designed around the learner's level and development.</p>
              </div>
            </div>

            <div className={styles.journeyArrow}><ArrowRight size={24} /></div>

            <div className={styles.journeyCard}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.journeyContent}>
                <h4>Personalised Guidance</h4>
                <p>Learning that recognises individual strengths, challenges and pace.</p>
              </div>
            </div>

            <div className={styles.journeyArrow}><ArrowRight size={24} /></div>

            <div className={styles.journeyCard}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.journeyContent}>
                <h4>Practice Through Play</h4>
                <p>Making chess engaging while building genuine understanding.</p>
              </div>
            </div>

            <div className={styles.journeyArrow}><ArrowRight size={24} /></div>

            <div className={styles.journeyCard}>
              <div className={styles.stepNum}>04</div>
              <div className={styles.journeyContent}>
                <h4>Skill Development</h4>
                <p>Going beyond moves and openings to develop thinking, decision-making and confidence.</p>
              </div>
            </div>

            <div className={styles.journeyArrow}><ArrowRight size={24} /></div>

            <div className={styles.journeyCard}>
              <div className={styles.stepNum}>05</div>
              <div className={styles.journeyContent}>
                <h4>Continuous Progress</h4>
                <p>Helping learners improve consistently, one step at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
