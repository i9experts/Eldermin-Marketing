import { Check } from 'lucide-react'

const features = [
  'Salah attendance tracking per prayer',
  'Quran memorisation (Hifz) progress tracker',
  'Islamic Studies grading module',
  'Separate prayer time scheduling in the timetable',
  'Hijri calendar alongside the Gregorian one',
  'Gender-separated portals & dashboards',
  'Tarbiyah report card alongside academics',
  'Behaviour records linked to the same student profile',
]

export default function TarbiyahSection() {
  return (
    <section className="py-24 bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="font-mono text-xs text-amber uppercase tracking-widest">Behaviour & Tarbiyah module</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4 leading-tight">
            Spiritual development, tracked with the same rigor as grades
          </h2>
          <p className="text-navy-pale/75 text-lg leading-relaxed mb-8">
            Most school ERPs are built for secular curricula and bolt on an Islamic Studies subject at best. Eldermin treats Tarbiyah as a first-class module — not an afterthought.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map(f => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-navy-pale/85 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <Check size={15} className="text-amber mt-0.5 shrink-0" /> {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
