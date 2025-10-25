import React from 'react'
import { LogIn } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 ring-2 ring-emerald-300/40" />
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight text-slate-900">HealRoutes</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-700/70">Wellness Travel</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <a href="#about" className="transition-colors hover:text-teal-700">About</a>
          <a href="#packages" className="transition-colors hover:text-teal-700">Packages</a>
          <a href="#how" className="transition-colors hover:text-teal-700">How It Works</a>
          <a href="#partners" className="transition-colors hover:text-teal-700">Partners</a>
          <a href="#contact" className="transition-colors hover:text-teal-700">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow"
          >
            <LogIn className="h-4 w-4" />
            Customer Login
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-md ring-1 ring-emerald-400/50 transition hover:from-teal-700 hover:to-emerald-700 md:inline-block"
          >
            Plan Your Journey
          </a>
        </div>
      </div>
    </header>
  )
}
