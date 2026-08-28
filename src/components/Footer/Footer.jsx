import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import styles from './Footer.module.css'
import knightLogo from '../../assets/knight-logo-transparent.png'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Platform', href: '/platform' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Coaches', href: '/#coaches' },
  { label: 'Contact Us', href: '/contact' },
]

const programLinks = [
  { label: 'Beginner', href: '/pricing' },
  { label: 'Lower Intermediate', href: '/pricing' },
  { label: 'Upper Intermediate', href: '/pricing' },
  { label: 'Advanced', href: '/pricing' },
  { label: 'FIDE Rating', href: '/pricing' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top CTA Strip */}
      <div className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h3>Ready to Begin Your Child's Chess Journey?</h3>
              <p>Book a free trial session — zero obligation, 100% value.</p>
            </div>
            <Link to="/book-trial" className="btn btn-gold btn-lg">
              Book a Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link to="/" className={styles.logo}>
                <div className={styles.knightIcon}>
                  <img src={knightLogo} alt="Skillgenc Logo" style={{ width: '40px', height: 'auto', objectFit: 'contain' }} />
                </div>
                <div className={styles.logoCol}>
                  <img src="/logo.png" alt="Skillgenc" className={styles.logoImage} />
                  <span className={styles.logoSubText}>CHESS ACADEMY</span>
                </div>
              </Link>
              <p className={styles.brandDesc}>
                India's premier chess academy developing the next generation of strategic thinkers,
                competitive players, and future grandmasters.
              </p>
              <div className={styles.socials}>
                <a href="https://www.facebook.com/profile.php?id=61576561303743" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/skillgenc_chess_academy/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/skillgenc-chess-academy-6017183ba/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.youtube.com/@Skillgenc_Academy" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className={styles.footerLink}>
                      <ChevronRight size={14} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Programs</h4>
              <ul className={styles.linkList}>
                {programLinks.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className={styles.footerLink}>
                      <ChevronRight size={14} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactList}>
                <a href="tel:+919008568002" className={styles.contactItem}>
                  <Phone size={16} className={styles.contactIcon} />
                  <span>+91 9008568002</span>
                </a>
                <a href="tel:+918074555644" className={styles.contactItem}>
                  <Phone size={16} className={styles.contactIcon} />
                  <span>+91 8074555644</span>
                </a>
                <a href="mailto:admin@skillgenc.com" className={styles.contactItem}>
                  <Mail size={16} className={styles.contactIcon} />
                  <span>admin@skillgenc.com</span>
                </a>
                <a href="mailto:skillgenc@gmail.com" className={styles.contactItem}>
                  <Mail size={16} className={styles.contactIcon} />
                  <span>skillgenc@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Locations</h4>
              <div className={styles.contactList}>
                <div className={styles.locationItem}>
                  <MapPin size={16} className={styles.contactIcon} />
                  <div>
                    <strong>Bengaluru</strong>
                    <p style={{ fontSize: '0.85rem' }}>16th Main Rd, 4th T Block East, Pattabhirama Nagar, Jayanagar</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <MapPin size={16} className={styles.contactIcon} />
                  <div>
                    <strong>Hyderabad</strong>
                    <p style={{ fontSize: '0.85rem' }}>5th Floor, Vasavi Mpm Grand, 602/B2, Ameerpet</p>
                  </div>
                </div>
                <div className={styles.locationItem}>
                  <MapPin size={16} className={styles.contactIcon} />
                  <div>
                    <strong>Pune</strong>
                    <p style={{ fontSize: '0.85rem' }}>2nd floor, Jewel Square mall, Koregaon Rd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © 2026 Skillgenc Chess Academy. All Rights Reserved.
            </p>
            <div className={styles.legal}>
              {legalLinks.map((l, i) => (
                <span key={l.label} className={styles.legalGroup}>
                  <Link to={l.href} className={styles.legalLink}>{l.label}</Link>
                  {i < legalLinks.length - 1 && <span className={styles.dot}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
