const niches = [
  { icon: '🏠', name: 'Roofing Companies', desc: 'Get more estimate requests' },
  { icon: '❄️', name: 'HVAC & AC Repair', desc: 'Generate service calls' },
  { icon: '🔧', name: 'Plumbers', desc: 'More emergency calls' },
  { icon: '⚡', name: 'Electricians', desc: 'Stand out locally' },
  { icon: '🍽️', name: 'Restaurants', desc: 'Fill more tables' },
  { icon: '🦷', name: 'Dentists & Med Spas', desc: 'Book more appointments' },
  { icon: '🏡', name: 'Real Estate Agents', desc: 'Showcase your listings' },
  { icon: '✂️', name: 'Barbershops & Salons', desc: 'Get more bookings' },
  { icon: '🧹', name: 'Cleaning Services', desc: 'Attract residential clients' },
  { icon: '🚗', name: 'Auto Detailing', desc: 'More appointments online' },
  { icon: '⚖️', name: 'Lawyers & Consultants', desc: 'Build authority fast' },
  { icon: '🏋️', name: 'Gyms & Fitness', desc: 'Grow memberships' },
]

export default function Niches() {
  return (
    <section id="niches" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Industries We Serve</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-black">We build websites for<br />businesses like yours</h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          Specialized in local service businesses across Florida and the entire US.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {niches.map(({ icon, name, desc }) => (
          <div
            key={name}
            className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 hover:bg-white/8 transition-all group"
          >
            <div className="text-3xl mb-3">{icon}</div>
            <div className="font-semibold text-sm mb-1 group-hover:text-blue-300 transition-colors">{name}</div>
            <div className="text-slate-500 text-xs">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
