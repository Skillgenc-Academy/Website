import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './LifeAtSkillgenc.module.css'

const galleryImages = [
  { id: 1, src: '/life-1.jpg', alt: 'Students playing chess in classroom' },
  { id: 2, src: '/life-2.jpg', alt: 'Coach explaining a chess puzzle' },
  { id: 3, src: '/life-3.jpg', alt: 'Local chess tournament at the academy' },
  { id: 4, src: '/life-4.jpg', alt: 'Kids holding their trophies' },
  { id: 5, src: '/life-5.jpg', alt: 'Online chess coaching session' },
  { id: 6, src: '/life-6.jpg', alt: 'Friendly blitz game between friends' },
]

export default function LifeAtSkillgenc() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">✦ Our Academy</div>
          <h2 className="section-title">
            Life at <span className="gradient-text">Skillgenc</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Take a peek into our vibrant chess community, from engaging classroom sessions to intense tournament battles.
          </p>
          <div className="divider" />
        </div>

        <div className={styles.carouselWrap}>
          <button className={`${styles.navBtn} ${styles.prev}`} id="lifePrev">
            <ChevronLeft size={22} />
          </button>
          <button className={`${styles.navBtn} ${styles.next}`} id="lifeNext">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: '#lifePrev', nextEl: '#lifeNext' }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            className={styles.swiper}
          >
            {galleryImages.map((img) => (
              <SwiperSlide key={img.id}>
                <div className={styles.imageCard}>
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className={styles.image}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback Placeholder if image is missing */}
                  <div className={styles.imagePlaceholder} style={{ display: 'none' }}>
                    <Camera size={32} className={styles.placeholderIcon} />
                    <span>Upload {img.src}</span>
                  </div>
                  <div className={styles.overlay}>
                    <p className={styles.caption}>{img.alt}</p>
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
