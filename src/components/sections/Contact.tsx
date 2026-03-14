export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black mb-6">
            Let's talk about<br />your business
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Send us a message and we'll show you what your business website could look like.
            No commitment, no sales pressure — just a free consultation.
          </p>

          <div className="space-y-6">
            <a
              href="https://wa.me/17864353507"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-green-500/10 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                📱
              </div>
              <div>
                <div className="font-semibold text-sm text-green-300">WhatsApp (fastest)</div>
                <div className="text-white font-bold">+1 (786) 435-3507</div>
                <div className="text-slate-500 text-xs">Usually responds within 1 hour</div>
              </div>
            </a>

            <a
              href="mailto:sonny.onlyone@gmail.com"
              className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✉️
              </div>
              <div>
                <div className="font-semibold text-sm text-blue-300">Email</div>
                <div className="text-white font-bold">sonny.onlyone@gmail.com</div>
                <div className="text-slate-500 text-xs">Response within 24 hours</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                📍
              </div>
              <div>
                <div className="font-semibold text-sm text-blue-300">Location</div>
                <div className="text-white font-bold">Florida, United States</div>
                <div className="text-slate-500 text-xs">Serving businesses nationwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Contact form */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="font-bold text-xl mb-6">Send us a message</h3>
          <form
            action={`https://formsubmit.co/sonny.onlyone@gmail.com`}
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="New Lead — Atlas Web Agency" />
            <input type="hidden" name="_next" value="https://atlaswebagency.net/thank-you" />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="block text-sm text-slate-400 mb-1">Your name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Smith"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Business name</label>
              <input
                type="text"
                name="business"
                required
                placeholder="Miami Roofing Experts"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Phone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (305) 000-0000"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@business.com"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Tell us about your business</label>
              <textarea
                name="message"
                rows={4}
                placeholder="We are a roofing company in Miami looking for a website to get more leads..."
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-4 rounded-xl transition-colors text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
