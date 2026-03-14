'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="25" r="4" fill="#7DD8DC"/>
            <path d="M13 24C13 24 11 10 18 5C22 2.5 26 4 27.5 8C29 12 27 18 22 21C18 23.5 13 24 13 24Z" fill="#7DD8DC"/>
          </svg>
          <span className="font-bold text-white text-lg">Atlas <span className="text-blue-400">Web Agency</span></span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-300 hover:text-white text-sm transition-colors">Services</a>
          <a href="#pricing" className="text-slate-300 hover:text-white text-sm transition-colors">Pricing</a>
          <a href="#demos" className="text-slate-300 hover:text-white text-sm transition-colors">Demos</a>
          <a href="#contact" className="text-slate-300 hover:text-white text-sm transition-colors">Contact</a>
          <a
            href="https://wa.me/17864353507?text=Hi%20Atlas%20Web%20Agency%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1628] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="#services" onClick={() => setOpen(false)} className="text-slate-300 text-sm">Services</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="text-slate-300 text-sm">Pricing</a>
          <a href="#demos" onClick={() => setOpen(false)} className="text-slate-300 text-sm">Demos</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-slate-300 text-sm">Contact</a>
          <a
            href="https://wa.me/17864353507?text=Hi%20Atlas%20Web%20Agency%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-xl text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
