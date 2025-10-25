import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OfferingsSection from './components/OfferingsSection'
import ProcessAndContactSection from './components/ProcessAndContactSection'
import { MessageCircle } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <OfferingsSection />
        <ProcessAndContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white" id="footer">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">HealRoutes — Connecting the World to India’s Wellness Heritage.</p>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
              <a href="#about" className="hover:text-teal-700 transition-colors">About</a>
              <a href="#packages" className="hover:text-teal-700 transition-colors">Packages</a>
              <a href="#partners" className="hover:text-teal-700 transition-colors">Partners</a>
              <a href="#contact" className="hover:text-teal-700 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} HealRoutes. All rights reserved.</div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/0000000000?text=Hello%20HealRoutes%2C%20I%27d%20like%20to%20plan%20a%20wellness%20journey."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 group"
      >
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-400 transition-all hover:scale-105 hover:bg-emerald-600">
          <MessageCircle className="h-6 w-6" />
        </div>
      </a>
    </div>
  )
}
