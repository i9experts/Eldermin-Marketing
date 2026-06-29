export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="160" height="38" viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Logomark: two interlocking arcs forming a crescent + book motif */}
      <circle cx="16" cy="19" r="15" fill="#1B4F8A"/>
      <circle cx="16" cy="19" r="10" fill="#0C2547"/>
      {/* Crescent */}
      <path d="M16 8 C22 8 27 13 27 19 C27 25 22 30 16 30 C18 27 19 23 19 19 C19 15 18 11 16 8Z" fill="#F5A623"/>
      {/* Dot */}
      <circle cx="13" cy="19" r="2.5" fill="#FAC05A"/>
      <text x="37" y="26" fontFamily="'Inter','Arial',sans-serif" fontWeight="800" fontSize="21" fill="#1B4F8A" letterSpacing="-0.5">eldermin</text>
    </svg>
  )
}