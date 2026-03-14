export default function CTA() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-500/30 p-12 md:p-16 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ready to grow your business online?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Get a professional website that works for you 24/7.
            Setup in 5-7 days. No contracts. No hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/17864353507?text=Hi%20Atlas%20Web%20Agency!%20I%27m%20ready%20to%20get%20my%20business%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-lg shadow-green-500/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.524 5.825L.057 23.976l6.318-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm.001 21.818a9.818 9.818 0 01-5.007-1.366l-.359-.213-3.731.854.871-3.645-.234-.374A9.797 9.797 0 012.182 12c0-5.415 4.404-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.414-4.403 9.818-9.818 9.818z"/>
              </svg>
              Start on WhatsApp
            </a>
            <a
              href="mailto:sonny.onlyone@gmail.com?subject=I want a website for my business"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all"
            >
              Send an Email
            </a>
          </div>

          <p className="mt-8 text-blue-200/60 text-sm">
            Response within 24 hours · No commitment required · Free demo available
          </p>
        </div>
      </div>
    </section>
  )
}
