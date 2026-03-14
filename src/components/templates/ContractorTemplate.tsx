import DemoBanner from './DemoBanner'

export default function ContractorTemplate() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <DemoBanner niche="Contractor / Roofing" slug="contractor" />

      {/* Nav */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl text-orange-400">ProRoof <span className="text-white">Miami</span></div>
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Gallery</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <a href="https://wa.me/17864353507?text=I%20want%20a%20website%20like%20the%20contractor%20demo" className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors">
          Free Estimate
        </a>
      </nav>

      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-gray-950" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm px-4 py-1 rounded-full mb-6">
            Licensed & Insured · Miami-Dade County
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Miami's Trusted<br /><span className="text-orange-400">Roofing Experts</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Quality roof repairs, replacements, and installations for residential and commercial properties.
            Free estimates. Fast turnaround. 10-year warranty.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              Get Free Estimate
            </a>
            <a href="tel:+17864353507" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              Call (786) 435-3507
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-orange-500">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[['500+', 'Roofs Completed'], ['15+', 'Years Experience'], ['10yr', 'Warranty'], ['5★', 'Google Rating']].map(([n, l]) => (
            <div key={l}><div className="text-3xl font-black">{n}</div><div className="text-orange-100 text-sm mt-1">{l}</div></div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">Our Roofing Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🏠', title: 'Roof Replacement', desc: 'Full roof replacement with premium materials and 10-year warranty.' },
            { icon: '🔧', title: 'Roof Repair', desc: 'Fix leaks, missing shingles, and storm damage fast.' },
            { icon: '🏢', title: 'Commercial Roofing', desc: 'Flat roofs, TPO, EPDM for commercial buildings.' },
            { icon: '⛈️', title: 'Storm Damage', desc: 'Emergency repairs after hurricanes and storms.' },
            { icon: '🔍', title: 'Roof Inspection', desc: 'Free detailed inspection with written report.' },
            { icon: '🌡️', title: 'Roof Insulation', desc: 'Improve energy efficiency and reduce cooling costs.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-orange-500/40 transition-colors">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-black mb-4">Ready for a free roof estimate?</h2>
        <p className="text-gray-400 mb-8">We'll inspect your roof and give you an honest quote — no obligation.</p>
        <a href="https://wa.me/17864353507?text=I%20want%20a%20website%20like%20this%20for%20my%20business" className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block">
          Get This Website for Your Business →
        </a>
      </section>

      <footer className="py-8 px-6 text-center text-gray-600 text-sm border-t border-gray-800">
        © 2026 ProRoof Miami · This is a demo by Atlas Web Agency · atlaswebagency.net
      </footer>
    </div>
  )
}
