const schools = [
  'Al-Noor Islamic School', 'Greenfield Academy', 'Kings College Lagos', 'Hillcrest School',
  'Atlantic Hall', 'Dar ul-Uloom', 'Corona Secondary', 'Deeper Life High School',
  'Meadow Hall', 'Lekki British School', 'Madrasa Al-Irshad', 'Chrisland Schools',
  'Lead British Int\'l', 'Caleb Schools', 'Premiere Academy', 'Faith Academy',
  'Loyola Jesuit College', 'Al-Hikmah University', 'Islamiyya Model School', 'Darul Hadith',
]

export default function Marquee() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
        Trusted by leading Islamic &amp; independent schools
      </p>
      <div className="flex gap-6 whitespace-nowrap" style={{ animation: 'marquee 35s linear infinite' }}>
        {[...schools, ...schools].map((name, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-navy font-semibold text-sm px-4 py-2 bg-blue-pale rounded-full shrink-0 border border-blue/10">
            🏫 {name}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  )
}