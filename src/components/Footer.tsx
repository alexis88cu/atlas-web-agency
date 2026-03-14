export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="font-bold text-white text-lg">Atlas <span className="text-blue-400">Web Agency</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              We build modern, fast, and mobile-friendly websites that help local businesses
              attract more customers. Starting at $250 setup + $14.99/month.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://wa.me/17864353507"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.524 5.825L.057 23.976l6.318-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.626 0 11.999 0zm.001 21.818a9.818 9.818 0 01-5.007-1.366l-.359-.213-3.731.854.871-3.645-.234-.374A9.797 9.797 0 012.182 12c0-5.415 4.404-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.414-4.403 9.818-9.818 9.818z"/>
                </svg>
              </a>
              <a
                href="mailto:sonny.onlyone@gmail.com"
                className="w-9 h-9 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {['Website Design', 'E-Commerce', 'Local SEO', 'Landing Pages', 'Website Maintenance'].map((s) => (
                <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="https://wa.me/17864353507" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+1 (786) 435-3507</a></li>
              <li><a href="mailto:sonny.onlyone@gmail.com" className="hover:text-white transition-colors">sonny.onlyone@gmail.com</a></li>
              <li className="text-slate-500">Florida, United States</li>
              <li><a href="https://atlaswebagency.net" className="hover:text-white transition-colors">atlaswebagency.net</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 Atlas Web Agency. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Building the digital world for your business.</p>
        </div>
      </div>
    </footer>
  )
}
