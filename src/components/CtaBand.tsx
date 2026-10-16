import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBand() {
  return (
    <section className="py-20 bg-navy-deep text-white text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-xs text-gold-light uppercase tracking-widest">Your next chapter starts here</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-4">Let's bring your school together.</h2>
        <p className="text-white/75 text-lg mb-8">See the workflows that matter to your team in a personalised demo.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/wizard" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy-deep font-display font-semibold px-8 py-3.5 rounded-lg transition-colors">
            Get Started <ArrowRight size={16} />
          </Link>
          <Link to="/contact?intent=demo" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors border border-white/20">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  )
}
