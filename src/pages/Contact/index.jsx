import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PhoneInputLib from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styles from './Contact.module.css'

const PhoneInput = PhoneInputLib?.default || PhoneInputLib;

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    age: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error

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
        mode: 'no-cors', // Important for Google Scripts
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString()
      })
      
      setStatus('success')
      setFormData({
        parentName: '',
        childName: '',
        phone: '',
        email: '',
        age: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Contact Us | Skillgenc Chess Academy</title>
        <meta name="description" content="Get in touch with Skillgenc Chess Academy. Reach out to our academies in Bengaluru, Hyderabad, or Pune for inquiries and chess trial bookings." />
      </Helmet>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="hero-title">
            <span className="gradient-text">Contact Us</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            
            {/* Left: Form */}
            <div className={styles.formCard}>
              <h3>Send us a message</h3>
              {status === 'success' ? (
                <div style={{ padding: '20px', background: 'rgba(39, 201, 63, 0.1)', color: '#27c93f', borderRadius: '12px', border: '1px solid #27c93f' }}>
                  Thank you! Your message has been sent successfully. We will contact you soon.
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <div className={styles.inputGroup}>
                      <label>Parent Name</label>
                      <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} required placeholder="John Doe" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Child Name</label>
                      <input type="text" name="childName" value={formData.childName} onChange={handleChange} placeholder="Jane Doe" />
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
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.inputGroup}>
                      <label>Age</label>
                      <input type="number" name="age" min="4" max="18" value={formData.age} onChange={handleChange} required placeholder="E.g. 10" />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Submitting...' : 'Submit'}
                    <Send size={16} />
                  </button>
                  {status === 'error' && (
                    <p style={{ color: '#ff5f56', fontSize: '0.9rem', marginTop: '10px' }}>An error occurred. Please try again later.</p>
                  )}
                </form>
              )}
            </div>

            {/* Right: Info */}
            <div className={styles.infoCol}>
              <div className={styles.contactMethods}>
                <div className={styles.method}>
                  <div className={styles.iconWrap}><Phone size={20} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p style={{ fontSize: '1rem' }}>+91 9008568002</p>
                    <p style={{ fontSize: '1rem' }}>+91 8074555644</p>
                  </div>
                </div>
                <div className={styles.method}>
                  <div className={styles.iconWrap}><Mail size={20} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p style={{ fontSize: '1rem' }}>admin@skillgenc.com</p>
                    <p style={{ fontSize: '1rem' }}>skillgenc@gmail.com</p>
                  </div>
                </div>
              </div>

              <h3 className={styles.locationsTitle}>Our Academies</h3>
              <div className={styles.locations}>
                <div className={styles.locationCard}>
                  <div className={styles.locIcon}><MapPin size={24} /></div>
                  <div>
                    <h4>Bengaluru</h4>
                    <p>16th Main Rd, 4th T Block East, Pattabhirama Nagar, Jayanagar, Bengaluru, Karnataka 560041</p>
                  </div>
                </div>
                <div className={styles.locationCard}>
                  <div className={styles.locIcon}><MapPin size={24} /></div>
                  <div>
                    <h4>Hyderabad</h4>
                    <p>5th Floor, Vasavi Mpm Grand, 602/B2, Ameerpet, Hyderabad, Telangana 500038</p>
                  </div>
                </div>
                <div className={styles.locationCard}>
                  <div className={styles.locIcon}><MapPin size={24} /></div>
                  <div>
                    <h4>Pune</h4>
                    <p>2nd floor, Jewel Square mall, Koregaon Rd, near hotel taj vivanta, Koregaon Park, Pune, Maharashtra 411001</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
