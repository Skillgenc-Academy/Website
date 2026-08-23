import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, CalendarDays, BookOpen, Clock,
  BookMarked, Target, Lightbulb, X, Grid2X2, Flag,
  Puzzle, Star, Trophy, Brain, Shield, Globe, Crosshair
} from 'lucide-react'
import { programs } from '../../../../data/programs'
import chessIllustration from '../../../../assets/chess_pawns.jpg'
import styles from './Programs.module.css'

// Exact icon + color per feature string — matching reference image
const featureConfig = {
  // Beginner
  'Chess rules & fundamentals':       { icon: BookOpen,   bg: '#0153D9', fg: '#fff' },
  'Basic piece movements':            { icon: Crosshair,  bg: '#0153D9', fg: '#fff' },
  'Opening principles':               { icon: Lightbulb,  bg: '#F9D024', fg: '#fff' },
  'Simple tactics & checkmates':      { icon: X,          bg: '#E74C3C', fg: '#fff' },
  'Board awareness':                  { icon: Grid2X2,    bg: '#0153D9', fg: '#fff' },
  'Fun practice games':               { icon: Flag,       bg: '#27AE60', fg: '#fff' },
  // Lower Intermediate
  'Tactical patterns & combinations': { icon: Puzzle,     bg: '#0153D9', fg: '#fff' },
  'Opening theory':                   { icon: BookMarked, bg: '#F9D024', fg: '#fff' },
  'Middlegame planning':              { icon: Brain,      bg: '#0153D9', fg: '#fff' },
  'Basic endgame techniques':         { icon: Target,     bg: '#E74C3C', fg: '#fff' },
  'Puzzle training':                  { icon: Puzzle,     bg: '#0153D9', fg: '#fff' },
  'Friendly tournaments':             { icon: Trophy,     bg: '#27AE60', fg: '#fff' },
  // Upper Intermediate
  'Advanced tactical motifs':         { icon: Puzzle,     bg: '#0153D9', fg: '#fff' },
  'Positional chess concepts':        { icon: Brain,      bg: '#013D96', fg: '#fff' },
  'Opening repertoire building':      { icon: BookMarked, bg: '#F9D024', fg: '#fff' },
  'Complex endgames':                 { icon: Star,       bg: '#E74C3C', fg: '#fff' },
  'Game analysis':                    { icon: Target,     bg: '#0153D9', fg: '#fff' },
  'Competitive tournament prep':      { icon: Trophy,     bg: '#27AE60', fg: '#fff' },
  // Advanced
  'Deep opening preparation':         { icon: BookMarked, bg: '#013D96', fg: '#fff' },
  'Advanced positional understanding':{ icon: Brain,      bg: '#0153D9', fg: '#fff' },
  'Endgame mastery':                  { icon: Star,       bg: '#F9D024', fg: '#fff' },
  'Competitive tournament strategy':  { icon: Trophy,     bg: '#27AE60', fg: '#fff' },
  'Psychological preparation':        { icon: Shield,     bg: '#0153D9', fg: '#fff' },
  'Performance analysis':             { icon: Target,     bg: '#E74C3C', fg: '#fff' },
  // FIDE
  'FIDE-rated tournament preparation':{ icon: Trophy,     bg: '#F9D024', fg: '#fff' },
  'Grandmaster-level opening theory': { icon: Star,       bg: '#013D96', fg: '#fff' },
  'Advanced calculation training':    { icon: Brain,      bg: '#0153D9', fg: '#fff' },
  'Elite endgame techniques':         { icon: Shield,     bg: '#013D96', fg: '#fff' },
  'Mental resilience coaching':       { icon: Lightbulb,  bg: '#F9D024', fg: '#fff' },
  'International tournament guidance':{ icon: Globe,      bg: '#27AE60', fg: '#fff' },
}

