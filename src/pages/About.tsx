import { motion } from 'framer-motion'

const team = [
  { name: 'Chukwuemeka Obi', role: 'CEO & Co-founder', emoji: '👨🏾‍💼' },
  { name: 'Aisha Mohammed', role: 'CTO & Co-founder', emoji: '👩🏾‍💻' },
  { name: 'Taiwo Adeyinka', role: 'Head of Product', emoji: '👨🏾‍🎨' },
  { name: 'Fatima Al-Hassan', role: 'Head of Customer Success', emoji: '🤝' },
]

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-deep mb-6">Built for African Schools, By Africans</h1>
          <p className="text-gray-600 text-xl leading-relaxed">Eldermin was founded in 2019 with a simple mission: give every school in Africa access to world-class management tools built for their unique context.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">We believe that administrative inefficiency should not stand between great educators and great education. By removing the paperwork burden, we free school leaders to focus on what truly matters: student outcomes.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">To become the operating system for every school in Africa — from the smallest nursery school to the largest university — providing tools that are affordable, reliable, and built for African realities.</p>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-navy-deep mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="text-center bg-blue-pale rounded-2xl p-6">
                <div className="text-5xl mb-3">{member.emoji}</div>
                <div className="font-bold text-navy-deep">{member.name}</div>
                <div className="text-sm text-gray-500">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div id="careers" className="bg-gradient-to-r from-navy-deep to-navy rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Join Our Team</h2>
          <p className="text-blue-pale/80 mb-6">We are building the future of education technology in Africa. Come build with us.</p>
          <a href="mailto:careers@eldermin.com" className="inline-block bg-amber hover:bg-amber-dark text-white font-bold px-8 py-3 rounded-xl transition-colors">View Open Roles</a>
        </div>
      </div>
    </div>
  )
}