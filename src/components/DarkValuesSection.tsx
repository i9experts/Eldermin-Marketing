import { Link } from 'react-router-dom'
import { Icon } from './icons'
import { ArrowRight } from 'lucide-react'

const tiles = [
  { icon: 'people', title: 'One connected student profile', desc: 'Learning, character and school life, together.', span: true },
  { icon: 'book', title: 'Academic progress', desc: 'Assessments and report cards' },
  { icon: 'heart', title: 'Behaviour & Tarbiyah', desc: 'Character development records' },
  { icon: 'check', title: 'Hifz & Nazrah', desc: "Qur'an learning progress" },
  { icon: 'clock', title: 'Salah & school life', desc: 'Prayer attendance and scheduling' },
]

export default function DarkValuesSection() {
  return (
    <section className="py-24 bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="font-mono text-xs text-gold uppercase tracking-widest">More than academic records</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4 leading-tight">
            A complete picture.<br /><em className="text-gold-light italic">Of every learner.</em>
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-5">
            Great schools develop character as well as knowledge. Eldermin connects behaviour and personal development to the same student record as academic progress.
          </p>
          <p className="text-white/60 leading-relaxed mb-8">
            For Islamic schools, dedicated Tarbiyah, Hifz and Nazrah tools support the values at the heart of your education.
          </p>
          <Link to="/modules?category=Students" className="inline-flex items-center gap-1.5 text-gold font-semibold hover:text-gold-light transition-colors">
            Explore student development <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {tiles.map(t => (
            <div key={t.title} className={`bg-white/5 border border-white/10 rounded-xl p-5 ${t.span ? 'col-span-2' : ''}`}>
              <Icon name={t.icon} size={18} className="text-gold mb-3" strokeWidth={1.75} />
              <h3 className="font-display font-semibold text-white text-sm mb-1">{t.title}</h3>
              <p className="text-white/55 text-xs leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
