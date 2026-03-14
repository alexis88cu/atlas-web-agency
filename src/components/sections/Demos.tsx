const demos = [
  { slug: 'contractor', label: 'Contractor / Roofing', color: 'from-orange-900/30 to-orange-800/10', border: 'border-orange-500/30', tag: 'bg-orange-500/20 text-orange-300' },
  { slug: 'restaurant', label: 'Restaurant', color: 'from-red-900/30 to-red-800/10', border: 'border-red-500/30', tag: 'bg-red-500/20 text-red-300' },
  { slug: 'medical', label: 'Dentist / Med Spa', color: 'from-teal-900/30 to-teal-800/10', border: 'border-teal-500/30', tag: 'bg-teal-500/20 text-teal-300' },
  { slug: 'real-estate', label: 'Real Estate Agent', color: 'from-purple-900/30 to-purple-800/10', border: 'border-purple-500/30', tag: 'bg-purple-500/20 text-purple-300' },
  { slug: 'local-business', label: 'Barbershop / Salon', color: 'from-pink-900/30 to-pink-800/10', border: 'border-pink-500/30', tag: 'bg-pink-500/20 text-pink-300' },
]

export default function Demos() {
  return (
    <section id="demos" className="py-24 bg-gradient-to-b from-transparent to-blue-950/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Demo Websites</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">See what we can build<br />for your business</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Click any demo to preview a real website design for your industry.
            We can customize it with your brand in minutes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map(({ slug, label, color, border, tag }) => (
            <a
              key={slug}
              href={`/demo/${slug}`}
              className={`group relative p-8 bg-gradient-to-br ${color} border ${border} rounded-3xl hover:scale-105 transition-all duration-200 cursor-pointer`}
            >
              {/* Preview mockup */}
              <div className="bg-slate-900/80 rounded-xl p-4 mb-5 h-40 flex flex-col gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 flex flex-col gap-2 pt-2">
                  <div className="h-3 bg-white/20 rounded w-3/4" />
                  <div className="h-2 bg-white/10 rounded w-1/2" />
                  <div className="h-2 bg-white/10 rounded w-2/3" />
                  <div className="mt-2 h-7 bg-blue-500/40 rounded-lg w-32" />
                </div>
              </div>

              <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${tag} mb-3`}>
                Demo
              </div>
              <h3 className="font-bold text-lg">{label}</h3>
              <p className="text-slate-400 text-sm mt-1">Click to preview →</p>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}

          {/* Custom CTA card */}
          <a
            href="https://wa.me/17864353507?text=Hi!%20I%27d%20like%20a%20custom%20demo%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-blue-600/20 border border-blue-500/40 border-dashed rounded-3xl hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center text-center gap-4"
          >
            <div className="w-14 h-14 bg-blue-600/30 border border-blue-500/40 rounded-2xl flex items-center justify-center text-2xl">
              ✨
            </div>
            <div>
              <h3 className="font-bold text-lg">Want a custom demo?</h3>
              <p className="text-slate-400 text-sm mt-1">
                Tell us your business and we'll build a personalized demo for free.
              </p>
            </div>
            <span className="text-blue-400 text-sm font-semibold">Request your free demo →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
