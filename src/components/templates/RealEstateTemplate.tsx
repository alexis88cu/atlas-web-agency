import DemoBanner from './DemoBanner'

export default function RealEstateTemplate() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <DemoBanner niche="Real Estate Agent" slug="real-estate" />

      <nav className="bg-zinc-900/90 backdrop-blur px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl"><span className="text-purple-400">Maria</span> Realty</div>
        <div className="hidden md:flex gap-6 text-sm text-zinc-300">
          <a href="#" className="hover:text-white">Listings</a>
          <a href="#" className="hover:text-white">Buy</a>
          <a href="#" className="hover:text-white">Sell</a>
          <a href="#" className="hover:text-white">About</a>
        </div>
        <a href="#" className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors">
          Free Consultation
        </a>
      </nav>

      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-zinc-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-purple-400 text-sm tracking-widest uppercase mb-4">Miami · Brickell · Coral Gables</p>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Find Your Dream<br /><span className="text-purple-400">Home in Miami</span>
          </h1>
          <p className="text-zinc-300 text-xl mb-10">
            Over 200 closed deals and 12 years of expertise in Miami real estate.
            Let me help you buy or sell your home with confidence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              View Listings
            </a>
            <a href="#" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-purple-600">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center text-white">
          {[['200+', 'Deals Closed'], ['$50M+', 'In Sales'], ['12yr', 'Experience']].map(([n, l]) => (
            <div key={l}><div className="text-3xl font-black">{n}</div><div className="text-purple-100 text-sm mt-1">{l}</div></div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">Featured Listings</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { area: 'Brickell', type: 'Luxury Condo', beds: 3, price: '$850,000', sqft: '1,800 sqft' },
            { area: 'Coral Gables', type: 'Single Family', beds: 4, price: '$1,200,000', sqft: '2,600 sqft' },
            { area: 'Wynwood', type: 'Modern Loft', beds: 2, price: '$520,000', sqft: '1,200 sqft' },
          ].map(({ area, type, beds, price, sqft }) => (
            <div key={area} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-colors">
              <div className="h-44 bg-gradient-to-br from-purple-900/30 to-zinc-800 flex items-center justify-center text-5xl">
                🏙️
              </div>
              <div className="p-5">
                <div className="text-purple-400 text-xs font-semibold uppercase mb-1">{area}</div>
                <h3 className="font-bold text-lg mb-1">{type}</h3>
                <div className="text-zinc-400 text-sm mb-3">{beds} beds · {sqft}</div>
                <div className="flex justify-between items-center">
                  <span className="font-black text-xl text-white">{price}</span>
                  <a href="#" className="bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-zinc-900">
        <h2 className="text-3xl font-black mb-4">Want this website for your real estate business?</h2>
        <p className="text-zinc-400 mb-8">$250 setup + $14.99/month — Atlas Web Agency</p>
        <a href="https://wa.me/17864353507?text=I%20want%20a%20real%20estate%20website%20like%20the%20demo" className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block">
          Get This for Your Business →
        </a>
      </section>

      <footer className="py-8 px-6 text-center text-zinc-600 text-sm border-t border-zinc-800">
        © 2026 Maria Realty · Demo by Atlas Web Agency · atlaswebagency.net
      </footer>
    </div>
  )
}
