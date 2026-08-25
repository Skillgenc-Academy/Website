import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../../../data/testimonials'
import styles from './Testimonials.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function Stars({ count = 5 }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#F9D024" color="#F9D024" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ Testimonials</div>
          <h2 className="section-title">
            What Parents <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Real stories from parents who have witnessed their children grow through chess.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.carouselWrap}>
          <button className={`${styles.navBtn} ${styles.prev}`} id="testPrev">
            <ChevronLeft size={22} />
          </button>
          <button className={`${styles.navBtn} ${styles.next}`} id="testNext">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            navigation={{ prevEl: '#testPrev', nextEl: '#testNext' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={800}
            slidesPerView={1}
            spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          loop
          className={styles.swiper}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.quoteIcon}>
                  <Quote size={24} />
                </div>
                <Stars count={t.rating} />
                <p className={styles.text}>"{t.text}"</p>
                <div className={styles.author}>
                  <div className={styles.authorAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.authorName}>{t.name}</div>
                    <div className={styles.authorRole}>{t.role} · {t.child}</div>
                    <div className={styles.location}>{t.location}</div>
                  </div>
                </div>
                <div className={styles.cardGlow} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <Link to="/book-trial" className="btn btn-gold btn-lg">
            Join These Happy Parents - Book a Trial
          </Link>
        </div>
      </div>
    </section>
  )
}
