import React from 'react'
import styles from './Partners.module.css'

const partnersList = [
  { name: 'Prestige Group', file: '/partners/Prestige_Group.png' },
  { name: 'Brigade Group', file: '/partners/logo-world-trade-center-kochi-brigade-group-brigade-buena-vista-real-estate-others.jpg' },
  { name: 'Sobha Limited', file: '/partners/117558.Sobha_Ltd_Logo.jpg' },
  { name: 'Embassy Group', file: '/partners/Embassy_Group_Logo.png' },
  { name: 'Puravankara', file: '/partners/Puravankara_Logo-01.jpg' },
  { name: 'Shapoorji Pallonji', file: '/partners/Shapoorji_Pallonji_Group_logo.jpg' },
  { name: 'Patel Realty', file: '/partners/51569_developer-patel-realty-in-noida_300.jpeg' },
  { name: 'SNN Estates', file: '/partners/snnestatesofficial_logo.jpg' },
  { name: 'Community Partner 1', file: '/partners/New-logo-1.png' },
  { name: 'Community Partner 2', file: '/partners/images (2).png' },
  { name: 'Community Partner 3', file: '/partners/images (3).png' },
  { name: 'Community Partner 4', file: '/partners/images (6).jpg' },
  { name: 'Community Partner 5', file: '/partners/images (7).jpg' },
  
  // New Schools & Preschools
  { name: 'EuroKids', file: '/partners/eurokids.png' },
  { name: 'KLAY Pre School', file: '/partners/klay.jpg' },
  { name: 'Kangaroo Kids', file: '/partners/kangarookids.jpg' },
  { name: 'Little Millennium', file: '/partners/littlemillennium.png' },
  { name: 'Bachpan Play School', file: '/partners/bachan.png' },
  { name: 'Little Elly', file: '/partners/littleelln.png' },
  { name: 'Jumpstart International', file: '/partners/jumpstart.png' },
  { name: 'Peepal Tree Preschool', file: '/partners/peepaltree.jpg' },
  { name: 'Koala Preschool', file: '/partners/koala.jpg' },
  { name: 'Little Berries', file: '/partners/littleberries.jpg' },
  { name: 'Dia Sports', file: '/partners/dia.jpg' },
  { name: 'Kidzee', file: '/partners/kidzee.png' },
  { name: 'Wisdom Bees', file: '/partners/wisdom.png' },
  { name: 'Our Little Wonderz', file: '/partners/ourlittle.png' },

  // Remaining without local files
  { name: 'Godrej Properties', domain: 'godrejproperties.com' },
  { name: 'Shriram Properties', domain: 'shriramproperties.com' },
  { name: 'Footprints', domain: 'footprintseducation.in' },
  { name: 'Sattva Group', domain: 'sattvagroup.in' },
  { name: 'Assetz Property', domain: 'assetzproperty.com' },
  { name: 'Total Environment', domain: 'totalenvironment.in' },
  { name: 'Rohan Builders', domain: 'rohanbuilders.com' },
  { name: 'Adarsh Developers', domain: 'adarshdevelopers.com' }
]

export default function Partners() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Trusted By & Collaborated With</h3>
      
      <div className={styles.marqueeWrap}>
        {/* We render the content twice for seamless infinite scrolling */}
        <div className={styles.marqueeContent}>
          {partnersList.map((partner, index) => (
            <div key={`partner-1-${index}`} className={styles.partnerItem} title={partner.name}>
              {partner.textOnly ? (
                <span className={styles.partnerText}>{partner.name}</span>
              ) : (
                <img 
                  src={partner.file || `https://logo.clearbit.com/${partner.domain}`} 
                  alt={partner.name} 
                  className={styles.partnerLogo}
                  onError={(e) => {
                    // Hide the entire container if logo fails to load to prevent blank spaces
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className={styles.marqueeContent} aria-hidden="true">
          {partnersList.map((partner, index) => (
            <div key={`partner-2-${index}`} className={styles.partnerItem} title={partner.name}>
              {partner.textOnly ? (
                <span className={styles.partnerText}>{partner.name}</span>
              ) : (
                <img 
                  src={partner.file || `https://logo.clearbit.com/${partner.domain}`} 
                  alt={partner.name} 
                  className={styles.partnerLogo}
                  onError={(e) => {
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
