export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-6 text-white text-center">
      <div>
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-black mb-4">Message received!</h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto mb-8">
          Thank you for reaching out to Atlas Web Agency. We'll get back to you within 24 hours.
        </p>
        <a href="/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-colors">
          Back to Home
        </a>
        <div className="mt-6">
          <a
            href="https://wa.me/17864353507"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline text-sm"
          >
            Or chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  )
}
