import { BookOpen, Gamepad2, BrainCircuit, ShieldCheck, Trophy, Target, LineChart, BarChart2, Image as ImageIcon, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import styles from './Platform.module.css'
import trackImage from '../../assets/track_box.png'

export default function Platform() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Our Platform | Skillgenc Chess Academy</title>
        <meta name="description" content="Discover how Skillgenc uses a powerful digital chess environment to help students learn, practise, play, analyse, compete, track and progress." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <div className={styles['section-tag']}>♟ The Platform</div>
          <h1 className={styles['section-title']} style={{ marginTop: '16px' }}>
            A Complete Digital<br /> <span className={styles['gradient-text']}>Chess Learning Environment</span>
          </h1>
          <p className={styles['section-subtitle']} style={{ margin: '16px auto 0' }}>
            From learning concepts to playing real games, practising puzzles to tracking progress — every part of the chess journey is supported by a powerful, purpose-built digital environment.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/book-trial" className="btn btn-primary btn-lg">
              Book a Free Trial
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className={styles.features}>

            {/* 01 — LEARN */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.headerTop}>
                  <div className={styles.iconWrap}><BookOpen size={28} /></div>
                  <div className={styles.sectionNumber}>01 — LEARN</div>
                </div>
                <h2>Learn by Doing, Not Just Watching</h2>
                <p>
                  Students can work directly on the chessboard during their learning sessions, exploring positions, trying moves and understanding concepts through practical examples.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={18} /> Interactive chessboard</li>
                  <li><Target size={18} /> Coach-led demonstrations</li>
                  <li><Target size={18} /> Explore positions move by move</li>
                  <li><Target size={18} /> Apply concepts during the lesson</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.placeholderImage}>
                  <ImageIcon size={48} />
                  <span>Interactive board<br/>(Image coming soon)</span>
                </div>
              </div>
            </div>

            {/* 02 — UNDERSTAND */}
            <div className={`${styles.featureRow} ${styles.alt} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.headerTop}>
                  <div className={styles.iconWrap}><BrainCircuit size={28} /></div>
                  <div className={styles.sectionNumber}>02 — UNDERSTAND</div>
                </div>
                <h2>Turn Chess Concepts Into Understanding</h2>
                <p>
                  Complex positions become easier to understand when students can see ideas unfold directly on the board. Coaches can demonstrate variations, explain decisions and explore different possibilities with students.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={18} /> Explore different variations</li>
                  <li><Target size={18} /> Understand why a move works</li>
                  <li><Target size={18} /> Compare possible decisions</li>
                  <li><Target size={18} /> Visualise positions clearly</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.placeholderImage}>
                  <ImageIcon size={48} />
                  <span>Position analysis<br/>(Image coming soon)</span>
                </div>
              </div>
            </div>

            {/* 03 — PRACTISE */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.headerTop}>
                  <div className={styles.iconWrap}><ShieldCheck size={28} /></div>
                  <div className={styles.sectionNumber}>03 — PRACTISE</div>
                </div>
                <h2>Sharpen Thinking Through Practice</h2>
                <p>
                  Regular tactical practice helps students recognise patterns, calculate possibilities and make stronger decisions over time. Lichess provides puzzle modes and puzzle-performance tracking that fit particularly well into this section.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={18} /> Tactical puzzles</li>
                  <li><Target size={18} /> Pattern recognition</li>
                  <li><Target size={18} /> Calculation practice</li>
                  <li><Target size={18} /> Different levels of challenge</li>
                  <li><Target size={18} /> Consistent practice</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.placeholderImage}>
                  <ImageIcon size={48} />
                  <span>Puzzle<br/>(Image coming soon)</span>
                </div>
              </div>
            </div>

            {/* 04 — PLAY */}
            <div className={`${styles.featureRow} ${styles.alt} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.headerTop}>
                  <div className={styles.iconWrap}><Gamepad2 size={28} /></div>
                  <div className={styles.sectionNumber}>04 — PLAY</div>
                </div>
                <h2>Put Learning Into Practice</h2>
                <p>
                  The best way to understand chess is to play it. Students can apply what they learn through real games and gain practical experience with decision-making, time management and game planning.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={18} /> Play real chess games</li>
                  <li><Target size={18} /> Different time controls</li>
                  <li><Target size={18} /> Play against other learners</li>
                  <li><Target size={18} /> Build practical experience</li>
                  <li><Target size={18} /> Learn through every game</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.placeholderImage}>
                  <ImageIcon size={48} />
                  <span>Live game<br/>(Image coming soon)</span>
                </div>
              </div>
            </div>

            {/* Middle CTA Block */}
            <div style={{ margin: '4rem 0', padding: '3rem 2rem', background: 'var(--blue-10)', border: '1px solid var(--blue-20)', borderRadius: '24px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--black)' }}>Ready to Put Learning Into Practice?</h3>
              <p style={{ opacity: 0.8, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Join a free trial class to see how our digital environment accelerates your child's chess journey.
              </p>
              <Link to="/book-trial" className="btn btn-primary btn-lg">
                Book a Free Trial
              </Link>
            </div>

            {/* 05 — ANALYSE */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.headerTop}>
                  <div className={styles.iconWrap}><LineChart size={28} /></div>
                  <div className={styles.sectionNumber}>05 — ANALYSE</div>
                </div>
                <h2>Every Game Has Something to Teach</h2>
                <p>
                  After a game, students can revisit important moments, explore alternative moves and understand how their decisions affected the game. The analysis environment supports move-by-move review and computer-assisted analysis.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={18} /> Review games move by move</li>
                  <li><Target size={18} /> Identify critical moments</li>
                  <li><Target size={18} /> Explore alternative moves</li>
                  <li><Target size={18} /> Understand mistakes</li>
                  <li><Target size={18} /> Discover stronger ideas</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.placeholderImage}>
                  <ImageIcon size={48} />
                  <span>Analysis board<br/>(Image coming soon)</span>
                </div>
              </div>
            </div>

            {/* 06 — COMPETE */}
            <div className={`${styles.featureRow} ${styles.alt} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.headerTop}>
                  <div className={styles.iconWrap}><Trophy size={28} /></div>
                  <div className={styles.sectionNumber}>06 — COMPETE</div>
                </div>
                <h2>Experience the Competitive Side of Chess</h2>
                <p>
                  For students interested in competition, the platform provides opportunities to experience tournament-style chess, compete against other players and learn how to perform under time and competitive pressure.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={18} /> Online tournaments</li>
                  <li><Target size={18} /> Competitive games</li>
                  <li><Target size={18} /> Time-controlled play</li>
                  <li><Target size={18} /> Live standings</li>
                  <li><Target size={18} /> Tournament results</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.placeholderImage}>
                  <ImageIcon size={48} />
                  <span>Tournament<br/>(Image coming soon)</span>
                </div>
              </div>
            </div>

            {/* 07 — TRACK */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.headerTop}>
                  <div className={styles.iconWrap}><BarChart2 size={28} /></div>
                  <div className={styles.sectionNumber}>07 — TRACK</div>
                </div>
                <h2>See the Journey, Not Just the Result</h2>
                <p>
                  A child's chess journey is built over time. Their games, practice activity and playing history provide a record of their experience and development. Player profiles include game history, ratings and puzzle progress.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={18} /> Game history</li>
                  <li><Target size={18} /> Puzzle progress</li>
                  <li><Target size={18} /> Playing activity</li>
                  <li><Target size={18} /> Performance information</li>
                  <li><Target size={18} /> Personal chess profile</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <img src={trackImage} alt="Track progress" className={styles.featureImage} />
              </div>
            </div>

            {/* 08 — PROGRESS (Full Width) */}
            <div className={styles.fullWidthSection}>
              <div className={styles.sectionNumber} style={{ justifyContent: 'center' }}>08 — PROGRESS</div>
              <h2>From Practice to Progress</h2>
              <p>
                The platform supports the learning journey, while Skillgenc's structured assessment program helps determine when a student is ready to move forward.
              </p>
              
              <div className={styles.progressContainer}>
                <div className={styles.progressFlow}>
                  <div className={`${styles.flowRow} ${styles.rowYellow}`}>
                    <span>LEARN</span>
                    <span className={styles.flowArrow}>→</span>
                    <span>PRACTISE</span>
                  </div>
                  <div className={`${styles.flowRow} ${styles.rowGray}`}>
                    <span>PLAY</span>
                    <span className={styles.flowArrow}>→</span>
                    <span>ASSESSMENT</span>
                  </div>
                  <div className={`${styles.flowRow} ${styles.rowOrange}`}>
                    <span>CERTIFICATE</span>
                    <span className={styles.flowArrow}>→</span>
                    <span className={styles.highlightText}>NEXT LEVEL ↑</span>
                  </div>
                </div>
                
                <div className={styles.progressPointers}>
                  <ul className={styles.featureList}>
                    <li><Target size={18} /> Structured assessments</li>
                    <li><Target size={18} /> Skill-based evaluation</li>
                    <li><Target size={18} /> Level completion</li>
                    <li><Target size={18} /> Completion certificate</li>
                    <li><Target size={18} /> Clear next step</li>
                    <li><Target size={18} /> Continued learning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Summary Section */}
            <div className={styles.summarySection}>
              <h2>Technology That Supports the Learning</h2>
              <p>
                Great technology doesn't replace great teaching. It gives students more opportunities to practise, explore and apply what they learn.
              </p>
              <div className={styles.journeyFlow}>
                <span>Skillgenc Curriculum</span>
                <ArrowRight size={24} />
                <span>Expert Guidance</span>
                <ArrowRight size={24} />
                <span>Digital Practice</span>
                <ArrowRight size={24} />
                <span>Assessment</span>
              </div>
              <h3 style={{ marginTop: '40px', fontSize: '1.5rem', color: '#F9D024' }}>
                A complete learning journey
              </h3>

              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link to="/book-trial" className="btn btn-gold btn-lg">
                  Start Your Journey - Book a Trial
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
