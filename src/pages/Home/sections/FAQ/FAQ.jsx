import { useState, useRef, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../../../../data/faqs'
import styles from './FAQ.module.css'

function AccordionItem({ item, isOpen, onClick }) {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isOpen])

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button className={styles.header} onClick={onClick}>
        <span className={styles.question}>{item.question}</span>
        <span className={styles.icon}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={styles.contentWrap} 
        style={{ height }}
      >
        <div ref={contentRef} className={styles.content}>
          {item.answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0].id)

  return (
    <section className={`section ${styles.section}`}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <div className="section-tag" style={{ marginBottom: '16px' }}>✦ FAQ</div>
          <h2 className="section-title">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: '16px' }}>
            Everything you need to know about our programs, methodology, and the 
            chess learning journey.
          </p>
        </div>

        <div className={styles.accordion}>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                item={faq}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
    </section>
  )
}
