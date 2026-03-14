import DemoBanner from './DemoBanner'

export default function MedicalTemplate() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <DemoBanner niche="Dentist / Med Spa" slug="medical" />

      <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl"><span className="text-teal-400">SmilePro</span> Dental</div>
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Doctors</a>
          <a href="#" className="hover:text-white">Insurance</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <a href="#" className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors">
          Book Appointment
        </a>
      </nav>

      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-slate-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-block bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm px-4 py-1 rounded-full mb-6">
            Accepting New Patients · Coral Gables, FL
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Your Perfect Smile<br /><span className="text-teal-400">Starts Here</span>
          </h1>
          <p className="text-slate-300 text-xl mb-10">
            Modern, comfortable dental care for the whole family. General dentistry, cosmetic procedures, and emergency appointments available.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              Book an Appointment
            </a>
            <a href="tel:+17864353507" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🦷', title: 'General Dentistry', desc: 'Cleanings, fillings, exams, and preventive care.' },
            { icon: '✨', title: 'Teeth Whitening', desc: 'Professional whitening for a brighter smile.' },
            { icon: '😁', title: 'Invisalign', desc: 'Clear aligners to straighten your teeth discreetly.' },
            { icon: '🔬', title: 'Dental Implants', desc: 'Permanent solution for missing teeth.' },
            { icon: '🚨', title: 'Emergency Care', desc: 'Same-day emergency appointments available.' },
            { icon: '👶', title: 'Pediatric Dentistry', desc: 'Gentle care for children of all ages.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-teal-500/40 transition-colors">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-slate-900">
        <h2 className="text-3xl font-black mb-4">Want this website for your practice?</h2>
        <p className="text-slate-400 mb-8">$250 setup + $14.99/month — Atlas Web Agency</p>
        <a href="https://wa.me/17864353507?text=I%20want%20a%20medical%20website%20like%20the%20demo" className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block">
          Get This for Your Practice →
        </a>
      </section>

      <footer className="py-8 px-6 text-center text-slate-600 text-sm border-t border-slate-800">
        © 2026 SmilePro Dental · Demo by Atlas Web Agency · atlaswebagency.net
      </footer>
    </div>
  )
}
