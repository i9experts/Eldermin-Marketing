export interface Screenshot {
  src: string
  caption: string
}
export interface ModuleItem {
  name: string
  desc: string
}
export interface ModuleGroup {
  slug: string
  name: string
  color: string
  blurb: string
  modules: ModuleItem[]
  screenshots: Screenshot[]
}

export const moduleGroups: ModuleGroup[] = [
  {
    slug: 'foundation', name: 'Foundation', color: '#0C447C',
    blurb: 'The structural layer every other module reads from — institution profile, campuses, academic calendar, governance, and document workflow.',
    screenshots: [
      { src: '/screenshots/foundation/executive-dashboard.png', caption: 'Executive Dashboard — organization and governance overview across institutions, campuses, and departments' },
      { src: '/screenshots/foundation/documents-workflow.png', caption: 'Documents & Workflow dashboard — approvals, e-signatures, and audit trail in one view' },
      { src: '/screenshots/foundation/apps-modules.png', caption: 'Apps & Modules — activate or deactivate any of the 17 modules per institution' },
    ],
    modules: [
      { name: 'Organization', desc: 'Institution profile, campuses, academic years' },
      { name: 'Compliance & Governance', desc: 'Policies, board, committees, audit logs' },
      { name: 'Documents & Workflow', desc: 'Approvals, e-signatures, document management' },
    ],
  },
  {
    slug: 'people', name: 'People', color: '#154E86',
    blurb: 'Everything about running a staff — records, payroll, leave, and the day-to-day tools teachers actually use in the classroom.',
    screenshots: [
      { src: '/screenshots/people/hr-dashboard.png', caption: 'HR Dashboard — headcount, attendance, payroll, and leave in one view, per campus' },
      { src: '/screenshots/people/teaching-management.png', caption: 'Teaching Management dashboard — lesson plans, assignments, and classroom behaviour notes' },
    ],
    modules: [
      { name: 'Human Resource', desc: 'Staff records, leave, payroll' },
      { name: 'Teacher Module', desc: 'Lesson plans, gradebook, attendance' },
    ],
  },
  {
    slug: 'finance', name: 'Finance & Administration', color: '#EF9F27',
    blurb: 'Fee collection, procurement, and campus administration, with reports formatted the way Pakistani school offices actually use them.',
    screenshots: [
      { src: '/screenshots/finance/finance-dashboard.png', caption: 'Finance dashboard — fee collection, receivables, payables, banking, and Islamic funds tracking' },
      { src: '/screenshots/finance/procurement-inventory.png', caption: 'Procurement & Inventory — requisitions, purchase orders, vendors, and stock in one flow' },
      { src: '/screenshots/finance/campus-operations.png', caption: 'Campus Operations — buildings, maintenance tickets, transport, and facility utilization' },
    ],
    modules: [
      { name: 'Financial Module', desc: 'Fee collection, invoicing, reports' },
      { name: 'Procurement & Purchase', desc: 'Purchase requests, POs, GRNs' },
      { name: 'Campus Operations', desc: 'Buildings, rooms, visitors, utilities' },
    ],
  },
  {
    slug: 'admissions', name: 'Admissions', color: '#1E8E5A',
    blurb: 'One connected flow from a family\'s first application through to an enrolled, class-assigned student.',
    screenshots: [
      { src: '/screenshots/admissions/admission-lifecycle.png', caption: 'Admission Lifecycle dashboard — leads, applications, evaluation, and enrollment funnel in one view' },
    ],
    modules: [
      { name: 'Admission Life Cycle', desc: 'Applications through to enrollment' },
    ],
  },
  {
    slug: 'academics', name: 'Academics', color: '#3E7CB1',
    blurb: 'Curriculum, syllabus tracking, timetabling, and the library — all reading from the same academic structure.',
    screenshots: [
      { src: '/screenshots/academics/curriculum-subjects.png', caption: 'Curriculum Intelligence — subject catalogue with grade coverage and weekly periods' },
      { src: '/screenshots/academics/curriculum-overview.png', caption: 'Academics overview — subjects, curricula, syllabi, and library in one dashboard' },
      { src: '/screenshots/academics/timetable-planner.png', caption: 'Timetable Intelligence — conflict detection across teachers, rooms, and periods' },
    ],
    modules: [
      { name: 'Curriculum Intelligence', desc: 'SLO mapping, progression grids' },
      { name: 'Syllabus Coverage', desc: 'Lesson-by-lesson coverage tracking' },
      { name: 'Timetable Intelligence', desc: 'Conflict-free scheduling' },
      { name: 'Library Management', desc: 'Catalogue, loans, and returns' },
    ],
  },
  {
    slug: 'students', name: 'Students', color: '#C97E12',
    blurb: 'A single student profile carrying academics, behaviour, and Tarbiyah — not five different records in five different places.',
    screenshots: [
      { src: '/screenshots/students/student-360.png', caption: 'Student 360 — one profile spanning personal info, guardians, attendance, fees, and behaviour' },
      { src: '/screenshots/students/assessment-module.png', caption: 'Assessment Module — question bank, mark entry, results, and grade analytics' },
      { src: '/screenshots/students/behaviour-tarbiyah.png', caption: 'Behaviour & Tarbiyah — conduct records, interventions, and Tarbiyah assessment tracking' },
    ],
    modules: [
      { name: 'Student Profile', desc: 'One record per student, not five' },
      { name: 'Assessment', desc: 'Grading, report cards, results' },
      { name: 'Behaviour & Tarbiyah', desc: 'Conduct records, Salah & Hifz tracking' },
    ],
  },
  {
    slug: 'intelligence', name: 'Intelligence', color: '#071A2C',
    blurb: 'Cross-module analytics and AI-generated insights, drawing on the data every other module already collects.',
    screenshots: [
      { src: '/screenshots/intelligence/analytics-overview.png', caption: 'Analytics & Intelligence — institution health score drawing live data from every module' },
    ],
    modules: [
      { name: 'Data Intelligence', desc: 'Cross-module analytics & AI insights' },
    ],
  },
]

export const allModuleNames = moduleGroups.flatMap(g => g.modules.map(m => m.name))
