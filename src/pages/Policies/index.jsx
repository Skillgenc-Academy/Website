import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Policies() {
  const { pathname } = useLocation()
  
  let title = "Legal Policies"
  let content = "This page is currently being updated. Please check back later."

  if (pathname === '/privacy-policy') {
    title = "Privacy Policy"
    content = "Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services."
  } else if (pathname === '/terms') {
    title = "Terms & Conditions"
    content = "These Terms and Conditions govern your use of the Skillgenc Chess Academy website and services. By accessing our platform, you agree to abide by these terms."
  } else if (pathname === '/refund-policy') {
    title = "Refund Policy"
    content = "We offer a flexible refund policy for our programs. If you are not satisfied with your classes, you may request a refund within the first 14 days of enrollment. Trial sessions are completely free and carry zero obligation."
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
      <Helmet>
        <title>{title} | Skillgenc Chess Academy</title>
      </Helmet>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ marginBottom: '32px', fontSize: '2.5rem' }}>{title}</h1>
          <div style={{ 
            background: 'rgba(0, 0, 0, 0.03)', 
            border: '1px solid rgba(1, 83, 217, 0.2)', 
            borderRadius: '24px', 
            padding: '40px',
            color: 'rgba(0, 0, 0, 0.8)',
            lineHeight: '1.8'
          }}>
            <p>{content}</p>
            <p style={{ marginTop: '24px', color: 'rgba(0, 0, 0, 0.5)', fontSize: '0.9rem' }}>
              For detailed inquiries regarding our {title.toLowerCase()}, please contact us at info@skillgenc.com or call our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
