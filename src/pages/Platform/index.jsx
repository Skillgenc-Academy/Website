import { Link } from 'react-router-dom'
import { Monitor, BookOpen, Brain, PlayCircle, Search, Trophy, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import styles from './Platform.module.css'

function PlaceholderScreenshot({ icon: Icon, title }) {
  return (
    <div className={styles.placeholderScreenshot}>
      <Icon size={48} className={styles.placeholderIcon} />
      <span>{title} Screenshot Pending</span>
    </div>
  )
}

export default function Platform() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Our Platform | Skillgenc Chess Academy</title>
        <meta name="description" content="Discover our powerful digital chess platform designed to help students learn, practise, play, and analyse." />
      </Helmet>

      {/* 01 - LEARN */}
      <section className={styles.learnSection}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div className={styles.splitImage}>
              <PlaceholderScreenshot icon={Monitor} title="Interactive Board" />
            </div>
            <div className={styles.splitContent}>
              <div className="section-tag">01 — LEARN</div>
              <h2>Learn by Doing, Not Just Watching</h2>
              <p>Students can work directly on the chessboard during their learning sessions, exploring positions, trying moves and understanding concepts through practical examples.</p>
              <ul className={styles.featureList}>
                <li><CheckCircle2 size={18}/> Interactive chessboard</li>
                <li><CheckCircle2 size={18}/> Coach-led demonstrations</li>
                <li><CheckCircle2 size={18}/> Explore positions move by move</li>
                <li><CheckCircle2 size={18}/> Apply concepts during the lesson</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 - UNDERSTAND */}
      <section className={styles.understandSection}>
        <div className="container">
          <div className={styles.splitLayoutReverse}>
            <div className={styles.splitContent}>
              <div className="section-tag">02 — UNDERSTAND</div>
              <h2>Turn Chess Concepts Into Understanding</h2>
              <p>Complex positions become easier to understand when students can see ideas unfold directly on the board. Coaches can demonstrate variations, explain decisions and explore different possibilities with students.</p>
              <ul className={styles.featureList}>
                <li><CheckCircle2 size={18}/> Explore different variations</li>
                <li><CheckCircle2 size={18}/> Understand why a move works</li>
                <li><CheckCircle2 size={18}/> Compare possible decisions</li>
                <li><CheckCircle2 size={18}/> Visualise positions clearly</li>
              </ul>
            </div>
            <div className={styles.splitImage}>
              <PlaceholderScreenshot icon={BookOpen} title="Position Analysis" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 - PRACTISE */}
      <section className={styles.practiseSection}>
        <div className="container">
          <div className={styles.practiseHeader}>
            <div className="section-tag">03 — PRACTISE</div>
            <h2>Sharpen Thinking Through Practice</h2>
          </div>
          <div className={styles.practiseHero}>
            <PlaceholderScreenshot icon={Brain} title="Tactical Puzzles" />
          </div>
          <div className={styles.practiseFooter}>
            <p>Regular tactical practice helps students recognise patterns, calculate possibilities and make stronger decisions over time. Lichess provides puzzle modes and puzzle-performance tracking that fit particularly well into this section.</p>
            <ul className={styles.horizontalList}>
              <li>Tactical puzzles</li>
              <li>Pattern recognition</li>
              <li>Calculation practice</li>
              <li>Different levels of challenge</li>
              <li>Consistent practice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 04 - PLAY */}
      <section className={styles.playSection}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div className={styles.splitContentDark}>
              <div className="section-tag">04 — PLAY</div>
              <h2>Put Learning Into Practice</h2>
              <p>The best way to understand chess is to play it. Students can apply what they learn through real games and gain practical experience with decision-making, time management and game planning.</p>
              <ul className={styles.featureListDark}>
                <li><CheckCircle2 size={18}/> Play real chess games</li>
                <li><CheckCircle2 size={18}/> Different time controls</li>
                <li><CheckCircle2 size={18}/> Play against other learners</li>
                <li><CheckCircle2 size={18}/> Build practical experience</li>
                <li><CheckCircle2 size={18}/> Learn through every game</li>
              </ul>
            </div>
            <div className={styles.splitImage}>
              <PlaceholderScreenshot icon={PlayCircle} title="Live Game" />
            </div>
          </div>
        </div>
      </section>

      {/* 05 - ANALYSE */}
      <section className={styles.analyseSection}>
        <div className="container">
          <div className={styles.analyseHeader}>
            <div className="section-tag">05 — ANALYSE</div>
            <h2>Every Game Has Something to Teach</h2>
            <p>After a game, students can revisit important moments, explore alternative moves and understand how their decisions affected the game.</p>
          </div>
          
          <div className={styles.analyseHero}>
            <PlaceholderScreenshot icon={Search} title="Game Analysis" />
            
            {/* Visual Callouts */}
            <div className={styles.calloutGrid}>
              <div className={styles.callout}>
                <div className={styles.calloutNum}>1</div>
                <h4>Move History</h4>
                <p>Review the game move by move.</p>
              </div>
              <div className={styles.callout}>
                <div className={styles.calloutNum}>2</div>
                <h4>Position Evaluation</h4>
                <p>Understand how the position changes.</p>
              </div>
              <div className={styles.callout}>
                <div className={styles.calloutNum}>3</div>
                <h4>Variations</h4>
                <p>Explore alternative possibilities.</p>
              </div>
              <div className={styles.callout}>
                <div className={styles.calloutNum}>4</div>
                <h4>Game Review</h4>
                <p>Identify important moments.</p>
              </div>
            </div>
            <div className={styles.analyseTagline}>Understand the game beyond the result.</div>
          </div>
        </div>
      </section>

      {/* 06 - COMPETE */}
      <section className={styles.competeSection}>
        <div className="container">
          <div className={styles.splitLayoutReverse}>
            <div className={styles.splitContent}>
              <div className="section-tag">06 — COMPETE</div>
              <h2>Experience the Competitive Side of Chess</h2>
              <p>For students interested in competition, the platform provides opportunities to experience tournament-style chess, compete against other players and learn how to perform under time and competitive pressure.</p>
              <ul className={styles.featureList}>
                <li><CheckCircle2 size={18}/> Online tournaments</li>
                <li><CheckCircle2 size={18}/> Competitive games</li>
                <li><CheckCircle2 size={18}/> Time-controlled play</li>
                <li><CheckCircle2 size={18}/> Live standings</li>
                <li><CheckCircle2 size={18}/> Tournament results</li>
              </ul>
            </div>
            <div className={styles.splitImage}>
              <PlaceholderScreenshot icon={Trophy} title="Tournaments" />
            </div>
          </div>
        </div>
      </section>

      {/* 07 - TRACK */}
      <section className={styles.trackSection}>
        <div className="container">
          <div className={styles.splitLayout}>
            <div className={styles.splitImage}>
              <PlaceholderScreenshot icon={LineChart} title="Player Profile" />
            </div>
            <div className={styles.splitContent}>
              <div className="section-tag">07 — TRACK</div>
              <h2>See the Journey, Not Just the Result</h2>
              <p>A child's chess journey is built over time. Their games, practice activity and playing history provide a record of their experience and development. Player profiles can include game history, ratings and puzzle progress.</p>
              <ul className={styles.featureList}>
                <li><CheckCircle2 size={18}/> Game history</li>
                <li><CheckCircle2 size={18}/> Playing activity</li>
                <li><CheckCircle2 size={18}/> Puzzle progress</li>
                <li><CheckCircle2 size={18}/> Performance information</li>
                <li><CheckCircle2 size={18}/> Personal chess profile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 08 - PROGRESS */}
      <section className={styles.progressSection}>
        <div className="container">
          <div className={styles.progressHeader}>
            <div className="section-tag">08 — PROGRESS</div>
            <h2>From Practice to Progress</h2>
            <p>The platform supports the learning journey, while Skillgenc's structured assessment program helps determine when a student is ready to move forward.</p>
          </div>

          <div className={styles.flowDiagram}>
            <div className={styles.flowStep}>LEARN</div>
            <ArrowRight className={styles.flowArrow} />
            <div className={styles.flowStep}>PRACTISE</div>
            <ArrowRight className={styles.flowArrow} />
            <div className={styles.flowStep}>PLAY</div>
            <ArrowRight className={styles.flowArrow} />
            <div className={styles.flowStepHighlight}>ASSESSMENT</div>
            <ArrowRight className={styles.flowArrow} />
            <div className={styles.flowStepHighlight}>LEVEL COMPLETION</div>
            <ArrowRight className={styles.flowArrow} />
            <div className={styles.flowStepHighlight}>CERTIFICATE</div>
            <ArrowRight className={styles.flowArrow} />
            <div className={styles.flowStepHighlight}>NEXT LEVEL</div>
          </div>

          <ul className={styles.horizontalList}>
            <li>Structured assessments</li>
            <li>Skill-based evaluation</li>
            <li>Level completion</li>
            <li>Completion certificate</li>
            <li>Clear next step</li>
            <li>Continued learning</li>
          </ul>
        </div>
      </section>

      {/* FINAL - TECH SUMMARY */}
      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.techCard}>
            <h2>Technology That Supports the Learning</h2>
            <p>Great technology doesn't replace great teaching. It gives students more opportunities to practise, explore and apply what they learn.</p>
            
            <div className={styles.techEquation}>
              <span>Skillgenc Curriculum</span>
              <span className={styles.plus}>+</span>
              <span>Expert Guidance</span>
              <span className={styles.plus}>+</span>
              <span>Digital Practice</span>
              <span className={styles.plus}>+</span>
              <span>Assessment</span>
            </div>
            
            <div className={styles.techResult}>
              <ArrowRight size={24} />
              <h3>A complete learning journey</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
