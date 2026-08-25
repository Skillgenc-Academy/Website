import { Link } from 'react-router-dom'
import { ArrowRight, Target, Brain, Smile, Activity, MapPin } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>About Us | Skillgenc Chess Academy</title>
        <meta name="description" content="Our mission is to make meaningful chess education accessible, engaging and transformative for every learner." />
      </Helmet>

      {/* 01 - MISSION */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionContent}>
            <div className="section-tag">✦ Our Mission</div>
            <h1 className={styles.missionTitle}>
              Our mission is to make meaningful chess education accessible, engaging and transformative for every learner.
            </h1>
            <p className={styles.missionText}>
              We believe chess is more than a game. It is a powerful way to develop focus, strategic thinking, problem-solving, patience and confidence — skills that extend far beyond the chessboard.
            </p>
          </div>
        </div>
      </section>

      {/* 02 - WHAT WE BELIEVE */}
      <section className={styles.beliefsSection}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Believe</h2>
          </div>
          <div className={styles.beliefsGrid}>
            <div className={styles.beliefCard}>
              <Target size={32} className={styles.beliefIcon} />
              <h3>Chess is a way of thinking</h3>
              <p>We see chess as a powerful tool for developing thoughtful decision-making and strategic thinking.</p>
            </div>
            <div className={styles.beliefCard}>
              <Activity size={32} className={styles.beliefIcon} />
              <h3>Every learner can grow</h3>
              <p>With the right guidance, practice and environment, every student can develop their abilities at their own pace.</p>
            </div>
            <div className={styles.beliefCard}>
              <Smile size={32} className={styles.beliefIcon} />
              <h3>Learning should be engaging</h3>
              <p>Children learn best when they are curious, challenged and enjoying the process.</p>
            </div>
            <div className={styles.beliefCard}>
              <Brain size={32} className={styles.beliefIcon} />
              <h3>The lessons go beyond the board</h3>
              <p>The habits developed through chess — focus, patience, discipline and resilience — can influence how children approach challenges in everyday life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - OUR APPROACH */}
      <section className={styles.approachSection}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Approach</h2>
          </div>
          <div className={styles.approachFlex}>
            <div className={styles.approachCard}>
              <h4>Structured Learning</h4>
              <p>A progressive learning journey designed around the learner's level and development.</p>
            </div>
            <div className={styles.approachCard}>
              <h4>Personalised Guidance</h4>
              <p>Learning that recognises individual strengths, challenges and pace.</p>
            </div>
            <div className={styles.approachCard}>
              <h4>Practice Through Play</h4>
              <p>Making chess engaging while building genuine understanding.</p>
            </div>
            <div className={styles.approachCard}>
              <h4>Skill Development</h4>
              <p>Going beyond moves and openings to develop thinking, decision-making and confidence.</p>
            </div>
            <div className={styles.approachCard}>
              <h4>Continuous Progress</h4>
              <p>Helping learners improve consistently, one step at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - OUR REACH */}
      <section className={styles.reachSection}>
        <div className="container">
          <div className={styles.reachHeader}>
            <div className="section-tag">✦ From Bengaluru to the World</div>
            <h2 className="section-title">
              Learners across <span className="gradient-text">multiple countries.</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              From our communities in India to learners around the world, Skillgenc is helping children discover chess, develop their thinking and grow through the game.
            </p>
          </div>
          
          <div className={styles.mapContainer}>
            {/* Minimal SVG World Map Representation */}
            <svg viewBox="0 0 1000 500" className={styles.worldMap}>
              <path fill="rgba(1,83,217,0.1)" d="M848.3,169.6c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C850.5,170.5,849.6,169.6,848.3,169.6z M826.5,130.4c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C828.7,131.3,827.8,130.4,826.5,130.4z M774.3,204.3c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C776.5,205.2,775.5,204.3,774.3,204.3z M687.3,134.8c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C689.5,135.7,688.6,134.8,687.3,134.8z M548.1,95.7c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C550.3,96.6,549.4,95.7,548.1,95.7z M500.3,147.8c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C502.5,148.7,501.6,147.8,500.3,147.8z M235.1,130.4c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C237.3,131.3,236.4,130.4,235.1,130.4z M174.2,204.3c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C176.4,205.2,175.5,204.3,174.2,204.3z M291.6,260.9c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C293.8,261.7,292.9,260.9,291.6,260.9z M700.3,278.3c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C702.5,279.1,701.6,278.3,700.3,278.3z M678.6,234.8c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C680.8,235.7,679.9,234.8,678.6,234.8z M500.3,313c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C502.5,313.9,501.6,313,500.3,313z M548.1,395.7c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C550.3,396.5,549.4,395.7,548.1,395.7z M796.1,434.8c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C798.3,435.7,797.4,434.8,796.1,434.8z M235.1,360.9c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C237.3,361.7,236.4,360.9,235.1,360.9z M135.1,300c-1.3,0-2.2,0.9-2.2,2.2c0,1.3,0.9,2.2,2.2,2.2c1.3,0,2.2-0.9,2.2-2.2C137.3,300.9,136.4,300,135.1,300z M217.7,18.5c-4.4-6.4-12.7-8-19.1-3.6c-6.4,4.4-8,12.7-3.6,19.1c25,36.5,54,82.4,54,124.6c0,28.8-13.4,55.1-35,71.2C193.3,245.5,170,277,170,311.4c0,37.3,20,70.5,50.7,89.5c2.6,1.6,4.2,4.6,4.2,7.7c0,2.6-1.1,5.1-3.1,6.8c-26.6,22.4-41.8,55-41.8,88.7c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14c0-26.1,11.8-51.4,32.4-68.8c8.3-7,21.5-6.6,29.3,1c30.1,29.5,70.7,46,113.3,46c43.6,0,84.7-17,115.3-47.5c7.6-7.5,20.4-8,28.5-1c21.2,18.4,33.5,45.2,33.5,72.7c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14c0-34.6-15.6-67.9-42.5-91.1c-1.9-1.6-3-4-3-6.6c0-3.1,1.7-6,4.3-7.5c31-18.4,51.1-51.6,51.1-88.7c0-34.1-22.9-65.3-55.7-81c-8.9-4.2-14.6-13-14.6-22.8c0-39,26.4-81.5,49.2-114.7c4.4-6.4,2.8-15.1-3.6-19.5c-6.4-4.4-15.1-2.8-19.5,3.6c-21.4,31.2-44.1,69.5-44.1,102.6c0,2.1,1.2,4.1,3,5c23.5,11.2,39.6,34,39.6,59.3c0,26.1-14.1,50-36.1,63.1c-15.5,9.2-25.1,26.2-25.1,44.4c0,23.3,14.6,44.2,36.5,52.8c11.9,4.7,19.6,16,19.6,28.8c0,11.5-6.5,21.9-16.9,26.9c-23,11-53.1,24.4-78.2,0.4c-16.6-15.8-38.9-24.6-62.1-24.6c-23,0-45.1,8.7-61.6,24.3c-25,23.6-55.1,10.2-78.2-0.8c-10.4-4.9-16.9-15.3-16.9-26.8c0-12.8,7.7-24.1,19.5-28.8c21.9-8.7,36.5-29.6,36.5-53c0-18.1-9.6-35.1-25.2-44.4C215.1,291,201,267.1,201,241c0-25.2,16-48,39.5-59.2c1.8-0.9,3-2.8,3-4.9c0-32.9-22.7-71-44-102.1C194.2,65.3,184.2,42.8,217.7,18.5z"/>
            </svg>
            <div className={styles.mapNodes}>
              {/* Fake nodes representing reach */}
              <div className={styles.node} style={{top: '30%', left: '20%'}}></div>
              <div className={styles.node} style={{top: '40%', left: '25%'}}></div>
              <div className={styles.node} style={{top: '45%', left: '55%'}}></div>
              <div className={styles.node} style={{top: '55%', left: '70%'}}></div>
              <div className={styles.node} style={{top: '25%', left: '50%'}}></div>
              <div className={styles.node} style={{top: '60%', left: '80%'}}></div>
              <div className={styles.node} style={{top: '75%', left: '25%'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - OUR PRESENCE IN INDIA */}
      <section className={styles.indiaPresence}>
        <div className="container">
          <div className={styles.indiaHeader}>
            <div className="section-tag">✦ Growing Through Communities</div>
            <h2 className="section-title">Our Presence in India</h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              Our chess programs are also part of learning communities across India, with partnerships spanning gated communities, preschools and other learning environments.
            </p>
          </div>
          
          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <MapPin className={styles.locationIcon} />
              <h3>Bengaluru</h3>
              <p>Gated communities • Preschools</p>
            </div>
            <div className={styles.locationCard}>
              <MapPin className={styles.locationIcon} />
              <h3>Hyderabad</h3>
              <p>Gated communities • Preschools</p>
            </div>
            <div className={styles.locationCard}>
              <MapPin className={styles.locationIcon} />
              <h3>Pune</h3>
              <p>Gated communities • Preschools</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 - OUR IMPACT */}
      <section className={styles.impactSection}>
        <div className="container">
          <div className={styles.impactContent}>
            <div className={styles.impactHeader}>
              <h2 className="section-title text-white">Making Every Move Count</h2>
              <p>
                Every student journey is different. What remains constant is our focus on helping learners build stronger chess skills, sharper thinking and greater confidence.
              </p>
            </div>
            <div className={styles.metricsGrid}>
              <div className={styles.metric}>
                <h3>5,000+</h3>
                <p>Learners</p>
              </div>
              <div className={styles.metric}>
                <h3>10+</h3>
                <p>Countries</p>
              </div>
              <div className={styles.metric}>
                <h3>50+</h3>
                <p>Community Partnerships</p>
              </div>
              <div className={styles.metric}>
                <h3>20+</h3>
                <p>Preschools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 - OUR VISION */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionContent}>
            <h2>
              We envision a world where chess becomes a meaningful part of every child's learning journey.
            </h2>
            <p>
              A world where children don't just learn how to play the game, but learn how to think, decide, adapt and grow through it.
            </p>
            <div className={styles.visionHighlight}>
              We are building towards a future where every move creates a better thinker.
            </div>
          </div>
        </div>
      </section>

      {/* 08 - CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Every Journey Begins With a Move.</h2>
            <p>Give your child the opportunity to learn, think and grow through chess.</p>
            <div className={styles.ctaButtons}>
              <Link to="/book-trial" className="btn btn-primary">
                Start Learning <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
