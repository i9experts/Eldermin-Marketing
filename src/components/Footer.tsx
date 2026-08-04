import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'

const offices = [
  { city: 'Karachi — Head Office', lines: ['D-8/5, Shahrah-e-Jahangir,', 'Gulberg Town, Karachi, Sindh, Pakistan'] },
  { city: 'Faisalabad', lines: ['40-W-101, Susan Road,', 'Madina Town, Faisalabad, Punjab, Pakistan'] },
  { city: 'United States', lines: ['1449 S Michigan Ave, STE 13087,', 'Chicago, IL 60605, USA'] },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo className="mb-4" dark />
            <p className="text-navy-pale/70 text-sm leading-relaxed">
              The intelligent operating system for value-oriented schools — one platform for every school operation, and every student's journey.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-amber mb-4 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-navy-pale/70">
              <li><Link to="/solutions#admissions" className="hover:text-amber transition-colors">Admissions</Link></li>
              <li><Link to="/solutions#academics" className="hover:text-amber transition-colors">Academics</Link></li>
              <li><Link to="/solutions#finance" className="hover:text-amber transition-colors">Finance</Link></li>
              <li><Link to="/solutions#hr" className="hover:text-amber transition-colors">HR & Payroll</Link></li>
              <li><Link to="/wizard" className="hover:text-amber transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-amber mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-navy-pale/70">
              <li><Link to="/about" className="hover:text-amber transition-colors">About</Link></li>
              <li><Link to="/about#team" className="hover:text-amber transition-colors">Team</Link></li>
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
              <li className="flex items-center gap-2"><Mail size={14} className="shrink-0" /><a href="mailto:support@eldermin.com" className="hover:text-amber">support@eldermin.com</a></li>
              <li className="flex items-center gap-2"><Phone size={14} className="shrink-0" /><a href="tel:+923011167555" className="hover:text-amber">+92 301 1167555</a></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 pt-10 border-t border-white/10">
          {offices.map(o => (
            <div key={o.city} className="flex gap-3">
              <MapPin size={16} className="text-amber shrink-0 mt-0.5" />
              <div>
                <div className="font-display font-semibold text-sm text-white mb-1">{o.city}</div>
                {o.lines.map(l => (
                  <div key={l} className="text-navy-pale/60 text-xs leading-relaxed">{l}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-navy-pale/50 text-sm text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Eldermin. All rights reserved.</span>
          <span>
            Product developed by{' '}
            <a href="https://i9experts.com" target="_blank" rel="noopener noreferrer" className="text-navy-pale/70 hover:text-amber transition-colors font-medium">
              i9 Experts Private Limited
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
