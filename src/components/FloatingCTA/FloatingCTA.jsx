import { Link, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import styles from './FloatingCTA.module.css'

export default function FloatingCTA() {
  const location = useLocation()

  // Hide on the contact page itself since the button links to it
  if (location.pathname === '/contact') return null

  return (
    <div className={styles.wrapper}>
      <Link to="/contact" className={styles.btn} aria-label="Contact Us">
        <MessageCircle size={28} />
      </Link>
    </div>
  )
}
