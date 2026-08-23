import { useState } from 'react'
import { Calendar, User, Mail, Phone, ChevronRight, Play } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PhoneInputLib from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styles from './BookTrial.module.css'

const PhoneInput = PhoneInputLib?.default || PhoneInputLib;

export default function BookTrial() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    age: ''
  })
  
  const [status, setStatus] = useState('idle')

  // Replace this URL with your Google Apps Script Web App URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyOPuOi7teoebRUy4N2M61FyRQabKazWRua27lnTgH2X3ooTzp00JkOEH-vzZ-bUoG36g/exec'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const formParams = new URLSearchParams()
      for (const key in formData) {
        formParams.append(key, formData[key])
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString()
      })
      setStatus('success')
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h2>Trial Booked Successfully!</h2>
            <p>
              Thank you for choosing Skillgenc Chess Academy. One of our coaches will 
              contact you shortly on the provided phone number to confirm the time 
              and date for the trial session.
            </p>
            <button className="btn btn-primary" onClick={() => window.location.href='/'}>
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Book a Free Trial | Skillgenc Chess Academy</title>
        <meta name="description" content="Book a free, zero-obligation trial chess session. Our expert coaches will evaluate your child's level and recommend the perfect learning path." />
      </Helmet>
      <div className={styles.split}>
        {/* Left: Info & Graphics */}
        <div className={styles.leftPanel}>
          <div className={styles.leftContent}>
            <div className="section-tag">✦ Free Trial Session</div>
            <h1 className="hero-title" style={{ marginTop: '16px', fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
              Your Child's First Step to <br />
              <span className="gradient-text">Mastery</span>
            </h1>
            
            <p className={styles.subtitle}>
              Book a free, zero-obligation trial session where our expert coaches will evaluate 
              your child's level and recommend the perfect learning path.
            </p>

            <div className={styles.steps}>
              <h3>What Happens Next?</h3>
              <div className={styles.stepList}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>1</div>
                  <div>
                    <h4>Book Trial</h4>
                    <p>Fill out the form with your details.</p>
                  </div>
                </div>
                <div className={styles.stepLine} />
                <div className={styles.step}>
                  <div className={styles.stepNum}>2</div>
                  <div>
                    <h4>Meet Coach</h4>
                    <p>Attend a 60-min interactive session.</p>
                  </div>
                </div>
                <div className={styles.stepLine} />
                <div className={styles.step}>
                  <div className={styles.stepNum}>3</div>
                  <div>
                    <h4>Skill Assessment</h4>
                    <p>Get a detailed evaluation report.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.bgGlow} />
          <div className={styles.bgPiece}>♛</div>
        </div>

        {/* Right: Form */}
        <div className={styles.rightPanel} id="booking-form">
          <div className={styles.formWrap}>
            <h2 className={styles.formTitle}>Book Your Slot</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Parent Name</label>
                  <div className={styles.inputWrap}>
                    <User size={18} className={styles.inputIcon} />
                    <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Child Name</label>
                  <div className={styles.inputWrap}>
                    <User size={18} className={styles.inputIcon} />
                    <input type="text" name="childName" value={formData.childName} onChange={handleChange} placeholder="Jane Doe" />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <PhoneInput
                    country={'in'}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    enableSearch={true}
                    searchPlaceholder="Search country..."
                    inputProps={{
                      name: 'phone',
                      required: true,
                    }}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email Address</label>
                  <div className={styles.inputWrap}>
                    <Mail size={18} className={styles.inputIcon} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Age</label>
                  <div className={styles.inputWrap}>
                    <User size={18} className={styles.inputIcon} />
                    <input type="number" name="age" min="4" max="18" value={formData.age} onChange={handleChange} required placeholder="E.g. 10" />
                  </div>
                </div>
              </div>

              <button type="submit" className={`btn btn-gold btn-lg ${styles.submitBtn}`} disabled={status === 'loading'}>
                {status === 'loading' ? 'Booking...' : 'Book My Free Trial'}
                <ChevronRight size={20} />
              </button>
              {status === 'error' && (
                <p style={{ color: '#ff5f56', fontSize: '0.9rem', marginTop: '10px' }}>An error occurred. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
