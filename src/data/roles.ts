export interface RoleStat { label: string; value: string }
export interface RoleData {
  key: string
  tab: string
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  screen: string
  sub: string
  stats: RoleStat[]
  chartTitle: string
  nav: string
}

export const roles: RoleData[] = [
  {
    key: 'leaders', tab: 'School leaders', eyebrow: 'A clearer view of your whole school', title: 'Lead with the full picture.',
    body: 'Bring campuses, people, finances and learning into one conversation. Spend less time gathering updates and more time acting on them.',
    bullets: ['A connected view across your school', 'Shared records with role-based access', 'Reports that support everyday decisions'],
    screen: 'School overview', sub: 'A connected view of your institution',
    stats: [{ label: 'Campuses', value: '3' }, { label: 'Students', value: '1,248' }, { label: 'Attendance', value: '94%' }],
    chartTitle: 'Attendance overview', nav: 'Overview',
  },
  {
    key: 'teachers', tab: 'Teachers', eyebrow: 'More clarity in every teaching day', title: 'Keep your teaching day together.',
    body: 'Move between lesson plans, homework, assessments and student records without losing the thread of a child’s progress.',
    bullets: ['Plan and submit lessons', 'Assign homework and record assessments', 'Track syllabus coverage and student development'],
    screen: 'Your teaching day', sub: 'Your classes, planning and follow-up',
    stats: [{ label: 'Classes today', value: '4' }, { label: 'Lesson plans', value: '6' }, { label: 'To review', value: '12' }],
    chartTitle: "Today's schedule", nav: 'Teaching',
  },
  {
    key: 'finance', tab: 'Finance teams', eyebrow: 'From collections to clear reports', title: 'Know what is paid. See what is due.',
    body: 'Keep fees, family records and outstanding balances together. Review reports grouped by class and section, with useful subtotals.',
    bullets: ['Fee collection and outstanding reports', 'Summary and detailed reporting', 'Linked siblings and guardian records'],
    screen: 'Fee overview', sub: 'Collection and outstanding balances',
    stats: [{ label: 'Collected', value: '82%' }, { label: 'Outstanding', value: '18%' }, { label: 'Classes', value: '24' }],
    chartTitle: 'Collections by month', nav: 'Finance',
  },
  {
    key: 'parents', tab: 'Parents', eyebrow: 'A stronger school–home connection', title: 'Keep families part of the journey.',
    body: 'Give parents a clearer view of school communication and student information through a mobile-friendly experience.',
    bullets: ['School updates and messages', 'Homework and student information', "A connected view of their child's journey"],
    screen: 'Student overview', sub: 'Learning, communication and development',
    stats: [{ label: 'Attendance', value: '96%' }, { label: 'Homework', value: '3' }, { label: 'Updates', value: '2' }],
    chartTitle: 'This week at school', nav: 'Students',
  },
]

/** The illustrative 8-bar chart shape reused by the leaders/finance dashboard mocks. */
export const sampleChartBars = [42, 58, 47, 72, 64, 88, 81, 96]
export const sampleChartMonths = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
