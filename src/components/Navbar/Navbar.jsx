import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About Us', href: '/about', type: 'link' },
  { label: 'Programs', href: '/#programs', type: 'scroll' },
  { label: 'Pricing', href: '/pricing', type: 'link' },
  { label: 'Platform', href: '/platform', type: 'link' },
  { label: 'Blogs', href: '/blogs', type: 'link' },
  { label: 'Coaches', href: '/#coaches', type: 'scroll' },
  { label: 'Contact Us', href: '/contact', type: 'link' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleScrollLink = (e, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault()
        const id = href.replace('/#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <div className={styles.knightIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="28" height="28" fill="#ffffff">
              <path d="M19 272.47l40.63 18.06a32 32 0 0 0 24.88.47l12.78-5.12a32 32 0 0 0 18.76-20.5l9.22-30.65a24 24 0 0 1 12.55-15.65L159.94 208v50.33a48 48 0 0 1-26.53 42.94l-57.22 28.65A80 80 0 0 0 32 401.48V416h319.86V224c0-106-85.92-192-191.92-192H12A12 12 0 0 0 0 44a16.9 16.9 0 0 0 1.79 7.58L16 80l-9 9a24 24 0 0 0-7 17v137.21a32 32 0 0 0 19 29.26zM52 128a20 20 0 1 1-20 20 20 20 0 0 1 20-20zm316 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/>
            </svg>
          </div>
          <div className={styles.logoCol}>
            <img src="/logo.png" alt="Skillgenc" className={styles.logoImage} />
            <span className={styles.logoSubText}>CHESS ACADEMY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {navLinks.map((nav) => (
            <li key={nav.label}>
              {nav.type === 'scroll' ? (
                <Link
                  to={nav.href}
                  className={styles.navLink}
                  onClick={(e) => handleScrollLink(e, nav.href)}
                >
                  {nav.label}
                </Link>
              ) : (
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {nav.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.ctaArea}>
          <Link to="/book-trial" className={`btn btn-gold ${styles.ctaBtn}`}>
            Book a Free Trial
          </Link>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((nav) => (
            <li key={nav.label}>
              <Link
                to={nav.href}
                className={styles.mobileLink}
                onClick={(e) => handleScrollLink(e, nav.href)}
              >
                {nav.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/book-trial" className={`btn btn-gold ${styles.mobileCta}`}>
              Book a Free Trial
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
