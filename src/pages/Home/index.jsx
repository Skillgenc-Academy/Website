import Hero from './sections/Hero/Hero'
import ResearchBenefits from './sections/ResearchBenefits/ResearchBenefits'
import WhyBetter from './sections/WhyBetter/WhyBetter'
import OnlineVsOffline from './sections/OnlineVsOffline/OnlineVsOffline'
import Programs from './sections/Programs/Programs'
import Coaches from './sections/Coaches/Coaches'
import Testimonials from './sections/Testimonials/Testimonials'
import GoogleReviews from './sections/GoogleReviews/GoogleReviews'
import Gallery from './sections/Gallery/Gallery'
import LifeAtSkillgenc from './sections/LifeAtSkillgenc/LifeAtSkillgenc'
import Achievements from './sections/Achievements/Achievements'
import FAQ from './sections/FAQ/FAQ'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Skillgenc | Premier Chess Academy</title>
        <meta name="description" content="Skillgenc offers expert chess coaching, structured programs for all levels, and comprehensive tournaments. Join our academy today!" />
      </Helmet>
      <Hero />
      <WhyBetter />
      <Programs />
      <OnlineVsOffline />
      <Coaches />
      <ResearchBenefits />
      <Testimonials />
      <Achievements />
      <GoogleReviews />
      <Gallery />
      <LifeAtSkillgenc />
      <FAQ />
    </div>
  )
}

