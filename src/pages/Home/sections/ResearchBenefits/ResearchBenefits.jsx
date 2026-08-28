import { Link } from 'react-router-dom'
import styles from './ResearchBenefits.module.css'

export default function ResearchBenefits() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">✦ The Science of Chess</div>
          <h2 className="section-title">
            Unlock Your Child's<br />
            <span className="gradient-text">True Potential</span>
          </h2>
        </div>
        
        <div className={styles.grid}>
          {/* Left Column: Brain Image (Sticky) */}
          <div className={styles.leftCol}>
            <img src="/benefits/brain.png" alt="Brain Growth" className={styles.brainImage} />
          </div>

          {/* Right Column: Scrolling content */}
          <div className={styles.rightCol}>
            
            {/* HTML Card 1 */}
            <div className={styles.cardContainer}>
              <div className={styles.cardBackdrop}></div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>CHESS PROMOTES BRAIN GROWTH AND NEURAL CONNECTIONS</h3>
                <hr className={styles.cardDivider} />
                <div className={styles.cardContent}>
                  <p>What if a simple game could physically grow your child’s brain? Studies suggest that playing chess stimulates the growth of dendrites—branch-like structures in the brain that transmit information between neurons.</p>
                  <p>When your child plays chess, they’re essentially working out their brain. The result? An increase in the brain’s ability to process and adapt to information.</p>
                  <p>Over time, this enhanced brain activity leads to better decision-making, faster reflexes, and an improved ability to tackle complex challenges.</p>
                </div>
              </div>
            </div>
            
            {/* HTML Card 2 */}
            <div className={styles.cardContainer}>
              <div className={styles.cardBackdrop} style={{ backgroundColor: '#ff9f43' }}></div>
              <div className={styles.card} style={{ backgroundColor: '#2e86de' }}>
                <h3 className={styles.cardTitle}>CHESS HELPS MANAGE ADHD SYMPTOMS</h3>
                <hr className={styles.cardDivider} />
                <div className={styles.cardContent}>
                  <p>For children struggling with focus and attention, chess can work wonders. A 2016 study revealed that chess helped children with ADHD reduce inattentiveness by 41%, as it requires sustained concentration and thoughtful decision-making.</p>
                  <p>Parents of children with ADHD often notice significant improvements in their ability to focus for longer periods, stay calm under pressure, and develop self-discipline. By engaging in a structured and stimulating game like chess, children can channel their energy into something productive and rewarding.</p>
                </div>
              </div>
            </div>

            {/* HTML Card 3 */}
            <div className={styles.cardContainer}>
              <div className={styles.cardBackdrop} style={{ backgroundColor: '#a29bfe' }}></div>
              <div className={styles.card} style={{ backgroundColor: '#6c5ce7' }}>
                <h3 className={styles.cardTitle}>CHESS INCREASES CREATIVITY</h3>
                <hr className={styles.cardDivider} />
                <div className={styles.cardContent}>
                  <p><b>Unleash your creative genius!</b></p>
                  <p>Playing chess activates the brain's right hemisphere, sparking originality and imaginative problem-solving. A four-year study by Robert Ferguson involving students (grades 7 to 9) revealed that chess players showed the highest growth in originality compared to other activities.</p>
                </div>
              </div>
            </div>

            {/* HTML Card 4 */}
            <div className={styles.cardContainer}>
              <div className={styles.cardBackdrop} style={{ backgroundColor: '#fd79a8' }}></div>
              <div className={styles.card} style={{ backgroundColor: '#e84393' }}>
                <h3 className={styles.cardTitle}>INCREASES PROBLEM-SOLVING SKILLS</h3>
                <hr className={styles.cardDivider} />
                <div className={styles.cardContent}>
                  <p>Life is full of challenges, and chess is the ultimate training ground for solving them.</p>
                  <p>A 1992 New Brunswick (Canada) study split 450 students into three groups: Group A followed the standard math curriculum, Group B added chess instruction after first grade, and Group C started chess lessons from first grade alongside math.</p>
                  <p><b>Remarkably, Group C's scores skyrocketed from 62% to 81.2%, outperforming Group A by 21.46%!</b></p>
                </div>
              </div>
            </div>

            {/* HTML Card 5 */}
            <div className={styles.cardContainer}>
              <div className={styles.cardBackdrop} style={{ backgroundColor: '#81ecec' }}></div>
              <div className={styles.card} style={{ backgroundColor: '#00cec9' }}>
                <h3 className={styles.cardTitle}>EXERCISES BOTH SIDES OF THE BRAIN</h3>
                <hr className={styles.cardDivider} />
                <div className={styles.cardContent}>
                  <p>Think of chess as a full-brain workout that strengthens your mind from every angle.</p>
                  <p>A German study compared the brain activity of chess experts and novices, revealing that experienced chess players activate both hemispheres to process patterns and calculate moves faster. This dual-brain engagement leads to improved <b>logical reasoning, visual-spatial skills</b>, and the ability to multitask effectively.</p>
                </div>
              </div>
            </div>

            {/* HTML Card 6 */}
            <div className={styles.cardContainer}>
              <div className={styles.cardBackdrop} style={{ backgroundColor: '#48dbfb' }}></div>
              <div className={styles.card} style={{ backgroundColor: '#0984e3' }}>
                <h3 className={styles.cardTitle}>CHESS IMPROVES MEMORY</h3>
                <hr className={styles.cardDivider} />
                <div className={styles.cardContent}>
                  <p>Do you often wish your child had a better memory or was more organized? Chess might be the answer!</p>
                  <p>Studies have shown that chess players develop stronger memory skills, as the game requires them to remember moves, anticipate patterns, and plan strategies several steps ahead.</p>
                  <p>A 1985 study demonstrated that students who played chess for two years improved their <b>grades in all subjects</b> and exhibited better memory and organizational skills, as observed by their teachers.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/book-trial" className="btn btn-gold btn-lg">
            Unlock Their Potential - Book a Trial
          </Link>
        </div>
      </div>
    </section>
  )
}

