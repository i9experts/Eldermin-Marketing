import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'

export default function ThankYou() {
  return (
    <div className="py-24 bg-mist min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={52} className="text-emerald" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mb-4 tracking-tight">
          Thanks — your school's details are with us
        </h1>
        <p className="text-slate text-lg leading-relaxed mb-8">
          Your email app should have opened with your onboarding request ready to send to our team. We review every submission before activating an account — expect to hear from us within 24 hours with a decision or a request for more information.
        </p>
        <p className="text-slate-light text-sm mb-10">
          If your email app didn't open, you can reach us directly at{' '}
          <a href="mailto:sales@eldermin.com" className="text-navy font-medium hover:text-amber-dark">sales@eldermin.com</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-mid text-white font-display font-semibold px-7 py-3 rounded-lg transition-colors">
            Back to home <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy font-semibold px-7 py-3 rounded-lg hover:bg-white transition-colors">
            Contact us instead
          </Link>
        </div>
        <div className="flex justify-center mt-14 opacity-70">
          <Logo />
        </div>
      </div>
    </div>
  )
}
