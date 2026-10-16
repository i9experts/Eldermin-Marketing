import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import StatsStrip from '../components/StatsStrip'
import ROISection from '../components/ROISection'
import RoleExplorerTabs from '../components/RoleExplorerTabs'
import DarkValuesSection from '../components/DarkValuesSection'
import ModulesGrid from '../components/ModulesGrid'
import TeacherPhoneSection from '../components/TeacherPhoneSection'
import OnboardingSteps from '../components/OnboardingSteps'
import PricingCards from '../components/PricingCards'
import FaqAccordion from '../components/FaqAccordion'
import CtaBand from '../components/CtaBand'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ROISection />

      <section id="explore" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">Find your perspective</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3 tracking-tight">One platform.<br />A better day for every role.</h2>
            <p className="text-muted text-lg">Explore the workflows that matter to you.</p>
          </div>
          <RoleExplorerTabs />
        </div>
      </section>

      <DarkValuesSection />
      <ModulesGrid />
      <TeacherPhoneSection />
      <OnboardingSteps />

      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">Room to start. Space to grow.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3 tracking-tight">A plan for your school's next chapter.</h2>
            <p className="text-muted text-lg">Clear starting points for individual schools and multi-campus institutions.</p>
          </div>
          <PricingCards showToggle={false} />
          <Link to="/pricing" className="inline-block mt-8 text-navy font-semibold hover:text-gold-dark transition-colors">
            Compare plans in detail →
          </Link>
        </div>
      </section>

      <FaqAccordion />
      <CtaBand />
    </>
  )
}
