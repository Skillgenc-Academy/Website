import { Star, ExternalLink } from 'lucide-react'
import { googleReviews } from '../../../../data/testimonials'
import styles from './GoogleReviews.module.css'

function Stars({ count = 5 }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#F9D024" color="#F9D024" />
      ))}
    </div>
  )
}

const AVATAR_COLORS = [
  ['#4285F4', '#0F52BA'],
  ['#34A853', '#1A7A32'],
  ['#EA4335', '#B31412'],
  ['#FBBC05', '#C8960C'],
  ['#9B59B6', '#6C3483'],
  ['#16A085', '#0E6655'],
  ['#E67E22', '#CA6F1E'],
  ['#2980B9', '#1A5276'],
]

export default function GoogleReviews() {
  const row1 = googleReviews.slice(0, Math.ceil(googleReviews.length / 2))
  const row2 = googleReviews.slice(Math.ceil(googleReviews.length / 2))

  const renderCard = (r, idx) => {
    const [from, to] = AVATAR_COLORS[idx % AVATAR_COLORS.length]
    const initials = r.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    return (
      <div key={`${r.id}-${idx}`} className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
            {initials}
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.name}>{r.name}</div>
            <Stars count={r.rating} />
          </div>
          <div className={styles.gLogo}>
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <p className={styles.reviewText}>"{r.text}"</p>
      </div>
    )
  }

  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bgGradient}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>What Our Students' Parents Say</h1>
          <h2 className={styles.title}>Real reviews from real families on Google</h2>

          <div className={styles.ratingSummary}>
            <Stars count={5} />
            <span className={styles.ratingText}><strong>4.8/5</strong> &middot; 391 Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Marquee Carousel */}
      <div className={styles.marqueeContainer}>
        {/* Row 1 */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrack}>
            {row1.map((r, i) => renderCard(r, i))}
            {row1.map((r, i) => renderCard(r, i + row1.length))}
          </div>
        </div>
        
        {/* Row 2 (Reverse) */}
        <div className={styles.marqueeRow} style={{ marginTop: '24px' }}>
          <div className={`${styles.marqueeTrack} ${styles.reverse}`}>
            {row2.map((r, i) => renderCard(r, i))}
            {row2.map((r, i) => renderCard(r, i + row2.length))}
          </div>
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* CTA */}
        <div className={styles.cta}>
          <a
            href="https://www.google.com/maps/search/Skillgenc+Chess+Academy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Reviews on Google
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
