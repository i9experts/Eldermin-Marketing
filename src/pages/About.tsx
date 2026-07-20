import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'

const stats = [
  { value: '8', label: 'Schools live' },
  { value: '200+', label: 'Teachers' },
  { value: '~3,000', label: 'Students' },
  { value: '17', label: 'Modules' },
]

const values = [
  { title: 'Built for Islamic schools first', desc: 'Not a Western school ERP with a translated menu — prayer times, Hijri dates, and Tarbiyah are first-class, not add-ons.' },
  { title: 'Honest about where we are', desc: 'We tell you exactly how many schools use Eldermin today. No borrowed numbers, no invented case studies.' },
  { title: 'One system, not a stitched-together stack', desc: 'A student\'s admission, fees, grades, and behaviour history live on one record, not five disconnected tools.' },
  { title: 'Shaped by the schools using it', desc: 'Every school we onboard changes the product — real feedback from real admin offices, not a roadmap built in a vacuum.' },
]

export default function About() {
  return (
    <div>
      <section className="bg-navy-deep text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-xs text-amber uppercase tracking-widest">About Eldermin</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-tight leading-tight">
            Built for Islamic schools, from the ground up
          </h1>
          <p className="text-navy-pale/80 text-xl leading-relaxed max-w-2xl mx-auto">
            Islamic schools run on the same patchwork of spreadsheets, registers, and disconnected apps as everyone else — except their needs, like Tarbiyah tracking and prayer-time scheduling, were never on anyone else's roadmap. Eldermin exists to fix that.
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

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Our mission</span>
            <h2 className="text-2xl font-display font-bold text-navy-deep mt-3 mb-4">One connected system, start to finish</h2>
            <p className="text-slate leading-relaxed">Give every Islamic school one platform for admissions, academics, finance, HR, and Tarbiyah — so admin staff spend less time re-entering the same data three times, and school leaders get a real, current picture of their institution.</p>
          </div>
          <div>
            <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Where we are</span>
            <h2 className="text-2xl font-display font-bold text-navy-deep mt-3 mb-4">Early, real, and growing</h2>
            <p className="text-slate leading-relaxed">Eldermin is live and in daily use at schools across Pakistan today, and we're building toward serving thousands. We'd rather grow from real schools' feedback than launch loud and fix things later.</p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">What we believe</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 tracking-tight">Principles that actually shape the product</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-xl border border-navy/10 p-6">
                <h3 className="font-display font-semibold text-navy-deep mb-2">{v.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-display font-bold text-navy-deep mb-8 text-center">Founder</h2>
        <div className="max-w-sm mx-auto text-center bg-mist rounded-xl p-8">
          <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-xl mx-auto mb-4">AA</div>
          <div className="font-display font-semibold text-navy-deep">Atiq ur Rehman Ayubi</div>
          <div className="text-sm text-slate-light mt-1">Founder, Eldermin</div>
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
