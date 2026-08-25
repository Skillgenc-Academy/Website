import { BookOpen, Gamepad2, BrainCircuit, ShieldCheck, Trophy, Target, LineChart, BarChart2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import styles from './Platform.module.css'

export default function Platform() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Our Platform | Skillgenc Chess Academy</title>
        <meta name="description" content="Discover how Skillgenc uses a powerful digital chess environment to help students learn, practise, play, analyse, compete, track and progress." />
      </Helmet>

      <section className={styles.hero}>
        <div className="container">
          <div className="section-tag">♟ The Platform</div>
          <h1 className="section-title" style={{ marginTop: '16px' }}>
            A Complete Digital<br /> <span className="gradient-text">Chess Learning Environment</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            From learning concepts to playing real games, practising puzzles to tracking progress — every part of the chess journey is supported by a powerful, purpose-built digital environment.
          </p>

          <div className={styles.videoWrapper}>
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

            {/* 01 — LEARN */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><BookOpen size={32} /></div>
                <h2>Learn by Doing, Not Just Watching</h2>
                <p>
                  Students can work directly on the chessboard during their learning sessions, exploring positions, trying moves and understanding concepts through practical examples.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20} /> Interactive chessboard</li>
                  <li><BrainCircuit size={20} /> Coach-led demonstrations</li>
                  <li><Target size={20} /> Explore positions move by move</li>
                  <li><BrainCircuit size={20} /> Apply concepts during the lesson</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>01 — LEARN</div>
                  <div className={styles.mockBody}>
                    <div className={styles.lichessStudy}>
                      <div className={styles.board}>
                        <div className={styles.arrowRow}>♟ Interactive Board</div>
                      </div>
                      <div className={styles.studyText}>
                        <strong>Coach:</strong> "Explore this position — what would you play here?"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 — UNDERSTAND */}
            <div className={`${styles.featureRow} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><BrainCircuit size={32} /></div>
                <h2>Turn Chess Concepts Into Understanding</h2>
                <p>
                  Complex positions become easier to understand when students can see ideas unfold directly on the board. Coaches can demonstrate variations, explain decisions and explore different possibilities with students.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20} /> Explore different variations</li>
                  <li><BrainCircuit size={20} /> Understand why a move works</li>
                  <li><Target size={20} /> Compare possible decisions</li>
                  <li><BrainCircuit size={20} /> Visualise positions clearly</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>02 — UNDERSTAND</div>
                  <div className={styles.mockBody}>
                    <div className={styles.puzzleStorm}>
                      <div className={styles.combo}>VARIATION EXPLORER ♟</div>
                      <div className={styles.scoreBoard}>
                        <span className={styles.score}>Move: Nf6</span>
                        <span className={styles.timer}>↔ 3 lines</span>
                      </div>
                      <div className={styles.moves}>♞ ♝ ♛ ♜ ♟</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 — PRACTISE */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><ShieldCheck size={32} /></div>
                <h2>Sharpen Thinking Through Practice</h2>
                <p>
                  Regular tactical practice helps students recognise patterns, calculate possibilities and make stronger decisions over time. Puzzle modes and performance tracking make practice measurable.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20} /> Tactical puzzles</li>
                  <li><BrainCircuit size={20} /> Pattern recognition</li>
                  <li><Target size={20} /> Different levels of challenge</li>
                  <li><BrainCircuit size={20} /> Consistent practice tracking</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>03 — PRACTISE</div>
                  <div className={styles.mockBody}>
                    <div className={styles.puzzleStorm}>
                      <div className={styles.combo}>COMBO x5 🔥</div>
                      <div className={styles.scoreBoard}>
                        <span className={styles.score}>Score: 24</span>
                        <span className={styles.timer}>⏱ 0:15</span>
                      </div>
                      <div className={styles.moves}>♟ ♟ ♟ ♟ ♟</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 04 — PLAY */}
            <div className={`${styles.featureRow} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><Gamepad2 size={32} /></div>
                <h2>Put Learning Into Practice</h2>
                <p>
                  The best way to understand chess is to play it. Students can apply what they learn through real games and gain practical experience with decision-making, time management and game planning.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20} /> Play real chess games</li>
                  <li><BrainCircuit size={20} /> Different time controls</li>
                  <li><Target size={20} /> Play against other learners</li>
                  <li><BrainCircuit size={20} /> Build practical experience</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>04 — PLAY</div>
                  <div className={styles.mockBody}>
                    <div className={styles.leaderboard}>
                      <div className={styles.rankRow}><span className={styles.gold}>♟ White</span> vs <span className={styles.silver}>♙ Black</span></div>
                      <div className={styles.rankRow}><span className={styles.score}>Time: 10+0</span><span className={styles.pts}>Move 23</span></div>
                      <div className={styles.rankRow}><span style={{ color: '#0153D9' }}>Game in progress…</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 05 — ANALYSE */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><LineChart size={32} /></div>
                <h2>Every Game Has Something to Teach</h2>
                <p>
                  After a game, students can revisit important moments, explore alternative moves and understand how their decisions affected the game. Move-by-move review and analysis tools help students learn through every result.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20} /> Review games move by move</li>
                  <li><BrainCircuit size={20} /> Identify critical moments</li>
                  <li><Target size={20} /> Explore alternative moves</li>
                  <li><BrainCircuit size={20} /> Discover stronger ideas</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>05 — ANALYSE</div>
                  <div className={styles.mockBody}>
                    <div className={styles.lichessStudy}>
                      <div className={styles.board}>
                        <div className={styles.arrowRow}>① Move History &nbsp; ② Evaluation</div>
                      </div>
                      <div className={styles.studyText}>
                        ③ Variations &nbsp;&nbsp; ④ Key Moments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 06 — COMPETE */}
            <div className={`${styles.featureRow} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><Trophy size={32} /></div>
                <h2>Experience the Competitive Side of Chess</h2>
                <p>
                  For students interested in competition, the platform provides opportunities to experience tournament-style chess, compete against other players and learn how to perform under time and competitive pressure.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20} /> Online tournaments</li>
                  <li><BrainCircuit size={20} /> Competitive games</li>
                  <li><Target size={20} /> Time-controlled play</li>
                  <li><BrainCircuit size={20} /> Live standings &amp; results</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>Skillgenc Tournament</div>
                  <div className={styles.mockBody}>
                    <div className={styles.leaderboard}>
                      <div className={styles.rankRow}><span className={styles.gold}>🥇 1.</span> Player_One <span className={styles.pts}>12 pts</span></div>
                      <div className={styles.rankRow}><span className={styles.silver}>🥈 2.</span> ChessKid22 <span className={styles.pts}>10 pts</span></div>
                      <div className={styles.rankRow}><span className={styles.bronze}>🥉 3.</span> Checkmate99 <span className={styles.pts}>8 pts</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 07 — TRACK */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><BarChart2 size={32} /></div>
                <h2>See the Journey, Not Just the Result</h2>
                <p>
                  A child's chess journey is built over time. Their games, practice activity and playing history provide a record of their experience and development. Player profiles include game history, ratings and puzzle progress.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20} /> Game history</li>
                  <li><BrainCircuit size={20} /> Puzzle progress</li>
                  <li><Target size={20} /> Playing activity</li>
                  <li><BrainCircuit size={20} /> Personal chess profile</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>07 — TRACK</div>
                  <div className={styles.mockBody}>
                    <div className={styles.leaderboard}>
                      <div className={styles.rankRow}><span>Games Played</span><span className={styles.pts}>124</span></div>
                      <div className={styles.rankRow}><span>Puzzles Solved</span><span className={styles.pts}>860</span></div>
                      <div className={styles.rankRow}><span className={styles.gold}>Current Rating</span><span className={styles.pts}>1340</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 08 — PROGRESS */}
            <div className={`${styles.featureRow} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><Target size={32} /></div>
                <h2>From Practice to Progress</h2>
                <p>
                  The platform supports the learning journey, while Skillgenc's structured assessment program helps determine when a student is ready to move forward.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20} /> Structured assessments</li>
                  <li><BrainCircuit size={20} /> Skill-based evaluation</li>
                  <li><Target size={20} /> Level Completion Certificate</li>
                  <li><BrainCircuit size={20} /> Clear next step in the journey</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>08 — PROGRESS</div>
                  <div className={styles.mockBody}>
                    <div className={styles.leaderboard}>
                      <div className={styles.rankRow}><span className={styles.gold}>LEARN</span> → <span>PRACTISE</span></div>
                      <div className={styles.rankRow}><span>PLAY</span> → <span>ASSESSMENT</span></div>
                      <div className={styles.rankRow}><span className={styles.gold}>CERTIFICATE</span> → <span className={styles.pts}>NEXT LEVEL ↑</span></div>
                    </div>
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
