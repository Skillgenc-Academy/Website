import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Camera, X } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './LifeAtSkillgenc.module.css'

const galleryImages = [
  { id: 1, src: '/PHOTO-2026-02-24-14-30-34.jpg', alt: 'Chess Class' },
  { id: 2, src: '/PHOTO-2026-03-20-14-17-10.jpg', alt: 'Chess Practice' },
  { id: 3, src: '/PHOTO-2026-04-03-16-56-32.jpg', alt: 'Tournament' },
  { id: 4, src: '/Poster.jpg', alt: 'Skillgenc Poster' },
  { id: 5, src: '/Schools.jpeg', alt: 'School Program' },
  { id: 6, src: '/WhatsApp Image 2026-02-11 at 6.55.47 PM.jpeg', alt: 'Kids Playing' },
  { id: 7, src: '/02cea94d-eee1-4c56-86b1-3f3c208dd9f8.jpg', alt: 'Academy' },
  { id: 8, src: '/9bbd65a6-5e6d-4b4b-ae74-1c45741d7f2b.jpg', alt: 'Students' },
  { id: 9, src: '/Chesskit.jpeg', alt: 'Chess Kit' },
  { id: 10, src: '/Coach Teaching Classroom.jpg', alt: 'Coach Teaching' },
]

const slides = [
  galleryImages.slice(0, 5),
  galleryImages.slice(5, 10)
]

export default function LifeAtSkillgenc() {
  const [selectedImage, setSelectedImage] = useState(null);

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
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={24}
            slidesPerView={1}
            loop
            className={styles.swiper}
          >
            {slides.map((slideImages, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className={styles.bentoGrid}>
                  {slideImages.map((img, index) => (
                    <div 
                      key={img.id + '-' + slideIndex} 
                      className={`${styles.imageCard} ${styles['item' + (index + 1)]}`}
                      onClick={() => setSelectedImage(img)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img 
                        src={img.src} 
                        alt={img.alt} 
                        className={styles.image}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={styles.imagePlaceholder} style={{ display: 'none' }}>
                        <Camera size={32} className={styles.placeholderIcon} />
                        <span>Upload {img.src}</span>
                      </div>
                      <div className={styles.overlay}>
                        <p className={styles.caption}>{img.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className={styles.modalImage} />
          </div>
        </div>
      )}
    </section>
  )
}
