import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Gallery.module.css'

const achievements = [
  { id: 1, title: '5th Place (U-9)', student: 'Aadhya', emoji: '🏆', photo: '/student-1.jpg', description: 'Achieved 5th place (5/6) among 51 participants in the 29th Sri Narayana Guru Trophy Open & Age Category Chess Tournament 2026.' },
  { id: 2, title: 'FIDE Rating 1806', student: 'Seyan', emoji: '♟', photo: '/student-2.jpg', description: 'Achieved a FIDE Standard Rating of 1806 through participation in FIDE-rated tournaments, including the Open NK Rapid Jeugd 2026.' },
  { id: 3, title: 'Team Gold Medal', student: 'Arav Agarwal', emoji: '🥇', photo: '/student-3.jpg', description: 'Won the Gold Medal at the 2025 Maritime Scholastic Chess Team Championship.' },
  { id: 4, title: 'Under-11 Runner-up', student: 'Bhavya Chawla', emoji: '🥈', photo: '/student-4.jpg', description: 'Achieved an incredible 2nd position (1st runner-up) in the Under-11 Girls category at the Shri Ajay Aj... Memorial Open Chess Tournament 2025.' },
  { id: 5, title: '1st Place Open', student: 'Dhruv', emoji: '🏆', photo: '/student-5.jpg', description: 'Won 1st place in the Open Classical Tournament in California.' },
  { id: 6, title: 'U-10 1st Prize', student: 'Aniketh Dash', emoji: '🥇', photo: '/student-6.jpg', description: 'Got 1st Prize in the U-10 Category in Germany.' },
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
                  {/* Full Background Image */}
                  <img 
                    src={item.photo} 
                    alt={item.student} 
                    className={styles.bgImage}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback Gradient if image fails to load */}
                  <div className={styles.bgFallback} style={{ display: 'none' }} />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className={styles.overlay} />

                  {/* Floating Emoji Badge */}
                  <div className={styles.floatingBadge}>
                    {item.emoji}
                  </div>

                  {/* Content at Bottom */}
                  <div className={styles.content}>
                    <div className={styles.achievementTag}>{item.title}</div>
                    <h3 className={styles.studentName}>{item.student}</h3>
                    <p className={styles.achievementDesc}>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
