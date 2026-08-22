import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import styles from './Pricing.module.css'

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('group') // 'group' or 'individual'

  const groupPlans = [
    {
      label: 'STARTER TRACK',
      title: '8 Classes',
      perClass: '₹310',
      payText: 'Pay for 8 classes • Total package: ₹2,500',
      bestFor: 'Trying structured chess coaching before committing long-term.',
      features: [
        '8 live online classes',
        'Personalized level assessment',
        'Structured curriculum',
        'Guided practice and homework'
      ],
      outcome: 'Build confidence, improve basic concepts, and start playing stronger games.'
    },
    {
      label: 'GROWTH TRACK',
      title: '24 Classes',
      perClass: '₹290',
      payText: 'Pay for 24 classes • Total package: ₹7,000',
      bestFor: 'Parents who want visible improvement within a few months.',
      features: [
        'Everything in the Starter Track',
        'Tactical and positional training',
        'One detailed feedback report',
        'Progress Evaluation & Achievement Recognition'
      ],
      outcome: 'Fewer blunders, better planning, and noticeably stronger gameplay.'
    },
    {
      label: 'ELITE TRACK',
      title: '48 Classes',
      perClass: '₹280',
      payText: 'Pay for 48 classes • Total package: ₹13,500',
      bestFor: 'Long-term improvement and tournament-ready performance.',
      features: [
        'Everything in the Growth Track',
        'Three detailed progress reports',
        'Tournament Readiness & Competitive Pathway Guidance'
      ],
      outcome: 'Consistent tournament performance, deeper understanding, and long-term progress.'
    }
  ]

  const individualPlans = [
    {
      label: 'STARTER TRACK',
      title: '8 Classes / mo',
      perClass: '₹850',
      payText: 'Pay for 8 classes • Total package: ₹6,800',
      bestFor: 'Personalized attention to fix specific weaknesses.',
      features: [
        '8 1-on-1 live classes',
        'Deep personalized game analysis',
        'Customized study plan',
        'Targeted homework'
      ],
      outcome: 'Rapid correction of mistakes and highly tailored conceptual growth.'
    },
    {
      label: 'GROWTH TRACK',
      title: '12 Classes / mo',
      perClass: '₹800',
      payText: 'Pay for 12 classes • Total package: ₹9,600',
      bestFor: 'Dedicated students aiming for significant rating jumps.',
      features: [
        'Everything in the Starter Track',
        'Intense opening repertoire building',
        'Detailed monthly progress reports',
        'Direct coach access'
      ],
      outcome: 'Significant rating improvement, advanced tactical vision, and solid openings.'
    },
    {
      label: 'ELITE TRACK',
      title: '16 Classes / mo',
      perClass: '₹750',
      payText: 'Pay for 16 classes • Total package: ₹12,000',
      bestFor: 'Competitive players preparing for state/national tournaments.',
      features: [
        'Everything in the Growth Track',
        'Tournament game preparation & review',
        'Psychological and time management coaching',
      ],
      outcome: 'Mastery over complex positions, tournament readiness, and professional mindset.'
    }
  ]

  const plans = activeTab === 'group' ? groupPlans : individualPlans;

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Pricing & Programs | Skillgenc Chess Academy</title>
        <meta name="description" content="View our transparent pricing, structured curriculum, and a clear path to chess mastery. Programs available for beginners to advanced players." />
      </Helmet>
      
      <section className={styles.hero} style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-tag">✦ Pricing & Programs</div>
          <h1 className="hero-title" style={{ marginTop: '16px' }}>
            Class <span className="gradient-text">Pricing</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '20px auto 0' }}>
            Choose between group sessions or personalized 1-on-1 coaching.
          </p>
        </div>
      </section>

      {/* Pricing Toggle & Cards */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          
          {/* Toggle */}
          <div className={styles.toggleContainer}>
            <button 
              className={`${styles.toggleBtn} ${activeTab === 'group' ? styles.active : ''}`}
              onClick={() => setActiveTab('group')}
            >
              Group Classes
            </button>
            <button 
              className={`${styles.toggleBtn} ${activeTab === 'individual' ? styles.active : ''}`}
              onClick={() => setActiveTab('individual')}
            >
              Individual (1-1)
            </button>
          </div>
          
          {/* Cards */}
          <div className={styles.pricingGrid}>
            {plans.map((plan, idx) => (
              <div key={idx} className={styles.pricingCard}>
                <div className={styles.cardTop}>
                   <div className={styles.planLabel}>{plan.label}</div>
                   <h2 className={styles.planTitle}>{plan.title}</h2>
                   <div className={styles.planPriceWrap}>
                     <span className={styles.planPrice}>{plan.perClass}</span>
                     <span className={styles.planPerClass}> per class</span>
                   </div>
                   <p className={styles.planPayText}>{plan.payText}</p>
                </div>
                
                <div className={styles.planBestFor}>
                  <strong>Best for</strong>
                  <p>{plan.bestFor}</p>
                </div>
                
                <hr className={styles.divider} />
                
                <div className={styles.planFeatures}>
                  <strong>What your child gets</strong>
                  <ul>
                    {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
                
                <div className={styles.planOutcome}>
                  <strong>Expected outcome</strong>
                  <p>{plan.outcome}</p>
                </div>
                
                <div className={styles.planFooter}>
                  <Link to="/book-trial" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Book Free Trial</Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
