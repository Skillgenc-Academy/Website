import { MapPin } from 'lucide-react'
import styles from './MapInfographic.module.css'

export default function MapInfographic() {
  return (
    <div className={styles.mapInfographic}>
      {/* Map and Pins Container */}
      <div className={styles.mapContainer}>
        {/* Dotted map background pattern using CSS masking */}
        <div className={styles.mapBackground}>
          <div className={styles.dottedMap}></div>
        </div>

        {/* Pins */}
        <div className={`${styles.pinWrap} ${styles.pinUS}`}>
          <div className={styles.pinIcon} style={{ background: '#EF4444' }}>
            <MapPin size={24} color="#fff" />
          </div>
          <div className={styles.pinShadow} />
          <div className={styles.pinPulse} style={{ borderColor: '#EF4444' }} />
        </div>

        <div className={`${styles.pinWrap} ${styles.pinNL}`}>
          <div className={styles.pinIcon} style={{ background: '#8B5CF6' }}>
            <MapPin size={24} color="#fff" />
          </div>
          <div className={styles.pinShadow} />
          <div className={styles.pinPulse} style={{ borderColor: '#8B5CF6' }} />
        </div>

        <div className={`${styles.pinWrap} ${styles.pinUAE}`}>
          <div className={styles.pinIcon} style={{ background: '#10B981' }}>
            <MapPin size={24} color="#fff" />
          </div>
          <div className={styles.pinShadow} />
          <div className={styles.pinPulse} style={{ borderColor: '#10B981' }} />
        </div>

        <div className={`${styles.pinWrap} ${styles.pinIndia}`}>
          <div className={styles.pinIcon} style={{ background: '#F9D024' }}>
            <MapPin size={24} color="#000" />
          </div>
          <div className={styles.pinShadow} />
          <div className={styles.pinPulse} style={{ borderColor: '#F9D024' }} />
        </div>

        <div className={`${styles.pinWrap} ${styles.pinSG}`}>
          <div className={styles.pinIcon} style={{ background: '#F97316' }}>
            <MapPin size={24} color="#fff" />
          </div>
          <div className={styles.pinShadow} />
          <div className={styles.pinPulse} style={{ borderColor: '#F97316' }} />
        </div>

        <div className={`${styles.pinWrap} ${styles.pinAus}`}>
          <div className={styles.pinIcon} style={{ background: '#3B82F6' }}>
            <MapPin size={24} color="#fff" />
          </div>
          <div className={styles.pinShadow} />
          <div className={styles.pinPulse} style={{ borderColor: '#3B82F6' }} />
        </div>
      </div>

      {/* Timeline/Legend */}
      <div className={styles.mapLegend}>
        <div className={styles.legendLine} />
        <div className={styles.legendItems}>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: '#EF4444' }} />
            <h4>USA</h4>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: '#8B5CF6' }} />
            <h4>Netherlands</h4>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: '#10B981' }} />
            <h4>UAE</h4>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: '#F9D024' }} />
            <h4>India</h4>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: '#F97316' }} />
            <h4>Singapore</h4>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: '#3B82F6' }} />
            <h4>Australia</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
