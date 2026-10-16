import type { RoleData } from '../data/roles'
import { sampleChartBars, sampleChartMonths } from '../data/roles'

const sidebarNav = ['Overview', 'Admissions', 'Academics', 'Teaching', 'Students', 'Finance', 'Reports', 'Settings']

function BarChart({ title }: { title: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
      <p className="text-xs text-white/50 font-mono uppercase tracking-wide mb-4">{title}</p>
      <div className="flex items-end gap-2 h-28">
        {sampleChartBars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full bg-gold/80 rounded-t" style={{ height: `${h}%` }} />
            <span className="text-[10px] text-white/40">{sampleChartMonths[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TeacherTimeline() {
  const items = [
    { time: '08:30–09:10', title: 'English · Grade 4', meta: 'Room 04' },
    { time: '', title: 'Lesson plan review', meta: 'Prepare your next learning activity' },
    { time: '10:00–10:40', title: 'Science · Grade 5', meta: 'Room 08' },
  ]
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
      <p className="text-xs text-white/50 font-mono uppercase tracking-wide mb-1">Today&apos;s schedule</p>
      {items.map((it, i) => (
        <div key={i} className="flex items-start gap-3 py-2 border-t border-white/10 first:border-t-0 first:pt-0">
          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
          <div>
            <p className="text-sm text-white font-medium">{it.title}</p>
            <p className="text-xs text-white/50">{[it.time, it.meta].filter(Boolean).join(' · ')}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ParentRows() {
  const rows = [
    { initials: 'HW', title: 'English reading', meta: 'Homework · Grade 4', pill: 'Assigned' },
    { initials: 'PM', title: 'Parent meeting', meta: 'School communication', pill: 'Update' },
  ]
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
      <p className="text-xs text-white/50 font-mono uppercase tracking-wide mb-1">This week at school</p>
      {rows.map((r, i) => (
        <div key={i} className="flex items-center gap-3 py-2 border-t border-white/10 first:border-t-0 first:pt-0">
          <div className="w-9 h-9 rounded-full bg-sky/20 text-sky flex items-center justify-center text-xs font-display font-bold shrink-0">{r.initials}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white font-medium truncate">{r.title}</p>
            <p className="text-xs text-white/50 truncate">{r.meta}</p>
          </div>
          <span className="shrink-0 text-[10px] font-semibold bg-gold/15 text-gold-light px-2 py-1 rounded-full">{r.pill}</span>
        </div>
      ))}
    </div>
  )
}

export default function DashboardMock({ role }: { role: RoleData }) {
  return (
    <div className="rounded-xl bg-[#0F2540] border border-white/10 shadow-soft overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-xs font-mono text-white/40">eldermin · school workspace</span>
      </div>
      <div className="flex">
        <div className="hidden sm:block w-36 shrink-0 border-r border-white/10 p-4 space-y-1">
          <div className="font-display font-bold text-white text-sm mb-4">elder·min</div>
          {sidebarNav.map(item => (
            <div key={item} className={`text-xs rounded-md px-2.5 py-1.5 ${item === role.nav ? 'bg-gold/15 text-gold-light font-semibold' : 'text-white/50'}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 p-5 min-w-0">
          <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">My school / {role.nav}</p>
          <h4 className="font-display font-bold text-white text-lg mb-0.5">{role.screen}</h4>
          <p className="text-xs text-white/50 mb-5">{role.sub}</p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {role.stats.map(s => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="font-mono text-xl font-semibold text-gold">{s.value}</div>
                <div className="text-[10px] text-white/45 mt-0.5">{s.label}</div>
                <div className="text-[9px] text-green/80 mt-1">Sample school data</div>
              </div>
            ))}
          </div>
          {role.key === 'teachers' ? <TeacherTimeline /> : role.key === 'parents' ? <ParentRows /> : <BarChart title={role.chartTitle} />}
        </div>
      </div>
    </div>
  )
}
