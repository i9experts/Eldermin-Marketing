import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const checklist = ['Lesson planning and homework', 'Class schedules and assessments', 'Student development and parent meetings']

export default function TeacherPhoneSection() {
  return (
    <section id="teachers" className="py-24 bg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1">
          <span className="font-mono text-xs text-gold-dark uppercase tracking-widest">The teacher experience</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mt-3 mb-4 leading-tight">Your teaching day.<br />All together.</h2>
          <p className="text-muted text-lg leading-relaxed mb-6">Practical tools for the work teachers actually do, brought into one mobile experience.</p>
          <ul className="space-y-2.5 mb-7">
            {checklist.map(c => (
              <li key={c} className="flex items-start gap-2.5 text-ink">
                <CheckCircle2 size={16} className="text-green mt-0.5 shrink-0" /> {c}
              </li>
            ))}
          </ul>
          <Link to="/contact?intent=demo" className="inline-flex items-center gap-1.5 text-navy font-semibold hover:text-gold-dark transition-colors mb-3">
            Ask for a teacher-app walkthrough <ArrowRight size={15} />
          </Link>
          <p className="text-xs text-muted">Actual app screens shown. Ask our team about availability for your school.</p>
        </div>
        <div className="order-1 md:order-2 flex justify-center gap-5">
          <img src="/assets/teacher-home.jpg" alt="Eldermin Teachers app home with classes, homework and lesson plans" className="w-[45%] max-w-[220px] rounded-2xl border border-line shadow-float" />
          <img src="/assets/teacher-classes.jpg" alt="Eldermin Teachers app showing My students, Homework, Lesson plans, Syllabus, Assessments and Behaviour tools" className="w-[45%] max-w-[220px] rounded-2xl border border-line shadow-float mt-8" />
        </div>
      </div>
    </section>
  )
}
