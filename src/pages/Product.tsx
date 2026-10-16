import PageHero from '../components/PageHero'
import RoleExplorerTabs from '../components/RoleExplorerTabs'
import DarkValuesSection from '../components/DarkValuesSection'
import TeacherPhoneSection from '../components/TeacherPhoneSection'
import OnboardingSteps from '../components/OnboardingSteps'
import FaqAccordion from '../components/FaqAccordion'
import CtaBand from '../components/CtaBand'
import { Icon } from '../components/icons'

const journey = [
  { icon: 'people', title: 'Admission', desc: 'Start with the application and carry the student record into enrolment.' },
  { icon: 'book', title: 'Learning', desc: 'Connect curriculum, lesson planning, homework and assessment.' },
  { icon: 'heart', title: 'Development', desc: 'Build a picture of behaviour, character and personal progress.' },
  { icon: 'message', title: 'Partnership', desc: 'Keep families informed and school teams working from shared information.' },
]

const foundation = [
  { icon: 'shield', title: 'Access with purpose', desc: 'Role-based permissions shape what teachers, accountants and school leaders can see.' },
  { icon: 'building', title: 'A connected campus structure', desc: 'Bring multiple campuses into a single institution with campus-level scope.' },
  { icon: 'doc', title: 'Accountable workflows', desc: 'Connect documents, approvals, policies and audit records to school governance.' },
]

export default function Product() {
  return (
    <div>
      <PageHero
        crumb="The platform"
        eyebrow="The platform"
        title={<>A school operating system.<br />Built around school life.</>}
        lead="Connect the work of leading, teaching and supporting learners, with shared records and purposeful tools for each role."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoleExplorerTabs />
        </div>
      </section>

      <section className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">The connected student journey</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Every stage builds on the last.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map(j => (
              <div key={j.title} className="bg-white rounded-xl border border-line p-6">
                <Icon name={j.icon} size={20} className="text-navy mb-4" strokeWidth={1.75} />
                <h3 className="font-display font-semibold text-navy-deep mb-1.5">{j.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeacherPhoneSection />
      <DarkValuesSection />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">A thoughtful foundation</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Built for responsibility,<br />as well as possibility.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {foundation.map(f => (
              <div key={f.title} className="border border-line rounded-xl p-6">
                <Icon name={f.icon} size={22} className="text-navy mb-4" strokeWidth={1.75} />
                <h3 className="font-display font-semibold text-navy-deep mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted">Discuss hosting, data handling, access policies and available controls with our team as part of your evaluation.</p>
        </div>
      </section>

      <OnboardingSteps />
      <FaqAccordion />
      <CtaBand />
    </div>
  )
}
