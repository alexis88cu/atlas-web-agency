export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#0B1120] to-[#0B1120]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-blue-300 text-sm font-medium">Florida-based — Serving all 50 states</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Your Business Deserves<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            a Better Website
          </span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We build modern, fast, and mobile-friendly websites that help local businesses
          attract more customers — starting at <strong className="text-white">$250 setup + $14.99/month</strong>.
          No hidden fees. Ever.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/17864353507?text=Hi%20Atlas%20Web%20Agency%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-lg shadow-green-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.524 5.825L.057 23.976l6.318-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm.001 21.818a9.818 9.818 0 01-5.007-1.366l-.359-.213-3.731.854.871-3.645-.234-.374A9.797 9.797 0 012.182 12c0-5.415 4.404-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.414-4.403 9.818-9.818 9.818z"/>
            </svg>
            Chat on WhatsApp
          </a>
          <a
            href="#demos"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all"
          >
            See Demo Websites
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-wrap gap-8 justify-center items-center">
          {[
            { icon: '⚡', label: 'Fast delivery — 5 to 7 days' },
            { icon: '📱', label: '100% mobile optimized' },
            { icon: '🔒', label: 'SSL included' },
            { icon: '💰', label: 'No hidden fees' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-slate-400 text-sm">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
