import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { coaches } from '../../../../data/coaches'
import styles from './Coaches.module.css'
import 'swiper/css'
import 'swiper/css/navigation'

export default function Coaches() {
  return (
    <section id="coaches" className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ Meet Our Coaches</div>
          <h2 className="section-title">
            Learn from <span className="gradient-text">Champions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Our coaches are FIDE-rated players, state champions, and experienced educators
            passionate about developing the next generation of chess talent.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.swiperWrap}>
          <button className={`${styles.navBtn} ${styles.prev}`} id="coachPrev">
            <ChevronLeft size={22} />
          </button>
          <button className={`${styles.navBtn} ${styles.next}`} id="coachNext">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: '#coachPrev', nextEl: '#coachNext' }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {coaches.map((coach) => (
              <SwiperSlide key={coach.id}>
                <div className={styles.card}>
                  {/* Avatar */}
                  <div className={styles.avatarWrap}>
                    <div className={styles.avatar}>
                      {coach.image ? (
                        <img 
                          src={coach.image} 
                          alt={coach.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <span 
                        className={styles.avatarInitial}
                        style={{ display: coach.image ? 'none' : 'flex' }}
                      >
                        {coach.name.split(' ').map(w => w[0]).join('')}
                      </span>
                      <div className={styles.avatarGlow} />
                    </div>
                    <div className={styles.ratingBadge}>
                      <Star size={12} fill="currentColor" />
                      FIDE Rated
                    </div>
                  </div>

                  {/* Info */}
                  <div className={styles.info}>
                    <h3 className={styles.name}>{coach.name}</h3>
                    <p className={styles.designation}>{coach.designation}</p>
                    <p className={styles.rating}>{coach.rating}</p>
                    <p className={styles.experience}>{coach.experience}</p>
                  </div>

                  {/* Description */}
                  <p className={styles.description}>{coach.description}</p>

                  {/* Achievements */}
                  <div className={styles.achievements}>
                    {coach.achievements.map((a) => (
                      <span key={a} className={styles.achievement}>{a}</span>
                    ))}
                  </div>

                  {/* Specialization */}
                  <div className={styles.spec}>
                    <span className={styles.specLabel}>Specialization</span>
                    <span className={styles.specValue}>{coach.specialization}</span>
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
