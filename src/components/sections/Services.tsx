const services = [
  {
    icon: '🌐',
    title: 'Business Website Design',
    desc: 'Modern, professional websites tailored to your brand. Built to impress visitors and convert them into customers.',
  },
  {
    icon: '🛍️',
    title: 'E-Commerce Stores',
    desc: 'Sell your products or services online. Simple checkout, mobile-friendly, and easy to manage.',
  },
  {
    icon: '📍',
    title: 'Local SEO Foundation',
    desc: 'We set up your site with the right keywords, structure, and metadata so Google can find your business.',
  },
  {
    icon: '📱',
    title: 'Mobile Optimization',
    desc: 'Over 70% of visitors come from phones. Your website will look perfect on every screen size.',
  },
  {
    icon: '🔧',
    title: 'Website Maintenance',
    desc: 'We keep your site running fast, secure, and up to date every month — so you can focus on your business.',
  },
  {
    icon: '🚀',
    title: 'Landing Pages',
    desc: 'High-converting pages designed to capture leads for ads, promotions, or specific services.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">What We Do</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-black">Everything your business<br />needs online</h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          We handle design, development, hosting, and support — all at one simple price.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-white/8 transition-all"
          >
            <div className="text-3xl mb-4">{s.icon}</div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
