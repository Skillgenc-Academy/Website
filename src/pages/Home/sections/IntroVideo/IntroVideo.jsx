import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import styles from './IntroVideo.module.css'

export default function IntroVideo() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ See It In Action</div>
          <h2 className="section-title">
            Discover the Chess<br />
            <span className="gradient-text">Learning Experience</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Watch how our expert coaches, structured curriculum, and interactive platform
            transform students into confident chess players.
          </p>
        </div>

        {/* Video Container */}
        <div className={styles.videoWrapper}>
          <div className={styles.glowRing} />
          <div className={styles.videoContainer}>
            {/* Replace the src with your actual YouTube embed URL */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Skillgenc Chess Academy — Learning Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            />
          </div>

          {/* Floating chess piece decoration */}
          <div className={styles.floatingPiece}>♟</div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p>Ready to experience this for your child?</p>
          <Link to="/book-trial" className="btn btn-gold btn-lg">
            Book a Free Trial
            <Play size={16} fill="currentColor" />
          </Link>
        </div>
      </div>
    </section>
  )
}
