import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const solutions = [
  { id: 'admissions', emoji: '🎓', title: 'Admissions Management', desc: 'End-to-end enrollment from application to admission.', features: ['Custom application forms', 'Document upload & verification', 'Entrance exam scheduling', 'Automated offer letters', 'Real-time application tracking', 'Enrollment confirmation'] },
  { id: 'academics', emoji: '📚', title: 'Academic Management', desc: 'Comprehensive tools for timetabling, attendance, grading, and result computation.', features: ['Conflict-free timetabling', 'Biometric attendance', 'Digital gradebook', 'Automated report cards', 'Lesson planning tools', 'E-learning integration'] },
  { id: 'finance', emoji: '💰', title: 'Finance & Fees', desc: 'Complete financial management with online payment, automated invoicing, and real-time reporting.', features: ['Online fee payment', 'Automated reminders', 'Budget tracking', 'Expense management', 'Financial dashboards', 'Audit trails'] },
  { id: 'hr', emoji: '👥', title: 'HR & Payroll', desc: 'Full human resource management for your entire staff.', features: ['Staff database', 'Automated payroll', 'Leave management', 'Performance reviews', 'Recruitment pipeline', 'Staff portal'] },
  { id: 'comms', emoji: '💬', title: 'Communication Hub', desc: 'Keep parents, students, and staff connected with multi-channel messaging.', features: ['Bulk SMS & email', 'Parent mobile app', 'In-app messaging', 'Event management', 'Emergency alerts', 'Notice board'] },
]

export default function Solutions() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-deep mb-4">Complete Solutions for Every School Need</h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">Five integrated suites that cover every aspect of school administration</p>
        </div>
        <div className="space-y-20">
          {solutions.map((s) => (
            <motion.div key={s.id} id={s.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-5xl mb-4">{s.emoji}</div>
                <h2 className="text-2xl font-bold text-navy-deep mb-3">{s.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map(f => <li key={f} className="flex items-center gap-2 text-gray-700"><span className="text-amber font-bold">✓</span> {f}</li>)}
                </ul>
                <Link to="/signup" className="inline-block bg-navy hover:bg-navy-mid text-white font-semibold px-6 py-3 rounded-xl transition-colors">Get Started →</Link>
              </div>
              <div className="bg-gradient-to-br from-blue-pale to-white rounded-2xl h-64 flex items-center justify-center border border-blue/20">
                <span className="text-9xl opacity-20">{s.emoji}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}