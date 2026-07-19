interface LogoProps {
  className?: string
  mark?: boolean
  dark?: boolean
}

/** The real Eldermin mark: a connected node-graph forming an "L", plus the elder•min wordmark. */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="8" x2="34" y2="8" stroke="#BFD7EE" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="8" x2="10" y2="36" stroke="#BFD7EE" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="36" x2="34" y2="36" stroke="#BFD7EE" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="22" x2="25" y2="22" stroke="#BFD7EE" strokeWidth="3" strokeLinecap="round" />
      <line x1="27" y1="17" x2="34" y2="9" stroke="#154E86" strokeWidth="2" strokeLinecap="round" strokeDasharray="1.5 3.2" />
      <line x1="27" y1="27" x2="34" y2="35" stroke="#154E86" strokeWidth="2" strokeLinecap="round" strokeDasharray="1.5 3.2" />
      <circle cx="10" cy="8" r="5.5" fill="#071A2C" />
      <circle cx="34" cy="8" r="4.5" fill="#0C447C" />
      <circle cx="10" cy="22" r="4.5" fill="#0C447C" />
      <circle cx="10" cy="36" r="5.5" fill="#071A2C" />
      <circle cx="34" cy="36" r="4.5" fill="#0C447C" />
      <circle cx="26" cy="22" r="6.5" fill="#EF9F27" />
    </svg>
  )
}

export default function Logo({ className = '', mark = false, dark = false }: LogoProps) {
  const elderColor = dark ? '#FFFFFF' : '#0C2E52'
  const minColor = dark ? '#BFD7EE' : '#3E7CB1'
  if (mark) return <LogoMark className={className} />
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="w-8 h-8 shrink-0" />
      <span className="font-display font-bold text-[1.4rem] leading-none tracking-tight">
        <span style={{ color: elderColor }}>elder</span>
        <span style={{ color: '#EF9F27' }}>&middot;</span>
        <span style={{ color: minColor }}>min</span>
      </span>
    </span>
  )
}
