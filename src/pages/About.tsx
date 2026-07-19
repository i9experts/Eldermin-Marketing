import Logo from '../components/Logo'

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-deep mb-6">Built for Islamic schools, from the ground up</h1>
          <p className="text-slate text-xl leading-relaxed">Eldermin started with a simple observation: Islamic schools run on the same patchwork of spreadsheets, registers, and disconnected apps as everyone else — except their needs, like Tarbiyah tracking and prayer-time scheduling, were never on anyone else's roadmap.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-display font-bold text-navy-deep mb-4">Our mission</h2>
            <p className="text-slate leading-relaxed">Give every Islamic school one connected system for admissions, academics, finance, HR, and Tarbiyah — so admin staff spend less time re-entering the same data three times, and school leaders get a real, current picture of their institution.</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-navy-deep mb-4">Where we are</h2>
            <p className="text-slate leading-relaxed">Eldermin is live and in daily use at 8 schools across Pakistan today, and we're building toward serving thousands. We'd rather grow from real schools' feedback than launch loud and fix things later.</p>
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-2xl font-display font-bold text-navy-deep mb-8 text-center">Founder</h2>
          <div className="max-w-sm mx-auto text-center bg-mist rounded-xl p-8">
            <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-xl mx-auto mb-4">AA</div>
            <div className="font-display font-semibold text-navy-deep">Atiq ur Rehman Ayubi</div>
            <div className="text-sm text-slate-light mt-1">Founder, Eldermin</div>
          </div>
        </div>
        <div className="bg-navy-deep rounded-xl p-10 text-white text-center">
          <div className="flex justify-center mb-4"><Logo dark /></div>
          <p className="text-navy-pale/80 mb-6 max-w-lg mx-auto">Want to talk about bringing Eldermin to your school, or partner with us?</p>
          <a href="mailto:hello@eldermin.com" className="inline-block bg-amber hover:bg-amber-dark text-navy-deep font-display font-semibold px-8 py-3 rounded-lg transition-colors">Get in touch</a>
        </div>
      </div>
    </div>
  )
}
