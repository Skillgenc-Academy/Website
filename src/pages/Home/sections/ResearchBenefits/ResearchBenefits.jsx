import { Link } from 'react-router-dom'
import styles from './ResearchBenefits.module.css'

export default function ResearchBenefits() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">✦ The Science of Chess</div>
          <h2 className="section-title">
            Unlock Your Child's<br />
            <span className="gradient-text">True Potential</span>
          </h2>
        </div>
        
        <img 
          src="/research-benefits.png" 
          alt="Research Benefits of Chess" 
          style={{ 
            display: 'block', 
            margin: '0 auto', 
            maxWidth: '1000px', 
            width: '100%', 
            height: 'auto', 
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
          }} 
        />

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/book-trial" className="btn btn-gold btn-lg">
            Unlock Their Potential - Book a Trial
          </Link>
        </div>
      </div>
    </section>
  )
}

