import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './ResearchBenefits.module.css'

export default function ResearchBenefits() {
  const [swiper, setSwiper] = useState(null);

  const cards = [
    {
      title: "CHESS PROMOTES BRAIN GROWTH",
      content: [
        "What if a simple game could physically grow your child’s brain? Studies suggest that playing chess stimulates the growth of dendrites—branch-like structures in the brain that transmit information between neurons.",
        "When your child plays chess, they’re essentially working out their brain. The result? An increase in the brain’s ability to process and adapt to information."
      ],
      color: "#00cec9",
      backdrop: "#ff9ff3"
    },
    {
      title: "HELPS MANAGE ADHD SYMPTOMS",
      content: [
        "For children struggling with focus and attention, chess can work wonders. A 2016 study revealed that chess helped children with ADHD reduce inattentiveness by 41%, as it requires sustained concentration and thoughtful decision-making.",
        "Parents of children with ADHD often notice significant improvements in their ability to focus for longer periods, stay calm under pressure, and develop self-discipline."
      ],
      color: "#2e86de",
      backdrop: "#ff9f43"
    },
    {
      title: "INCREASES CREATIVITY",
      content: [
        "<b>Unleash your creative genius!</b>",
        "Playing chess activates the brain's right hemisphere, sparking originality and imaginative problem-solving. A four-year study by Robert Ferguson involving students revealed that chess players showed the highest growth in originality."
      ],
      color: "#6c5ce7",
      backdrop: "#a29bfe"
    },
    {
      title: "PROBLEM-SOLVING SKILLS",
      content: [
        "Life is full of challenges, and chess is the ultimate training ground for solving them.",
        "A 1992 Canadian study split students into groups: standard math, and math with chess instruction.",
        "<b>Remarkably, the chess group's scores skyrocketed from 62% to 81.2%, outperforming the standard group by 21.46%!</b>"
      ],
      color: "#e84393",
      backdrop: "#fd79a8"
    },
    {
      title: "EXERCISES BOTH SIDES OF THE BRAIN",
      content: [
        "Think of chess as a full-brain workout that strengthens your mind from every angle.",
        "A German study compared brain activity, revealing that experienced chess players activate both hemispheres to process patterns and calculate moves faster. This leads to improved <b>logical reasoning and visual-spatial skills</b>."
      ],
      color: "#00cec9",
      backdrop: "#81ecec"
    },
    {
      title: "CHESS IMPROVES MEMORY",
      content: [
        "Do you often wish your child had a better memory or was more organized? Chess might be the answer!",
        "Studies have shown that chess players develop stronger memory skills, as the game requires them to remember moves, anticipate patterns, and plan strategies.",
        "A 1985 study demonstrated that students who played chess improved their <b>grades in all subjects</b>."
      ],
      color: "#0984e3",
      backdrop: "#48dbfb"
    }
  ]

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag" style={{ color: '#F9D024', background: '#fff9db', border: '1px solid #F9D024' }}>
            ✦ THE SCIENCE OF CHESS
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1e293b' }}>
            Unlock Your Child's<br />
            <span style={{ color: '#0153D9', fontWeight: '900', textShadow: '0 4px 12px rgba(1, 83, 217, 0.2)' }}>
              True Potential
            </span>
          </h2>
        </div>
        
        <div className={styles.grid}>
          {/* Left Column: Brain Image */}
          <div className={styles.leftCol}>
            <img src="/benefits/brain.png" alt="Brain Growth" className={styles.brainImage} />
          </div>

          {/* Right Column: Swiper Carousel */}
          <div className={styles.rightCol}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={setSwiper}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className={styles.swiperContainer}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.cardContainer}>
                    <div className={styles.cardBackdrop} style={{ backgroundColor: card.backdrop }}></div>
                    <div className={styles.card} style={{ backgroundColor: card.color }}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <hr className={styles.cardDivider} />
                      <div className={styles.cardContent}>
                        {card.content.map((text, i) => (
                          <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Custom Navigation Arrows */}
              <button className={styles.swiperPrev} onClick={() => swiper?.slidePrev()}>
                <ChevronLeft size={28} strokeWidth={2.5} />
              </button>
              <button className={styles.swiperNext} onClick={() => swiper?.slideNext()}>
                <ChevronRight size={28} strokeWidth={2.5} />
              </button>
            </Swiper>
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/book-trial" className="btn btn-gold btn-lg">
            Unlock Their Potential - Book a Trial
          </Link>
        </div>
      </div>
    </section>
  )
}
