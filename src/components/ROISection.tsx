import { Link } from 'react-router-dom'

const problems = [
  { n: '01', title: 'From scattered records to shared understanding', desc: "Keep a student's admissions, fees, grades and behaviour connected through one profile.", link: 'Student records', to: '/modules?category=Students' },
  { n: '02', title: 'From report preparation to useful conversations', desc: 'Review collections and outstanding fees in class-wise reports with clear subtotals.', link: 'School finance', to: '/modules?category=Finance' },
  { n: '03', title: 'From separate tasks to a teaching rhythm', desc: 'Connect lesson plans, homework, assessments and student development.', link: 'Teaching tools', to: '/product#teachers' },
]

export default function ROISection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">Less chasing. More clarity.</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-3 tracking-tight">Your school is connected.<br />Your systems should be, too.</h2>
          <p className="text-muted text-lg">Give the information your team needs a place to come together.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map(p => (
            <div key={p.n} className="border-t-2 border-gold pt-5">
              <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">{p.n} / Connected school life</span>
              <h3 className="font-display font-semibold text-navy-deep text-lg mt-2 mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{p.desc}</p>
              <Link to={p.to} className="text-sm font-semibold text-navy hover:text-gold-dark transition-colors">{p.link} →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
