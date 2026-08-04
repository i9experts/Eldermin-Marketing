import Hero from '../components/Hero'
import StatsStrip from '../components/StatsStrip'
import Marquee from '../components/Marquee'
import ProductTabs from '../components/ProductTabs'
import TarbiyahSection from '../components/TarbiyahSection'
import ROISection from '../components/ROISection'
import ModulesGrid from '../components/ModulesGrid'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import TechStack from '../components/TechStack'
import Pricing from '../components/Pricing'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Marquee />
      <ProductTabs />
      <TarbiyahSection />
      <ROISection />
      <ModulesGrid />
      <CaseStudies />
      <Testimonials />
      <TechStack />
      <Pricing />
      <section className="py-20 bg-navy-deep text-white text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Give your school the operating system it deserves.</h2>
        <p className="text-navy-pale/75 text-lg mb-8 max-w-xl mx-auto">Live in 8 schools across Pakistan today, built for value-oriented schools everywhere. Yours could be next.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/wizard" className="inline-block bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold px-10 py-4 rounded-lg text-lg transition-colors">
            Apply for Eldermin
          </Link>
          <a href="https://app.eldermin.com/login" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors border border-white/20">
            Sign In →
          </a>
        </div>
      </section>
    </>
  )
}
