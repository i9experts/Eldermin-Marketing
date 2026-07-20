import { Link } from 'react-router-dom'

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-mono text-xs text-amber-dark uppercase tracking-widest">Growing across Pakistan</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-5 tracking-tight">
          Schools across Pakistan are already running on Eldermin
        </h2>
        <p className="text-slate text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          From admissions to Tarbiyah, Eldermin handles real day-to-day operations for real schools, teachers, and students — and we're adding new schools every month. Every school that comes on board helps shape what Eldermin becomes next.
        </p>
        <Link to="/signup" className="inline-block bg-navy hover:bg-navy-mid text-white font-semibold px-7 py-3 rounded-lg transition-colors">
          Join the schools already onboard
        </Link>
      </div>
    </section>
  )
}