export default function Programs() {
  const [active, setActive] = useState(0)
  const prog = programs[active]

  return (
    <section id="programs" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ Programs</div>
          <h2 className="section-title">
            Your <span className="gradient-text">Chess Journey</span> Starts Here
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Five structured levels designed to take any student from absolute beginner to
            FIDE-rated competitive player.
          </p>
          <div className="divider" />
        </div>

        {/* Tab Selector */}
        <div className={styles.tabs}>
          {programs.map((p, i) => (
            <button
              key={p.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''} ${p.premium ? styles.tabPremium : ''}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabPiece}>{p.piece}</span>
              <span className={styles.tabLabel}>{p.level}</span>
              {p.premium && <span className={styles.premiumBadge}>ELITE</span>}
            </button>
          ))}
        </div>

        {/* Active Program Card */}
        <div className={`${styles.card} ${prog.premium ? styles.cardPremium : ''}`} key={prog.id}>

          {/* LEFT PANEL */}
          <div className={styles.cardLeft}>

            {/* Piece + Title */}
            <div className={styles.headerRow}>
              <div className={styles.pieceCircle}>
                <span className={styles.bigPiece}>{prog.piece}</span>
              </div>
              <div className={styles.titleBlock}>
                <div className={styles.pieceName}>{prog.pieceName} Level</div>
                <h3 className={styles.levelTitle}>{prog.level}</h3>
                <p className={styles.tagline}>"{prog.tagline}"</p>
              </div>
            </div>

            <p className={styles.description}>
              The perfect start for young minds! Learn the basics of chess in a fun, interactive and engaging way.
            </p>

            {/* Metric Boxes */}
            <div className={styles.metrics}>
              <div className={styles.metricBox} style={{ background: 'rgba(1,83,217,0.06)', borderColor: 'rgba(1,83,217,0.18)' }}>
                <div className={styles.metricIcon} style={{ background: 'rgba(1,83,217,0.12)' }}>
                  <CalendarDays size={18} color="#0153D9" />
                </div>
                <div className={styles.metricText}>
                  <span className={styles.metricValue}>{prog.duration}</span>
                  <span className={styles.metricLabel}>Duration</span>
                </div>
              </div>

              <div className={styles.metricBox} style={{ background: 'rgba(249,208,36,0.08)', borderColor: 'rgba(249,208,36,0.3)' }}>
                <div className={styles.metricIcon} style={{ background: 'rgba(249,208,36,0.2)' }}>
                  <BookOpen size={18} color="#D4A000" />
                </div>
                <div className={styles.metricText}>
                  <span className={styles.metricValue}>{prog.modules}</span>
                  <span className={styles.metricLabel}>Modules</span>
                </div>
              </div>

              <div className={styles.metricBox} style={{ background: 'rgba(39,174,96,0.07)', borderColor: 'rgba(39,174,96,0.25)' }}>
                <div className={styles.metricIcon} style={{ background: 'rgba(39,174,96,0.15)' }}>
                  <Clock size={18} color="#27AE60" />
                </div>
                <div className={styles.metricText}>
                  <span className={styles.metricValue}>{prog.sessions}</span>
                  <span className={styles.metricLabel}>Sessions</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctas}>
              <Link to="/pricing" className={`btn btn-outline-blue ${styles.ctaBtn}`}>
                View Curriculum <ArrowRight size={15} />
              </Link>
              <Link to="/book-trial" className={`btn ${prog.premium ? 'btn-gold' : 'btn-primary'} ${styles.ctaBtn}`}>
                <CalendarDays size={15} />
                Book Free Trial
              </Link>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className={styles.cardRight}>
            <div className={styles.featuresHeader}>
              <h4 className={styles.featuresTitle}>What You'll Learn</h4>
              <div className={styles.featuresDivider} />
            </div>

            <ul className={styles.featureList}>
              {prog.features.map((f) => {
                const cfg = featureConfig[f] || { icon: Star, bg: '#0153D9', fg: '#fff' }
                const Icon = cfg.icon
                return (
                  <li key={f} className={styles.featureItem}>
                    <div
                      className={styles.featureIconCircle}
                      style={{ background: cfg.bg }}
                    >
                      <Icon size={15} color={cfg.fg} strokeWidth={2.2} />
                    </div>
                    <span>{f}</span>
                  </li>
                )
              })}
            </ul>

            {/* Chess piece illustration */}
            <div className={styles.illustrationWrap}>
              <img
                src={chessIllustration}
                alt="Chess pieces on board"
                className={styles.illustration}
              />
            </div>
          </div>

          {prog.premium && <div className={styles.premiumGlow} />}
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {programs.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Program ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
