import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'
import knightLogo from '../../assets/knight-logo-transparent.png'

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
            <img src={knightLogo} alt="Skillgenc Logo" style={{ width: '40px', height: 'auto', objectFit: 'contain' }} />
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
