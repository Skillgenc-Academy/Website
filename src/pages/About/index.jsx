import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Award, Brain } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>About Us | Skillgenc Chess Academy</title>
        <meta name="description" content="Learn about Skillgenc Chess Academy's philosophy, mission, and experienced coaches who are building thinkers and future champions." />
      </Helmet>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className="section-tag">✦ About Us</div>
              <h1 className="hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Building <span className="gradient-text">Thinkers</span> & <br/> 
                Future <span className="gradient-text">Champions</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '20px 0 32px' }}>
                Skillgenc Chess Academy was founded with a singular vision: to use the game of chess 
                as a powerful tool for developing cognitive skills, strategic thinking, and character 
                in the next generation.
              </p>
              <div className={styles.statsRow}>
                <div>
                  <h4>10+</h4>
                  <p>Years Experience</p>
                </div>
                <div className={styles.statLine} />
                <div>
                  <h4>8,000+</h4>
                  <p>Students Trained</p>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              {/* Replace src with your actual image */}
              <img src="/placeholder-about.jpg" alt="Students playing chess" className={styles.imagePlaceholder} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-dark-blue">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Our <span className="gradient-text">Philosophy</span></h2>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Target size={28} /></div>
              <h3>Mission</h3>
              <p>
                To provide world-class chess education that is accessible, structured, and 
                enjoyable. We aim to help every student reach their full potential.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Eye size={28} /></div>
              <h3>Vision</h3>
              <p>
                To be the global standard for chess academies, known for producing not just 
                champions, but well-rounded individuals who act strategically.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Brain size={28} /></div>
              <h3>Approach</h3>
              <p>
                We blend traditional Russian school methodology with modern engine analysis 
                and gamified learning for maximum engagement and retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="section">
        <div className="container">
          <div className={styles.journeyBox}>
            <div className="section-header" style={{ textAlign: 'center' }}>
              <h2 className="section-title">The Student <span className="gradient-text">Journey</span></h2>
            </div>
            
            <div className={styles.journey}>
              <div className={styles.step}>
                <div className={styles.stepIcon}>1</div>
                <h4>Learn</h4>
              </div>
              <div className={styles.stepLine} />
              <div className={styles.step}>
                <div className={styles.stepIcon}>2</div>
                <h4>Practice</h4>
              </div>
              <div className={styles.stepLine} />
              <div className={styles.step}>
                <div className={styles.stepIcon}>3</div>
                <h4>Play</h4>
              </div>
              <div className={styles.stepLine} />
              <div className={styles.step}>
                <div className={styles.stepIcon}>4</div>
                <h4>Analyze</h4>
              </div>
              <div className={styles.stepLine} />
              <div className={styles.step}>
                <div className={styles.stepIcon}>5</div>
                <h4>Improve</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark" style={{ borderTop: '1px solid rgba(1,83,217,0.2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>Ready to Start?</h2>
          <Link to="/book-trial" className="btn btn-gold btn-lg">
            Book a Free Trial
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
