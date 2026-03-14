import DemoBanner from './DemoBanner'

export default function RestaurantTemplate() {
  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      <DemoBanner niche="Restaurant" slug="restaurant" />

      <nav className="bg-stone-900/90 backdrop-blur px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl"><span className="text-yellow-400">La Bella</span> Miami</div>
        <div className="hidden md:flex gap-6 text-sm text-stone-300">
          <a href="#" className="hover:text-white">Menu</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Gallery</a>
          <a href="#" className="hover:text-white">Reservations</a>
        </div>
        <a href="#" className="bg-yellow-500 hover:bg-yellow-400 text-stone-900 text-sm font-bold px-5 py-2 rounded-lg transition-colors">
          Reserve a Table
        </a>
      </nav>

      {/* Hero */}
      <section className="relative py-32 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-stone-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-yellow-400 text-sm tracking-widest uppercase mb-4">Fine Italian Cuisine · Little Havana, Miami</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Taste the<br /><span className="text-yellow-400">Authentic Italy</span><br />in Miami
          </h1>
          <p className="text-stone-300 text-xl mb-10">
            Handmade pasta, wood-fired pizza, and classic Italian flavors made from family recipes passed down for generations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="bg-yellow-500 hover:bg-yellow-400 text-stone-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              Reserve a Table
            </a>
            <a href="#" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-4">Our Specialties</h2>
        <p className="text-stone-400 text-center mb-12">Fresh ingredients. Authentic recipes. Made with love.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🍕', name: 'Wood-Fired Pizza', price: 'from $16' },
            { icon: '🍝', name: 'Handmade Pasta', price: 'from $18' },
            { icon: '🥩', name: 'Veal Ossobuco', price: 'from $28' },
            { icon: '🍮', name: 'Tiramisu', price: 'from $8' },
          ].map(({ icon, name, price }) => (
            <div key={name} className="p-6 bg-stone-900 border border-stone-800 rounded-2xl text-center hover:border-yellow-500/40 transition-colors">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-bold mb-1">{name}</h3>
              <p className="text-yellow-400 text-sm">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-stone-900">
        <h2 className="text-3xl font-black mb-4">Want a website like this?</h2>
        <p className="text-stone-400 mb-8">$250 setup + $14.99/month — Atlas Web Agency</p>
        <a href="https://wa.me/17864353507?text=I%20want%20a%20restaurant%20website%20like%20the%20demo" className="bg-yellow-500 hover:bg-yellow-400 text-stone-900 font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block">
          Get This for Your Restaurant →
        </a>
      </section>

      <footer className="py-8 px-6 text-center text-stone-600 text-sm border-t border-stone-800">
        © 2026 La Bella Miami · Demo by Atlas Web Agency · atlaswebagency.net
      </footer>
    </div>
  )
}
