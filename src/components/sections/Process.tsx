const steps = [
  {
    num: '01',
    title: 'Tell us about your business',
    desc: 'Send us a WhatsApp or email. We\'ll ask a few simple questions about your services, location, and goals.',
  },
  {
    num: '02',
    title: 'We design your website',
    desc: 'Our team builds a modern, professional website tailored to your business — within 5 to 7 days.',
  },
  {
    num: '03',
    title: 'Review and launch',
    desc: 'You review the site, we make any adjustments, and then we go live with your domain.',
  },
  {
    num: '04',
    title: 'We handle everything monthly',
    desc: 'For just $14.99/month we keep your site hosted, secure, and updated. You focus on running your business.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">How It Works</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-black">From idea to online<br />in 4 simple steps</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="relative p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-5xl font-black text-blue-900/60 mb-4">{num}</div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
