import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Logo from '../components/Logo'

const stats = [
  { value: '8', label: 'Schools live' },
  { value: '200+', label: 'Teachers' },
  { value: '~3,000', label: 'Students' },
  { value: '17', label: 'Modules' },
]

const values = [
  { title: 'Built on a whole-child philosophy', desc: 'A value-oriented school develops character, responsibility, leadership, wellbeing, and academic excellence together — Eldermin is built to run every part of that, not just the gradebook.' },
  { title: 'Honest about where we are', desc: 'We tell you exactly how many schools use Eldermin today. No borrowed numbers, no invented case studies.' },
  { title: 'One system, not a stitched-together stack', desc: "A student's admission, fees, grades, and character development live on one record, not five disconnected tools." },
  { title: 'Deep where it matters most', desc: "For Islamic schools, that means Tarbiyah tracking, Hifz and Nazrah progress, and Hijri calendar support — built by educators who understand what values-based education actually requires." },
  { title: 'Shaped by the schools using it', desc: 'Every school we onboard changes the product — real feedback from real admin offices, not a roadmap built in a vacuum.' },
  { title: 'A movement, not just software', desc: 'We believe schools should develop human beings, not simply produce examination results — and we build with that belief first.' },
]

const narrative = [
  {
    tag: 'Why we started',
    title: 'A school with no software built for it',
    body: "Eldermin began inside a real Islamic school, run by our founder, that ran on the same patchwork of spreadsheets and registers as almost every other school — except its needs, like Tarbiyah tracking and Hijri-calendar scheduling, were never on anyone else's roadmap. So we built the platform that was missing.",
  },
  {
    tag: 'What we learned',
    title: 'The problem was never just "Islamic schools"',
    body: 'Building deep, values-based tools for one kind of school surfaced a much bigger truth: every school that cares about character, wellbeing, leadership, and family partnership — regardless of curriculum or faith tradition — was solving the same problems with the same disconnected tools.',
  },
  {
    tag: 'Who we serve today',
    title: 'Value-oriented schools, everywhere',
    body: 'Eldermin now serves schools that want to educate beyond academics — Islamic, faith-based, independent, and international — while remaining the deepest platform available for schools with Tarbiyah, Hifz, and Nazrah needs.',
  },
  {
    tag: 'Where we’re going',
    title: 'An intelligent operating system for every school',
    body: "We're investing in AI-assisted insights, automation, and predictive analytics — technology that removes complexity so educators can focus on what matters most: helping every learner flourish academically, socially, and ethically.",
  },
]

const team = [
  {
    name: 'Atiq ur Rehman Ayubi',
    role: 'CEO & CTO',
    initials: 'AA',
    lead: true,
    bio: "Designer, educator, and entrepreneur with 25+ years across education, design, and technology. Founder of i9 Experts, The Deenway School, SmartVan, M.Publishers, and Edudeen, LLC — Atiq has trained 500+ people and built institutions around one idea: value-driven solutions, designed with intention.",
  },
  { name: 'Abdul Ahsad Siddiqi', role: 'Frontend Developer', initials: 'AS' },
  { name: 'Muhammad Ahmed bin Atif', role: 'Product Partner', initials: 'MA' },
  { name: 'Uzair Hassan', role: 'Product QA', initials: 'UH' },
  { name: 'Jami Raza', role: 'Flutter Developer', initials: 'JR' },
  { name: 'Sahar Kashif', role: 'Finance Manager', initials: 'SK' },
  { name: 'Noor Aisha Khan', role: 'Support', initials: 'NK' },
  { name: 'Romaisa Atiq', role: 'Support', initials: 'RA' },
  { name: 'Aisha Imran', role: 'Support', initials: 'AI' },
]

// Note: intentionally not scroll/viewport-gated (no `whileInView`) — animations that wait
// for an IntersectionObserver can fail to fire in some rendering/capture contexts, which
// would leave real content invisible. Fires once on mount instead, every time, guaranteed.
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
}

export default function About() {
  return (
    <div>
      <section className="bg-navy-deep text-white py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-amber/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs text-amber uppercase tracking-widest">About Eldermin</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-tight leading-tight">
            Built for schools that educate beyond academics
          </h1>
          <p className="text-navy-pale/80 text-xl leading-relaxed max-w-2xl mx-auto">
            We believe schools exist to develop human beings, not simply produce examination results. Eldermin started inside a real Islamic school and grew into an operating system for every value-oriented school — with Tarbiyah, Hifz, and Nazrah depth built in for those who want it.
          </p>
        </div>
      </section>

      <section className="border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-navy/10">
            {stats.map(s => (
              <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
                <div className="font-mono text-3xl md:text-4xl font-semibold text-navy-deep">{s.value}</div>
                <div className="text-slate-light text-xs mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Our story</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">From one school's problem to a platform for every value-oriented school</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {narrative.map((n) => (
            <motion.div key={n.tag} {...fadeUp} className="bg-white rounded-xl border border-navy/10 p-7">
              <span className="font-mono text-[11px] text-amber-dark uppercase tracking-widest">{n.tag}</span>
              <h3 className="text-lg font-display font-bold text-navy-deep mt-2 mb-3">{n.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{n.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">What we believe</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Principles that actually shape the product</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(v => (
              <motion.div key={v.title} {...fadeUp} className="bg-white rounded-xl border border-navy/10 p-6">
                <h3 className="font-display font-semibold text-navy-deep mb-2">{v.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">The team</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">The people building Eldermin</h2>
          <p className="text-slate mt-4 leading-relaxed">A small, senior team designing, building, and supporting Eldermin end to end — product developed by i9 Experts Private Limited.</p>
        </div>

        {/* Leadership */}
        {team.filter(t => t.lead).map(t => (
          <motion.div key={t.name} {...fadeUp} className="max-w-2xl mx-auto bg-navy-deep text-white rounded-2xl p-8 sm:p-10 mb-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-full bg-amber text-navy-deep flex items-center justify-center font-display font-bold text-2xl shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="font-display font-bold text-xl">{t.name}</div>
                <div className="text-amber text-sm font-medium mb-3">{t.role}</div>
                <p className="text-navy-pale/80 text-sm leading-relaxed">{t.bio}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Rest of team */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {team.filter(t => !t.lead).map(t => (
            <motion.div key={t.name} {...fadeUp} className="bg-white rounded-xl border border-navy/10 p-6 text-center hover:border-amber/40 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-navy-pale text-navy flex items-center justify-center font-display font-bold text-base mx-auto mb-3">
                {t.initials}
              </div>
              <div className="font-display font-semibold text-navy-deep text-sm">{t.name}</div>
              <div className="text-slate-light text-xs mt-1">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-deep rounded-xl p-10 text-white text-center">
          <div className="flex justify-center mb-4"><Logo dark /></div>
          <p className="text-navy-pale/80 mb-6 max-w-lg mx-auto">Want to talk about bringing Eldermin to your school, partner with us, or just ask a question?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold px-8 py-3 rounded-lg transition-colors">
              Contact us <ArrowRight size={16} />
            </Link>
            <Link to="/partners" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/20">
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
