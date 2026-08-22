import { BookOpen, Gamepad2, BrainCircuit, ShieldCheck, Trophy, Target, LineChart } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import styles from './Platform.module.css'

export default function Platform() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Our Platform | Skillgenc Chess Academy</title>
        <meta name="description" content="Discover our chess platform powered by Lichess, featuring interactive studies, puzzle storm, and safe academy tournaments." />
      </Helmet>
      
      <section className={styles.hero}>
        <div className="container">
          <div className="section-tag">✦ Powered by Lichess</div>
          <h1 className="section-title" style={{ marginTop: '16px' }}>
            World-Class Tech,<br/> <span className="gradient-text">Guided by Experts</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
            We leverage <strong>Lichess.org</strong>—the world's fastest and most powerful chess platform—to deliver interactive homework, thrilling puzzles, and safe tournament play.
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
            
            {/* Feature 1: Lichess Studies */}
            <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><BookOpen size={32} /></div>
                <h2>Interactive Coach Studies</h2>
                <p>
                  No more boring PDFs! Our coaches create custom <strong>Lichess Studies</strong>. Kids can play through interactive boards, read coach annotations, and even "guess the move" to test their knowledge.
                </p>
                <ul className={styles.featureList}>
                  <li><Target size={20}/> Move-by-move coach explanations</li>
                  <li><BrainCircuit size={20}/> Cloud Stockfish engine analysis</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>
                    Lichess Study
                  </div>
                  <div className={styles.mockBody}>
                    <div className={styles.lichessStudy}>
                      <div className={styles.board}>
                        <div className={styles.arrowRow}>↗</div>
                      </div>
                      <div className={styles.studyText}>
                        <strong>Coach:</strong> "Find the brilliant fork here!"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Kid Mode & Puzzles */}
            <div className={`${styles.featureRow} ${styles.reverse}`}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><ShieldCheck size={32} /></div>
                <h2>Safe Play & Puzzle Storm</h2>
                <p>
                  With <strong>Lichess Kid Mode</strong>, chat and social features are disabled, ensuring a 100% safe environment. Kids can also race the clock in <strong>Puzzle Storm</strong>—a thrilling, fast-paced way to master tactics!
                </p>
                <ul className={styles.featureList}>
                  <li><ShieldCheck size={20}/> Zero chat, zero distractions</li>
                  <li><Gamepad2 size={20}/> Gamified puzzle racing</li>
                </ul>
              </div>
              <div className={styles.featureVisual}>
                 <div className={styles.mockup}>
                  <div className={styles.mockHeader}>
                    Puzzle Storm
                  </div>
                  <div className={styles.mockBody}>
                    <div className={styles.puzzleStorm}>
                      <div className={styles.combo}>COMBO x5 🔥</div>
                      <div className={styles.scoreBoard}>
                        <span className={styles.score}>Score: 24</span>
                        <span className={styles.timer}>⏱ 0:15</span>
                      </div>
                      <div className={styles.moves}>✅ ✅ ✅ ✅ ✅</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             {/* Feature 3: Tournaments */}
             <div className={styles.featureRow}>
              <div className={styles.featureContent}>
                <div className={styles.iconWrap}><Trophy size={32} /></div>
                <h2>Exclusive Academy Arenas</h2>
                <p>
                  Every week, we host private <strong>Lichess Arena Tournaments</strong> just for Skillgenc students. Kids get to battle their classmates in a fun, competitive environment to claim the top spot on the leaderboard!
                </p>
              </div>
              <div className={styles.featureVisual}>
                <div className={styles.mockup}>
                  <div className={styles.mockHeader}>
                    Skillgenc Arena
                  </div>
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

          </div>
        </div>
      </section>
    </div>
  )
}
