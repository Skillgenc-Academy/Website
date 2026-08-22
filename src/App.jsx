import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FloatingCTA from './components/FloatingCTA/FloatingCTA'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Platform from './pages/Platform'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import BookTrial from './pages/BookTrial'
import Policies from './pages/Policies'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // slight delay to ensure render
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-trial" element={<BookTrial />} />
          <Route path="/privacy-policy" element={<Policies />} />
          <Route path="/terms" element={<Policies />} />
          <Route path="/refund-policy" element={<Policies />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}

export default App
