import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Brain, Award, Globe, MapPin, TrendingUp } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>About Us | Skillgenc Chess Academy</title>
        <meta name="description" content="Our mission is to make meaningful chess education accessible, engaging and transformative for every learner." />
      </Helmet>

      {/* 01 — Our Mission */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionInner}>
            <div className="section-tag" style={{ color: '#F9D024' }}>♟ Our Mission</div>
            <h1 className={styles.missionHeading}>
              Our mission is to make meaningful chess education{' '}
              <span className={styles.missionAccent}>accessible, engaging</span>{' '}
              and transformative for every learner.
            </h1>
            <p className={styles.missionSub}>
              We believe chess is more than a game. It is a powerful way to develop focus, strategic thinking,
              problem-solving, patience and confidence — skills that extend far beyond the chessboard.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — What We Believe */}
      <section className="section" style={{ background: '#0153D9' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>♟ Philosophy</div>
            <h2 className="section-title" style={{ color: '#ffffff', marginTop: '12px' }}>
              What We <span style={{ color: '#F9D024' }}>Believe</span>
            </h2>
          </div>
          <div className={styles.grid4}>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Target size={28} /></div>
              <h3>Chess is a Way of Thinking</h3>
              <p>We see chess as a powerful tool for developing thoughtful decision-making and strategic thinking.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}><TrendingUp size={28} /></div>
              <h3>Every Learner Can Grow</h3>
              <p>With the right guidance, practice and environment, every student can develop their abilities at their own pace.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Brain size={28} /></div>
              <h3>Learning Should Be Engaging</h3>
              <p>Children learn best when they are curious, challenged and enjoying the process.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrap}><Award size={28} /></div>
              <h3>The Lessons Go Beyond the Board</h3>
              <p>The habits developed through chess — focus, patience, discipline and resilience — can influence how children approach challenges in everyday life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Our Approach */}
      <section className="section" style={{ background: '#f8f9fc' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-tag">♟ How We Teach</div>
            <h2 className="section-title" style={{ color: '#000', marginTop: '12px' }}>
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(0,0,0,0.6)', margin: '16px auto 0' }}>
              How we put our beliefs into practice — one learner at a time.
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

      {/* 04 — Our Reach */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className={styles.reachInner}>
            <div className={styles.reachText}>
              <div className="section-tag" style={{ color: '#0153D9' }}>♟ Global Presence</div>
              <h2 className={styles.reachHeading}>
                From Bengaluru <span style={{ color: '#0153D9' }}>to the World</span>
              </h2>
              <p className={styles.reachSub}>
                From our communities in India to learners around the world, Skillgenc is helping children
                discover chess, develop their thinking and grow through the game.
              </p>
            </div>
            <div className={styles.reachMap}>
              <div className={styles.mapVisual}>
                <img 
                  src="/world-map.png" 
                  alt="Students across multiple countries"
                  className={styles.mapImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.mapFallback} style={{ display: 'none' }}>
                  <Globe size={64} className={styles.globeIcon} />
                  <p className={styles.mapLabel}>Upload /world-map.png</p>
                </div>
                <div className={styles.mapOverlay}>
                  <p>Students across multiple countries</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.reachStats}>
            <div className={styles.reachStat}>
              <span className={styles.reachNum}>10+</span>
              <span className={styles.reachLabel}>Countries</span>
            </div>
            <div className={styles.reachStatLine} />
            <div className={styles.reachStat}>
              <span className={styles.reachNum}>5,000+</span>
              <span className={styles.reachLabel}>Students</span>
            </div>
            <div className={styles.reachStatLine} />
            <div className={styles.reachStat}>
              <span className={styles.reachNum}>20+</span>
              <span className={styles.reachLabel}>Communities</span>
            </div>
            <div className={styles.reachStatLine} />
            <div className={styles.reachStat}>
              <span className={styles.reachNum}>15+</span>
              <span className={styles.reachLabel}>Preschools</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Our Presence in India */}
      <section className="section" style={{ background: '#f8f9fc' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-tag">♟ On the Ground</div>
            <h2 className="section-title" style={{ color: '#000', marginTop: '12px' }}>
              Growing Through <span className="gradient-text">Communities</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(0,0,0,0.6)', margin: '16px auto 0', maxWidth: '600px' }}>
              Our chess programs are part of learning communities across India, with partnerships spanning
              gated communities, preschools and other learning environments.
            </p>
          </div>
          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <div className={styles.locationIcon}><MapPin size={28} /></div>
              <h3>Bengaluru</h3>
              <p>Gated communities • Preschools</p>
            </div>
            <div className={styles.locationCard}>
              <div className={styles.locationIcon}><MapPin size={28} /></div>
              <h3>Hyderabad</h3>
              <p>Gated communities • Preschools</p>
            </div>
            <div className={styles.locationCard}>
              <div className={styles.locationIcon}><MapPin size={28} /></div>
              <h3>Pune</h3>
              <p>Gated communities • Preschools</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Our Impact */}
      <section className="section" style={{ background: '#0153D9' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>♟ Our Impact</div>
            <h2 className="section-title" style={{ color: '#ffffff', marginTop: '12px' }}>
              Making Every <span style={{ color: '#F9D024' }}>Move Count</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.7 }}>
              Every student journey is different. What remains constant is our focus on helping learners
              build stronger chess skills, sharper thinking and greater confidence.
            </p>
          </div>
          <div className={styles.impactGrid}>
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>5,000+</span>
              <span className={styles.impactLabel}>Learners</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>10+</span>
              <span className={styles.impactLabel}>Countries</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>20+</span>
              <span className={styles.impactLabel}>Community Partnerships</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.impactNum}>15+</span>
              <span className={styles.impactLabel}>Preschools</span>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Our Vision */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className={styles.visionInner}>
            <div className="section-tag">♟ Our Vision</div>
            <h2 className={styles.visionHeading}>
              We envision a world where chess becomes a{' '}
              <span className="gradient-text">meaningful part</span>{' '}
              of every child's learning journey.
            </h2>
            <p className={styles.visionSub}>
              A world where children don't just learn how to play the game, but learn how to think,
              decide, adapt and grow through it.
            </p>
            <p className={styles.visionStatement}>
              We are building towards a future where every move creates a better thinker.
            </p>
          </div>
        </div>
      </section>

      {/* 08 — CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaHeading}>Every Journey Begins With a Move.</h2>
            <p className={styles.ctaSub}>
              Give your child the opportunity to learn, think and grow through chess.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/book-trial" className="btn btn-primary btn-lg">
                Book a Free Demo <ArrowRight size={18} />
              </Link>
              <Link to="/programs" className="btn btn-outline-white btn-lg">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
