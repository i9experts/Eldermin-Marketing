import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <>
      <footer className="bg-navy-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.7fr,1fr,1fr,1.3fr] gap-10">
            <div>
              <Link to="/"><Logo dark className="mb-4" /></Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Every part of your school, connected.<br />Built around your people, your processes and every learner's development.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-gold mb-4 text-sm">Explore Eldermin</h4>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li><Link to="/product" className="hover:text-gold transition-colors">Platform overview</Link></li>
                <li><Link to="/modules" className="hover:text-gold transition-colors">All 17 modules</Link></li>
                <li><Link to="/pricing" className="hover:text-gold transition-colors">Plans & pricing</Link></li>
                <li><Link to="/product#teachers" className="hover:text-gold transition-colors">Teachers mobile app</Link></li>
                <li><a href="https://app.eldermin.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">School sign in ↗</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-gold mb-4 text-sm">Get to know us</h4>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li><Link to="/about" className="hover:text-gold transition-colors">Our story</Link></li>
                <li><Link to="/about#team" className="hover:text-gold transition-colors">Our team</Link></li>
                <li><Link to="/resources" className="hover:text-gold transition-colors">Guides & resources</Link></li>
                <li><Link to="/contact?intent=partner" className="hover:text-gold transition-colors">Become a partner</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-gold mb-4 text-sm">Let's talk about your school</h4>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li><a href="mailto:support@eldermin.com" className="hover:text-gold transition-colors">support@eldermin.com</a></li>
                <li><a href="tel:+923011167555" className="hover:text-gold transition-colors">+92 301 1167555</a></li>
                <li className="text-white/50">Karachi · Faisalabad · Chicago</li>
                <li><Link to="/wizard" className="inline-flex items-center gap-1 font-semibold text-gold hover:text-gold-light transition-colors">Ready to start? Set up your school →</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/45 text-sm text-center sm:text-left">
            <span>© {new Date().getFullYear()} Eldermin. Built with purpose.</span>
            <div className="flex items-center gap-5">
              <Link to="/legal" className="hover:text-gold transition-colors">Privacy policy</Link>
              <Link to="/legal#terms" className="hover:text-gold transition-colors">Terms of service</Link>
            </div>
          </div>
          <div className="mt-3 text-white/35 text-xs text-center sm:text-left">
            Product developed by{' '}
            <a href="https://i9experts.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors font-medium">
              i9 Experts Private Limited
            </a>
          </div>
        </div>
      </footer>

      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-navy-deep border-t border-white/10 flex items-center justify-between gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <span className="text-white text-sm font-medium">Bring your school together</span>
        <Link to="/wizard" className="shrink-0 bg-gold text-navy-deep font-display font-semibold text-sm px-4 py-2 rounded-lg">Get Started →</Link>
      </div>
    </>
  )
}
