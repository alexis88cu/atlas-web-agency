const reasons = [
  { stat: '$250', label: 'Flat setup fee — no surprises' },
  { stat: '$14.99', label: 'Per month, all-inclusive' },
  { stat: '5-7', label: 'Days to launch your site' },
  { stat: '100%', label: 'Mobile optimized, always' },
]

const perks = [
  'Professional design tailored to your industry',
  'SSL certificate included (https)',
  'Custom domain connection',
  'Hosting included — no extra fees',
  'Fast load speed on all devices',
  'Contact form connected to your email',
  'Google Maps embed for local businesses',
  'Social media links integration',
  'WhatsApp chat button',
  'Local SEO foundations',
]

export default function WhyUs() {
  return (
    <section id="why" className="py-24 bg-gradient-to-b from-transparent to-blue-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Why Atlas</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">Simple pricing.<br />Serious results.</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {reasons.map(({ stat, label }) => (
            <div key={label} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-4xl font-black text-blue-400 mb-2">{stat}</div>
              <div className="text-slate-300 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Perks */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h3 className="font-bold text-xl mb-6 text-center">Everything included in every plan:</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {perks.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-300 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
