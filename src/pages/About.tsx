import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { Icon } from '../components/icons'
import { founder, team } from '../data/team'

const valueMap = [
  { icon: 'heart', title: 'Every learner is more than a grade.', desc: 'The idea at the heart of Eldermin.', span: true },
  { icon: 'book', title: 'Learning', desc: 'Academic growth' },
  { icon: 'people', title: 'Character', desc: 'Values in daily life' },
  { icon: 'message', title: 'Partnership', desc: 'School and family' },
  { icon: 'building', title: 'Operations', desc: 'Systems that support people' },
]

const principles = [
  { n: '01', title: 'Whole-child thinking', desc: 'Keep learning, character, wellbeing and family partnership in view.' },
  { n: '02', title: 'Honest communication', desc: 'Explain what is available, discuss what your school needs and avoid promises the product cannot support.' },
  { n: '03', title: 'Connected by design', desc: 'Use shared records to bring teams and workflows together.' },
  { n: '04', title: 'Depth where it matters', desc: 'Support the particular needs of schools with Tarbiyah, Hifz and Nazrah programmes.' },
  { n: '05', title: 'Shaped by school life', desc: 'Let real administrative and classroom needs guide the product.' },
  { n: '06', title: 'Clarity in everyday work', desc: 'Make information easier to find, understand and act on.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
}

export default function About() {
  return (
    <div>
      <PageHero
        crumb="Our story"
        eyebrow="Our story"
        title={<>Born inside a school.<br />Built for something bigger.</>}
        lead="Eldermin began with a practical need: connect the work of running a school with the deeper responsibility of developing its learners."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">Why we started</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-4 leading-tight">School life does not happen in separate boxes.</h2>
            <p className="text-muted text-lg leading-relaxed mb-5">Admissions, teaching, fees, character and family relationships are all part of the same child's journey.</p>
            <p className="text-ink leading-relaxed mb-4">Eldermin grew from the experience of an Islamic school working with disconnected spreadsheets and registers. Alongside everyday administration, it needed tools for Tarbiyah, Hifz and Nazrah.</p>
            <p className="text-ink leading-relaxed">That starting point revealed a wider need: schools of different curricula and traditions want to bring academics, personal development and operations together. Eldermin is built around that connection.</p>
          </div>
          <div className="bg-navy-deep rounded-card p-6 grid grid-cols-2 gap-3">
            {valueMap.map(v => (
              <div key={v.title} className={`bg-white/5 border border-white/10 rounded-xl p-5 ${v.span ? 'col-span-2' : ''}`}>
                <Icon name={v.icon} size={18} className="text-gold mb-3" strokeWidth={1.75} />
                <h3 className="font-display font-semibold text-white text-sm mb-1">{v.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[0.85fr,1.15fr] gap-14 items-center">
          <div className="relative">
            <img src="/assets/founder.png" alt="Atiq ur Rehman Ayubi, founder of Eldermin" className="w-full rounded-card border border-line object-cover aspect-[4/5]" />
            <div className="absolute bottom-4 left-4 right-4 bg-navy-deep text-white rounded-xl p-4">
              <h3 className="font-display font-bold">{founder.name}</h3>
              <p className="text-white/70 text-sm">{founder.role}</p>
            </div>
          </div>
          <div>
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">An educator's perspective. A designer's discipline.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-5 leading-tight">Building institutions.<br />Designing useful tools.</h2>
            {founder.bioParas.map(p => <p key={p} className="text-ink leading-relaxed mb-4">{p}</p>)}
            <blockquote className="border-l-2 border-gold pl-4 italic text-navy-deep font-display text-lg my-6">&ldquo;{founder.quote}&rdquo;</blockquote>
            <a href={founder.blogUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-navy font-semibold hover:text-gold-dark transition-colors">
              Read Atiq's full story at ayubi.blog ↗
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">What guides the product</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Principles that actually shape the product</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(p => (
              <div key={p.n} className="border-t-2 border-gold pt-5">
                <div className="font-mono text-2xl text-gold font-semibold mb-2">{p.n}</div>
                <h3 className="font-display font-semibold text-navy-deep mb-1.5">{p.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 bg-paper scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 mx-auto text-center">
            <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">The people behind the platform</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Built by a team.<br />In service of yours.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {team.map(t => (
              <motion.div key={t.name} {...fadeUp} className="bg-white rounded-xl border border-line p-6 text-center hover:border-gold/40 hover:shadow-float transition-all">
                <div className="w-14 h-14 rounded-full bg-sky text-navy flex items-center justify-center font-display font-bold text-base mx-auto mb-3">
                  {t.initials}
                </div>
                <div className="font-display font-semibold text-navy-deep text-sm">{t.name}</div>
                <div className="text-muted text-xs mt-1">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
