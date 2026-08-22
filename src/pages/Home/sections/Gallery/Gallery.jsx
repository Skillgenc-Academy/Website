import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Gallery.module.css'

const achievements = [
  { id: 1, title: 'State Under-12 Champion', student: 'Rohan K.', emoji: '🏆', photo: '/student-1.jpg' },
  { id: 2, title: 'FIDE Rating 1850 Achieved', student: 'Aisha M.', emoji: '♟', photo: '/student-2.jpg' },
  { id: 3, title: 'National Semi-Finalist', student: 'Vikram S.', emoji: '🥈', photo: '/student-3.jpg' },
  { id: 4, title: 'Inter-School Gold Medal', student: 'Neha P.', emoji: '🏅', photo: '/student-4.jpg' },
  { id: 5, title: 'District Blitz Winner', student: 'Arjun D.', emoji: '⚡', photo: '/student-5.jpg' },
  { id: 6, title: 'Youngest Candidate Master', student: 'Kabir R.', emoji: '🌟', photo: '/student-6.jpg' },
]

export default function Gallery() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ Hall of Fame</div>
          <h2 className="section-title">
            Student <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Celebrating the hard work, dedication, and tournament successes of our rising chess stars.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.carouselWrap}>
          <button className={`${styles.navBtn} ${styles.prev}`} id="galPrev">
            <ChevronLeft size={22} />
          </button>
          <button className={`${styles.navBtn} ${styles.next}`} id="galNext">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: '#galPrev', nextEl: '#galNext' }}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            className={styles.swiper}
          >
            {achievements.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
                  <div className={styles.imageWrap}>
                    <img 
                      src={item.photo} 
                      alt={item.student} 
                      className={styles.studentPhoto}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className={styles.imagePlaceholder} style={{ display: 'none' }}>
                      <span className={styles.emoji}>{item.emoji}</span>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.student}>{item.student}</p>
                  </div>
                  <div className={styles.cardGlow} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
