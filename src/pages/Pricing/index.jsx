import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ChevronUp } from 'lucide-react'
import styles from './Pricing.module.css'

const faqs = [
  {
    question: "Are there any registration or additional fees?",
    answer: "No. There are no registration fees or additional charges. The price shown for each package is inclusive of everything."
  },
  {
    question: "How long is my package valid?",
    answer: "Your package is valid for the number of sessions included in the package.\nFor example, an 8-class package is valid for 8 classes, while a 24-class package is valid for 24 classes."
  },
  {
    question: "What happens if my child misses a group class?",
    answer: "If a student misses a scheduled group class, we provide a make-up session for that missed class."
  },
  {
    question: "What happens if my child misses an individual 1-on-1 class?",
    answer: "1-on-1 classes offer greater flexibility. If a student is unable to attend a scheduled session, the class can be rescheduled based on mutual availability."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Yes. You can upgrade your package if you decide that your child would benefit from additional classes. Our team can help you with the available options."
  },
  {
    question: "Can I switch from group classes to 1-on-1 classes?",
    answer: "Yes. You can switch from group classes to 1-on-1 learning, subject to availability."
  },
  {
    question: "Do you offer sibling discounts?",
    answer: "Yes. We offer special sibling pricing for families enrolling more than one child. Speak to our team to know the applicable offer."
  },
  {
    question: "How do I know which program is right for my child?",
    answer: "You don't have to decide on your own. Based on your child's demo session, current chess level and learning requirements, our team can recommend the most suitable learning format."
  }
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('group') // 'group' or 'individual'
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  const groupPlans = [
    {
      theme: 'blue',
      isPopular: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 21 h 16" />
          <path d="M 6 21 v -4 l -2 -3 V 9 h 16 v 5 l -2 3 v 4" />
          <path d="M 4 9 V 3 h 3 v 3 h 3 V 3 h 4 v 3 h 3 V 3 h 3 v 6" />
          <path d="M 5 14 h 14" />
        </svg>
      ),
      label: 'FOUNDATION TRACK',
      title: '8 Classes',
      perClass: '₹310',
      payText: 'Pay for 8 classes • Total package: ₹2,500',
      bestFor: 'Taking the first step towards structured and engaging chess learning.',
      features: [
        '8 live, instructor-led chess classes',
        'Personalised level assessment',
        'Structured chess curriculum',
        'Guided practice and problem-solving',
        'Interactive, game-based learning'
      ],
      outcome: 'A strong start to chess learning, with better understanding, confidence and clarity while playing.'
    },
    {
      theme: 'green',
      isPopular: true,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 21 h 16" />
          <path d="M 19 21 Q 23 10 16 2 L 13 4 L 9 4 L 2 9 L 3 13 L 8 14 Q 3 18 5 21" />
          <circle cx="9" cy="8" r="1.5" />
        </svg>
      ),
      label: 'GROWTH TRACK',
      title: '24 Classes',
      perClass: '₹290',
      payText: 'Pay for 24 classes • Total package: ₹7,000',
      bestFor: 'Parents looking for consistent learning and visible progress over a two-to-three month journey.',
      features: [
        '24 live, instructor-led chess classes',
        'Everything covered in the Foundation Track',
        'Deeper tactical and positional training',
        'Regular practice and game-based learning',
        'Progress evaluation and feedback',
        'Greater opportunity to apply and reinforce concepts'
      ],
      outcome: 'Stronger chess understanding, improved decision-making, better game planning and more consistent gameplay.'
    },
    {
      theme: 'purple',
      isPopular: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 21 h 16" />
          <path d="M 5 21 v -5 l -3 -7 l 6 3 l 4 -9 l 4 9 l 6 -3 l -3 7 v 5" />
          <circle cx="2" cy="8" r="1.5" />
          <circle cx="12" cy="2" r="1.5" />
          <circle cx="22" cy="8" r="1.5" />
          <path d="M 5 16 h 14" />
        </svg>
      ),
      label: 'PERFORMANCE TRACK',
      title: '48 Classes',
      perClass: '₹280',
      payText: 'Pay for 48 classes • Total package: ₹13,500',
      bestFor: 'Parents looking for deeper learning, continued development and a more comprehensive chess journey.',
      features: [
        '48 live, instructor-led chess classes',
        'Everything covered in the Growth Track',
        'Advanced tactical and strategic training',
        'Deeper game analysis and performance feedback',
        'Progress tracking and detailed evaluations',
        'Tournament readiness and competitive pathway guidance'
      ],
      outcome: 'Deeper chess understanding, stronger and more consistent gameplay, greater confidence in competitive situations, and continuous scope for improvement.'
    }
  ]

  const individualPlans = [
    {
      theme: 'blue',
      isPopular: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 21 h 16" />
          <path d="M 6 21 v -4 l -2 -3 V 9 h 16 v 5 l -2 3 v 4" />
          <path d="M 4 9 V 3 h 3 v 3 h 3 V 3 h 4 v 3 h 3 V 3 h 3 v 6" />
          <path d="M 5 14 h 14" />
        </svg>
      ),
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
      theme: 'green',
      isPopular: true,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 21 h 16" />
          <path d="M 19 21 Q 23 10 16 2 L 13 4 L 9 4 L 2 9 L 3 13 L 8 14 Q 3 18 5 21" />
          <circle cx="9" cy="8" r="1.5" />
        </svg>
      ),
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
      theme: 'purple',
      isPopular: false,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 4 21 h 16" />
          <path d="M 5 21 v -5 l -3 -7 l 6 3 l 4 -9 l 4 9 l 6 -3 l -3 7 v 5" />
          <circle cx="2" cy="8" r="1.5" />
          <circle cx="12" cy="2" r="1.5" />
          <circle cx="22" cy="8" r="1.5" />
          <path d="M 5 16 h 14" />
        </svg>
      ),
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
              <div key={idx} className={`${styles.pricingCard} ${plan.isPopular ? styles.popularCard : ''} ${styles[plan.theme]}`}>
                {plan.isPopular && (
                  <div className={styles.popularBadge}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    MOST POPULAR
                  </div>
                )}
                <div className={styles.cardTop}>
                   <div className={styles.cardHeaderFlex}>
                     <div className={styles.planIconWrapper}>
                       {plan.icon}
                     </div>
                     <div className={styles.planLabelPill}>{plan.label}</div>
                   </div>
                   <h2 className={styles.planTitle}>{plan.title}</h2>
                   <div className={styles.planPriceWrap}>
                     <span className={styles.planPrice}>{plan.perClass}</span>
                     <span className={styles.planPerClass}> per class</span>
                   </div>
                   <p className={styles.planPayText}>{plan.payText}</p>
                </div>
                
                <div className={styles.planSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    </div>
                    <strong>Best for</strong>
                  </div>
                  <p>{plan.bestFor}</p>
                </div>
                
                <div className={styles.planSection}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <strong>What Your Child Gets</strong>
                  </div>
                  <ul className={styles.featuresList}>
                    {plan.features.map((f, i) => (
                      <li key={i}>
                        <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${styles.planSection} ${styles.noMarginBottom}`}>
                  <div className={styles.sectionHeader}>
                    <div className={styles.sectionIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                    </div>
                    <strong>Expected Outcome</strong>
                  </div>
                  <p>{plan.outcome}</p>
                </div>
                
                <div className={styles.planFooter}>
                  <Link to="/book-trial" className={`btn btn-primary ${styles.planBtn}`}>Book Free Trial</Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Comparison Section */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">✦ Comparison</div>
            <h2 className="section-title">Which One Is Right for Your Child?</h2>
          </div>
          
          <div className={styles.comparisonGrid}>
            <div className={`${styles.compCard} ${styles.compCardBlue}`}>
              <div className={styles.compCardHeader}>
                <h3>Group Classes</h3>
                <div className={styles.compCardBadge}>Most Chosen</div>
              </div>
              <ul>
                {[
                  'Learn with peers', 
                  'Interactive group environment', 
                  'Collaborative learning', 
                  'Structured progression', 
                  'More affordable per class', 
                  'Great for regular chess learning'
                ].map((text, i) => (
                  <li key={i}>
                    <svg className={styles.checkBlue} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={`${styles.compCard} ${styles.compCardGold}`}>
              <div className={styles.compCardHeader}>
                <h3>1-on-1 Classes</h3>
              </div>
              <ul>
                {[
                  'Learn at your own pace', 
                  'Dedicated individual attention', 
                  'Personalised learning', 
                  'Flexible scheduling', 
                  'Focused improvement', 
                  'Ideal for specific learning goals'
                ].map((text, i) => (
                  <li key={i}>
                    <svg className={styles.checkGold} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles.compCta}>
            <h3>Still not sure? Start with a demo session.</h3>
            <p>Based on your child's current level, learning needs and experience, our team can help you choose the most suitable option.</p>
            <Link to="/book-trial" className="btn btn-outline">
              Book a Demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">✦ FAQ</div>
            <h2 className="section-title">Pricing FAQs</h2>
          </div>
          
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <h3>{faq.question}</h3>
                  <div className={styles.faqIcon}>
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2>Ready to Make the Next Move?</h2>
          <p>Give your child the opportunity to learn, think and grow through chess.</p>
          <Link to="/book-trial" className="btn btn-primary" style={{marginTop: '24px'}}>
            Book a Demo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
