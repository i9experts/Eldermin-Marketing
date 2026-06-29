import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ schoolName: '', email: '', phone: '', password: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    navigate('/wizard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-pale to-white flex items-center justify-center py-20 px-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-navy-deep">Start Your Free Trial</h1>
          <p className="text-gray-500 mt-2">30 days free, no credit card required</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { key: 'schoolName', label: 'School Name', type: 'text', placeholder: 'e.g. Greenfield Academy' },
            { key: 'email', label: 'Email Address', type: 'email', placeholder: 'admin@school.edu.ng' },
            { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' },
            { key: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
            { key: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: '••••••••' },
          ].map(field => (
            <div key={field.key}>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} value={form[field.key as keyof typeof form]}
                onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))} required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition" />
            </div>
          ))}
          <button type="submit" disabled={loading} className="w-full bg-amber hover:bg-amber-dark text-white font-bold py-3 rounded-xl transition-all mt-2 disabled:opacity-60">
            {loading ? 'Creating account...' : 'Create Account & Continue →'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <a href="#" className="text-navy font-semibold hover:underline">Sign in</a>
        </p>
        <p className="text-center text-xs text-gray-400 mt-3">
          By continuing you agree to our <Link to="/legal" className="text-navy hover:underline">Terms of Service</Link> and <Link to="/legal" className="text-navy hover:underline">Privacy Policy</Link>
        </p>
      </motion.div>
    </div>
  )
}