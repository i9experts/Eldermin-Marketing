export interface ModuleItem {
  name: string
  desc: string
}
export interface ModuleGroup {
  slug: string
  name: string
  color: string
  modules: ModuleItem[]
}

export const moduleGroups: ModuleGroup[] = [
  {
    slug: 'foundation', name: 'Foundation', color: '#0C447C',
    modules: [
      { name: 'Organization', desc: 'Institution profile, campuses, academic years' },
      { name: 'Compliance & Governance', desc: 'Policies, board, committees, audit logs' },
      { name: 'Documents & Workflow', desc: 'Approvals, e-signatures, document management' },
    ],
  },
  {
    slug: 'people', name: 'People', color: '#154E86',
    modules: [
      { name: 'Human Resource', desc: 'Staff records, leave, payroll' },
      { name: 'Teacher Module', desc: 'Lesson plans, gradebook, attendance' },
    ],
  },
  {
    slug: 'finance', name: 'Finance & Administration', color: '#EF9F27',
    modules: [
      { name: 'Financial Module', desc: 'Fee collection, invoicing, reports' },
      { name: 'Procurement & Purchase', desc: 'Purchase requests, POs, GRNs' },
      { name: 'Campus Operations', desc: 'Buildings, rooms, visitors, utilities' },
    ],
  },
  {
    slug: 'admissions', name: 'Admissions', color: '#1E8E5A',
    modules: [
      { name: 'Admission Life Cycle', desc: 'Applications through to enrollment' },
    ],
  },
  {
    slug: 'academics', name: 'Academics', color: '#3E7CB1',
    modules: [
      { name: 'Curriculum Intelligence', desc: 'SLO mapping, progression grids' },
      { name: 'Syllabus Coverage', desc: 'Lesson-by-lesson coverage tracking' },
      { name: 'Timetable Intelligence', desc: 'Conflict-free scheduling' },
      { name: 'Library Management', desc: 'Catalogue, loans, and returns' },
    ],
  },
  {
    slug: 'students', name: 'Students', color: '#C97E12',
    modules: [
      { name: 'Student Profile', desc: 'One record per student, not five' },
      { name: 'Assessment', desc: 'Grading, report cards, results' },
      { name: 'Behaviour & Tarbiyah', desc: 'Conduct records, Salah & Hifz tracking' },
    ],
  },
  {
    slug: 'intelligence', name: 'Intelligence', color: '#071A2C',
    modules: [
      { name: 'Data Intelligence', desc: 'Cross-module analytics & AI insights' },
    ],
  },
]

export const allModuleNames = moduleGroups.flatMap(g => g.modules.map(m => m.name))
