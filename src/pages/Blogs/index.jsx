import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { blogs, blogCategories } from '../../data/blogs'
import styles from './Blogs.module.css'

export default function Blogs() {
  const [activeCat, setActiveCat] = useState('All')

  const filteredBlogs = activeCat === 'All' 
    ? blogs 
    : blogs.filter(b => b.category === activeCat)

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Chess Blogs & Insights | Skillgenc Chess Academy</title>
        <meta name="description" content="Read expert chess advice, opening guides, and tactical breakdowns from Skillgenc Chess Academy coaches." />
      </Helmet>
      <section className={styles.hero}>
        <div className="container">
          <div className="section-tag">✦ Editorial</div>
          <h1 className="hero-title" style={{ marginTop: '16px' }}>
            Chess <span className="gradient-text">Insights & Strategies</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '20px auto 0' }}>
            Expert advice, opening guides, and tactical breakdowns from our coaches.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Categories removed as requested */}

          {/* Grid */}
          <div className={styles.grid}>
            {filteredBlogs.map(blog => (
              <Link to={`/blogs/${blog.slug}`} key={blog.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <div className={styles.imagePlaceholder}>
                    ♚
                  </div>
                  <div className={styles.category}>{blog.category}</div>
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className={styles.title}>{blog.title}</h3>
                  <p className={styles.excerpt}>{blog.excerpt}</p>
                  <div className={styles.readMore}>
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className={styles.empty}>
              No articles found in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
