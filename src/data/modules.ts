export interface ModuleItem {
  title: string
  category: string
  icon: string
  desc: string
  capabilities: string[]
}

export const categories = ['Foundation', 'People', 'Finance', 'Admissions', 'Academics', 'Students', 'Intelligence'] as const

export const modules: ModuleItem[] = [
  { title: 'Organisation', category: 'Foundation', icon: 'building', desc: 'Bring institution profiles, campuses and academic years into one organised structure.', capabilities: ['Institution and campus setup', 'Academic-year configuration', 'A shared organisational structure'] },
  { title: 'Compliance & Governance', category: 'Foundation', icon: 'shield', desc: 'Keep policies, committees, approvals and accountability connected.', capabilities: ['Board and committee records', 'Policy management', 'Audit logs'] },
  { title: 'Documents & Workflow', category: 'Foundation', icon: 'doc', desc: 'Give documents and decisions a clear path from submission to approval.', capabilities: ['Document management', 'Approval workflows', 'Electronic signatures'] },
  { title: 'Human Resource', category: 'People', icon: 'people', desc: 'Maintain staff records and manage the people behind your school.', capabilities: ['Staff profiles', 'Leave management', 'Payroll'] },
  { title: 'Teacher Module', category: 'People', icon: 'book', desc: 'Connect lesson planning, class attendance and the gradebook.', capabilities: ['Lesson plans', 'Attendance', 'Teacher gradebook'] },
  { title: 'Financial Module', category: 'Finance', icon: 'wallet', desc: 'See fee collection and outstanding balances in reports your team can use.', capabilities: ['Fee invoicing and collection', 'Class and section subtotals', 'Summary and detailed reports', 'PDF report designer'] },
  { title: 'Procurement & Purchase', category: 'Finance', icon: 'doc', desc: 'Follow purchases from a request through receipt.', capabilities: ['Purchase requests', 'Purchase orders', 'Goods received notes'] },
  { title: 'Campus Operations', category: 'Finance', icon: 'building', desc: 'Organise the spaces and everyday operations that support learning.', capabilities: ['Buildings and rooms', 'Visitor records', 'Utilities'] },
  { title: 'Admission Life Cycle', category: 'Admissions', icon: 'people', desc: 'Keep each application connected as a prospective student becomes a learner.', capabilities: ['Application records', 'Admission workflow', 'Enrolment'] },
  { title: 'Curriculum Intelligence', category: 'Academics', icon: 'book', desc: 'Connect curriculum expectations to a structured learning journey.', capabilities: ['Student learning outcome mapping', 'Progression grids', 'Curriculum planning'] },
  { title: 'Syllabus Coverage', category: 'Academics', icon: 'check', desc: 'Understand what has been taught and where attention is needed.', capabilities: ['Lesson-by-lesson tracking', 'Coverage visibility', 'Academic follow-up'] },
  { title: 'Timetable Intelligence', category: 'Academics', icon: 'clock', desc: 'Bring the teaching week together with organised scheduling.', capabilities: ['Class timetables', 'Conflict-aware scheduling', 'Prayer-time scheduling'] },
  { title: 'Library Management', category: 'Academics', icon: 'book', desc: 'Keep your learning resources and borrowing records in order.', capabilities: ['Book catalogue', 'Loans', 'Returns'] },
  { title: 'Student Profile', category: 'Students', icon: 'people', desc: 'Connect admission, fees, academic progress and behaviour in one student record.', capabilities: ['Unified student records', 'Family and sibling connections', 'Student history'] },
  { title: 'Assessment', category: 'Students', icon: 'chart', desc: 'Turn assessment records into a clearer picture of learning.', capabilities: ['Grades and results', 'Report cards', 'Marks and remarks'] },
  { title: 'Behaviour & Tarbiyah', category: 'Students', icon: 'heart', desc: 'Support character development alongside academic progress.', capabilities: ['Behaviour records', 'Salah attendance', 'Hifz and Nazrah progress', 'Tarbiyah reporting'] },
  { title: 'Data Intelligence', category: 'Intelligence', icon: 'spark', desc: 'Explore information across modules to support better school decisions.', capabilities: ['Cross-module analytics', 'AI-assisted report insights', 'Leadership visibility'] },
]

/** Six-item teaser subset shown on the homepage, mirroring the design mockup's picks. */
export const homeTeaserModules = [8, 9, 5, 3, 13, 16].map(i => modules[i])

/** Used by the /wizard module-selection step, which predates this redesign and is left as-is. */
export const allModuleNames = modules.map(m => m.title)
