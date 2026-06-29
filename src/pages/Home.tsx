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
      <section className="py-20 bg-gradient-to-r from-navy-deep to-navy text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Modernise Your School?</h2>
        <p className="text-blue-pale/75 text-lg mb-8 max-w-xl mx-auto">Join 200+ institutions across 14 countries already running smarter with Eldermin.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup" className="inline-block bg-amber hover:bg-amber-dark text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg">
            Start Free 30-Day Trial
          </Link>
          <a href="https://app.eldermin.com/login" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all border border-white/20">
            Sign In →
          </a>
        </div>
      </section>
    </>
  )
}