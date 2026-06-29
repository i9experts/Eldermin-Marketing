import { Link } from 'react-router-dom'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4 opacity-90 text-2xl font-extrabold text-white">Eldermin</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Africa's most comprehensive school management platform. Trusted by 500+ institutions.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-amber mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/solutions#admissions" className="hover:text-amber transition-colors">Admissions</Link></li>
              <li><Link to="/solutions#academics" className="hover:text-amber transition-colors">Academics</Link></li>
              <li><Link to="/solutions#finance" className="hover:text-amber transition-colors">Finance</Link></li>
              <li><Link to="/solutions#hr" className="hover:text-amber transition-colors">HR & Payroll</Link></li>
              <li><Link to="/signup" className="hover:text-amber transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-amber transition-colors">About Us</Link></li>
              <li><Link to="/resources" className="hover:text-amber transition-colors">Blog</Link></li>
              <li><Link to="/about#careers" className="hover:text-amber transition-colors">Careers</Link></li>
              <li><Link to="/legal" className="hover:text-amber transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal#terms" className="hover:text-amber transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Mail size={14} /><a href="mailto:hello@eldermin.com" className="hover:text-amber">hello@eldermin.com</a></li>
              <li className="flex items-center gap-2"><Phone size={14} />+234 800 ELDERMIN</li>
              <li className="flex items-center gap-2"><MapPin size={14} />Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Eldermin Technologies Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}