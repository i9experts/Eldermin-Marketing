import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo className="mb-4" dark />
            <p className="text-navy-pale/70 text-sm leading-relaxed">
              The Education Operating System for Islamic schools — live in 8 schools across Pakistan.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-amber mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-navy-pale/70">
              <li><Link to="/solutions#admissions" className="hover:text-amber transition-colors">Admissions</Link></li>
              <li><Link to="/solutions#academics" className="hover:text-amber transition-colors">Academics</Link></li>
              <li><Link to="/solutions#finance" className="hover:text-amber transition-colors">Finance</Link></li>
              <li><Link to="/solutions#hr" className="hover:text-amber transition-colors">HR & Payroll</Link></li>
              <li><Link to="/signup" className="hover:text-amber transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-amber mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-navy-pale/70">
              <li><Link to="/about" className="hover:text-amber transition-colors">About</Link></li>
              <li><Link to="/partners" className="hover:text-amber transition-colors">Become a Partner</Link></li>
              <li><Link to="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
              <li><Link to="/resources" className="hover:text-amber transition-colors">Resources</Link></li>
              <li><Link to="/legal" className="hover:text-amber transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal#terms" className="hover:text-amber transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-amber mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-navy-pale/70">
              <li className="flex items-center gap-2"><Mail size={14} /><a href="mailto:hello@eldermin.com" className="hover:text-amber">hello@eldermin.com</a></li>
              <li className="flex items-center gap-2"><MapPin size={14} />Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-navy-pale/50 text-sm">
          &copy; {new Date().getFullYear()} Eldermin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
