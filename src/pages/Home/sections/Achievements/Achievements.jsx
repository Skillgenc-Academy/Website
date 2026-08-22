import { useEffect, useRef, useState } from 'react'
import styles from './Achievements.module.css'

const stats = [
  { value: 8000, suffix: '+', label: 'Students Trained', piece: '♟' },
  { value: 50, suffix: '+', label: 'Expert Coaches', piece: '♛' },
  { value: 500, suffix: '+', label: 'Tournament Participants', piece: '♞' },
  { value: 1000, suffix: '+', label: 'Awards & Achievements', piece: '♚' },
]

function CountUp({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export default function Achievements() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`section ${styles.section}`} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bg}>
        <div className={styles.bgGlow} />
        <div className={styles.bgText}>♚</div>
      </div>

      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">✦ Our Impact</div>
          <h2 className="section-title" style={{ color: '#000000' }}>
            Numbers That <span style={{ color: '#F9D024' }}>Tell Our Story</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            A decade of chess education, thousands of transformed students, and a growing
            community of competitive players across India.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.card}>
              <div className={styles.piece}>{s.piece}</div>
              <div className={styles.number}>
                <CountUp target={s.value} suffix={s.suffix} isVisible={visible} />
              </div>
              <div className={styles.label}>{s.label}</div>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
