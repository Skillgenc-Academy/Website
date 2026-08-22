import { Link } from 'react-router-dom'
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
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

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function GoogleReviews() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className="section-tag">✦ Google Reviews</div>
          <h2 className={`section-title ${styles.title}`}>
            Loved by Parents.<br />
            <span className="gradient-text">Trusted by Students.</span>
          </h2>

          {/* Google Rating Summary */}
          <div className={styles.ratingSummary}>
            <div className={styles.ratingBig}>4.9</div>
            <div className={styles.ratingDetails}>
              <Stars count={5} />
              <p className={styles.ratingCount}>Based on 200+ Google Reviews</p>
              <div className={styles.googleBadge}>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Review Carousel */}
        <div className={styles.carouselWrap}>
          <button className={`${styles.navBtn} ${styles.prev}`} id="grPrev">
            <ChevronLeft size={22} />
          </button>
          <button className={`${styles.navBtn} ${styles.next}`} id="grNext">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: '#grPrev', nextEl: '#grNext' }}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={800}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            className={styles.swiper}
          >
            {googleReviews.map((r) => (
              <SwiperSlide key={r.id}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.avatar}>{r.name.charAt(0)}</div>
                    <div>
                      <div className={styles.name}>{r.name}</div>
                      <div className={styles.date}>{r.date}</div>
                    </div>
                    <div className={styles.gLogo}>
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                  <Stars count={r.rating} />
                  <p className={styles.reviewText}>{r.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More Reviews
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
