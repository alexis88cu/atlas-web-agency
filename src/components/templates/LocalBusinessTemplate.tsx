import DemoBanner from './DemoBanner'

export default function LocalBusinessTemplate() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <DemoBanner niche="Barbershop / Salon" slug="local-business" />

      <nav className="bg-neutral-900 border-b border-neutral-800 px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl"><span className="text-pink-400">The Sharp</span> Shop</div>
        <div className="hidden md:flex gap-6 text-sm text-neutral-300">
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Gallery</a>
          <a href="#" className="hover:text-white">Team</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <a href="#" className="bg-pink-500 hover:bg-pink-400 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors">
          Book Now
        </a>
      </nav>

      <section className="relative py-28 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 to-neutral-950" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-pink-400 text-sm tracking-widest uppercase mb-4">Premium Barbershop · Doral, FL</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Look Sharp.<br /><span className="text-pink-400">Feel Confident.</span>
          </h1>
          <p className="text-neutral-300 text-xl mb-10">
            Premium haircuts, fades, beard trims, and hot towel shaves.
            Walk-ins welcome. Online booking available.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              Book Appointment
            </a>
            <a href="tel:+17864353507" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">Our Services & Prices</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '✂️', name: 'Haircut', price: '$25', desc: 'Classic or modern cut, any style.' },
            { icon: '💈', name: 'Fade', price: '$30', desc: 'Low, mid, or high fade with precision.' },
            { icon: '🧔', name: 'Beard Trim', price: '$15', desc: 'Shape and trim your beard perfectly.' },
            { icon: '🪒', name: 'Hot Towel Shave', price: '$35', desc: 'Traditional straight razor shave.' },
            { icon: '✨', name: 'Cut + Beard', price: '$40', desc: 'Full grooming package deal.' },
            { icon: '👶', name: 'Kids Cut', price: '$15', desc: 'Patient service for kids under 12.' },
          ].map(({ icon, name, price, desc }) => (
            <div key={name} className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-pink-500/40 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div className="text-3xl">{icon}</div>
                <span className="text-pink-400 font-black text-xl">{price}</span>
              </div>
              <h3 className="font-bold text-lg mb-1">{name}</h3>
              <p className="text-neutral-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-4">What Our Clients Say</h2>
        <p className="text-neutral-400 text-center mb-12">The go-to barbershop in Doral — straight from our regulars.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Tony M.', stars: 5, text: 'Best fade in Doral, period. Alex always delivers exactly what I ask for. Won\'t go anywhere else.' },
            { name: 'Chris V.', stars: 5, text: 'Been coming here for 2 years. The hot towel shave is an experience every man needs to try at least once.' },
            { name: 'Robert D.', stars: 5, text: 'Brought my son for his first real haircut. The barbers were super patient and he absolutely loves his new look.' },
            { name: 'Miguel A.', stars: 5, text: 'Clean shop, great music, and even better cuts. My whole crew comes here now — nobody leaves disappointed.' },
          ].map(({ name, stars, text }) => (
            <div key={name} className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col gap-3">
              <div className="flex gap-0.5 text-pink-400 text-sm">{'★'.repeat(stars)}</div>
              <p className="text-neutral-300 text-sm leading-relaxed">"{text}"</p>
              <div className="mt-auto pt-3 border-t border-neutral-800">
                <div className="font-semibold text-sm">{name}</div>
                <div className="text-neutral-500 text-xs">Google Review</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-neutral-900">
        <h2 className="text-3xl font-black mb-4">Want this for your barbershop or salon?</h2>
        <p className="text-neutral-400 mb-8">$250 setup + $14.99/month — Atlas Web Agency</p>
        <a href="https://wa.me/17864353507?text=I%20want%20a%20barbershop%20website%20like%20the%20demo" className="bg-pink-500 hover:bg-pink-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block">
          Get This for Your Business →
        </a>
      </section>

      <footer className="py-8 px-6 text-center text-neutral-600 text-sm border-t border-neutral-800">
        © 2026 The Sharp Shop · Demo by Atlas Web Agency · atlaswebagency.net
      </footer>
    </div>
  )
}
