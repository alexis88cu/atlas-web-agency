const plans = [
  {
    name: 'Starter',
    setup: '$250',
    monthly: '$14.99',
    monthlyLabel: '/month',
    sub: 'hosting + maintenance',
    featured: false,
    planId: 'P-85149475EN1109236NGZW5HA',
    waText: 'Hi!%20I%27m%20interested%20in%20the%20Starter%20website%20plan.',
    features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'SSL included', 'Hosting included', 'Domain connection', 'WhatsApp button'],
  },
  {
    name: 'Professional',
    setup: '$250',
    monthly: '$49',
    monthlyLabel: '/month',
    sub: 'hosting + support + edits',
    featured: true,
    planId: 'P-6RH28214L2255692ANGZW6WA',
    waText: 'Hi!%20I%27m%20interested%20in%20the%20Professional%20website%20plan.',
    features: ['Up to 10 pages', 'Mobile responsive', 'SEO optimization', 'Monthly content edits', 'Google Business setup', 'Priority support', 'WhatsApp + Chat button', 'Blog setup'],
  },
  {
    name: 'Premium',
    setup: '$500',
    monthly: '$99',
    monthlyLabel: '/month',
    sub: 'hosting + full support + SEO',
    featured: false,
    planId: 'P-4TV76316AR549911NNGZW7MQ',
    waText: 'Hi!%20I%27m%20interested%20in%20the%20Premium%20website%20plan.',
    features: ['Unlimited pages', 'Advanced SEO monthly', 'Booking system', 'E-commerce ready', 'Lead capture forms', 'Analytics dashboard', 'Custom integrations', 'Dedicated support'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">Simple. Transparent. Flat rate.</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            One price for everything. No hidden fees. No surprises. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 relative flex flex-col ${
                plan.featured
                  ? 'bg-blue-600 border border-blue-500 shadow-2xl shadow-blue-500/20 scale-105'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className={`text-xs uppercase tracking-widest mb-3 ${plan.featured ? 'text-blue-100' : 'text-blue-300'}`}>
                {plan.name}
              </div>
              <div className="text-5xl font-black mb-1">{plan.setup}</div>
              <div className={`text-sm mb-1 ${plan.featured ? 'text-blue-200' : 'text-slate-400'}`}>one-time setup</div>
              <div className={`text-2xl font-bold mt-3 mb-1 ${plan.featured ? 'text-white' : 'text-blue-400'}`}>
                {plan.monthly}<span className={`text-base font-normal ${plan.featured ? 'text-blue-200' : 'text-slate-400'}`}>{plan.monthlyLabel}</span>
              </div>
              <div className={`text-xs mb-6 ${plan.featured ? 'text-blue-200' : 'text-slate-500'}`}>{plan.sub}</div>

              <ul className={`space-y-3 text-sm mb-8 flex-1 ${plan.featured ? 'text-white' : 'text-slate-300'}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={plan.featured ? 'text-yellow-300' : 'text-blue-400'}>✓</span> {f}
                  </li>
                ))}
              </ul>

              {/* PayPal button */}
              <a
                href={`https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=${plan.planId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl transition-all mb-3 ${
                  plan.featured
                    ? 'bg-white text-blue-700 hover:bg-blue-50'
                    : 'bg-[#FFC439] hover:bg-yellow-300 text-[#003087]'
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.059-8.993 6.059H9.39l-1.167 7.39h3.633c.458 0 .85-.333.922-.784l.038-.196.731-4.63.047-.254c.072-.452.464-.784.922-.784h.58c3.76 0 6.7-1.528 7.559-5.945.359-1.84.173-3.376-.433-4.569z"/>
                </svg>
                Pay with PayPal
              </a>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/17864353507?text=${plan.waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-xl transition-all text-sm ${
                  plan.featured
                    ? 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Contact on WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm">
            All plans include: hosting, domain connection, SSL, and customer support.
            <strong className="text-white"> No hidden fees. Cancel anytime.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
