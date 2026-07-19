import { Link } from 'react-router-dom'

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Where we are today</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-5">
          8 schools, running on Eldermin right now
        </h2>
        <p className="text-slate text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          We're early, and we'd rather tell you that plainly than dress up borrowed numbers. Right now Eldermin runs day-to-day operations for 8 schools, around 200 teachers, and roughly 3,000 students across Pakistan — and we're adding schools every month.
        </p>
        <Link to="/signup" className="inline-block bg-navy hover:bg-navy-mid text-white font-display font-semibold px-7 py-3 rounded-lg transition-colors">
          Be one of the next schools onboard
        </Link>
      </div>
    </section>
  )
}
