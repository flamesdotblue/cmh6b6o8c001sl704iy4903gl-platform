import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, Sparkles, Plane, Building2, Send, Calendar, User, MapPin } from 'lucide-react'

export default function ProcessAndContactSection() {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/40">
      {/* How It Works */}
      <div id="how" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-700">How It Works</span>
          <h3 className="mt-4 font-serif text-3xl text-slate-900 sm:text-4xl">A seamless path to wellbeing</h3>
          <p className="mt-3 text-slate-600">We simplify your planning with curated expertise and trusted partners.</p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <StepCard
            icon={<ClipboardList className="h-6 w-6 text-teal-700" />}
            title="Fill in your preferences"
            text="Share your goals, budget, and travel dates — we listen closely to what you need."
          />
          <StepCard
            icon={<Sparkles className="h-6 w-6 text-teal-700" />}
            title="Get curated packages"
            text="Receive personalized recommendations from authentic retreats and hospitals."
          />
          <StepCard
            icon={<Plane className="h-6 w-6 text-teal-700" />}
            title="Book & begin your journey"
            text="We coordinate the details so you can arrive feeling confident and cared for."
          />
        </div>
      </div>

      {/* Partner With Us */}
      <div id="partners" className="mx-auto max-w-7xl px-6 pb-6">
        <div className="grid items-center gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:grid-cols-2">
          <div>
            <h4 className="font-serif text-2xl text-slate-900">Partner with HealRoutes</h4>
            <p className="mt-3 text-slate-600">
              Are you a wellness resort, Ayurveda clinic, yoga retreat, or hospital? Join our trusted network
              to reach a global audience seeking authentic, outcome-driven care.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Building2 className="h-4 w-4 text-emerald-700" /> Premium positioning and global reach</li>
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-emerald-700" /> Curated guests aligned with your strengths</li>
              <li className="flex items-center gap-2"><Send className="h-4 w-4 text-emerald-700" /> Dedicated support and seamless onboarding</li>
            </ul>
          </div>
          <div className="flex items-center justify-end">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-emerald-400/50 transition hover:from-teal-700 hover:to-emerald-700"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>

      {/* Contact / Booking Form */}
      <div id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h4 className="font-serif text-3xl text-slate-900">Plan your healing journey</h4>
            <p className="mt-3 text-slate-600">Tell us a little about yourself and your goals. Our wellness concierge will reach out with curated options within 24–48 hours.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2"><MapPin className="h-4 w-4 text-emerald-700" /> Kerala, Goa, Tamil Nadu, Karnataka</div>
              <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2"><Calendar className="h-4 w-4 text-emerald-700" /> Flexible dates</div>
              <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2"><User className="h-4 w-4 text-emerald-700" /> Solo, Couple, Family</div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input type="text" placeholder="Your full name" className="w-full rounded-lg border border-slate-300/80 bg-white px-3 py-2 text-slate-800 shadow-sm outline-none ring-emerald-500/30 focus:ring" required />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-lg border border-slate-300/80 bg-white px-3 py-2 text-slate-800 shadow-sm outline-none ring-emerald-500/30 focus:ring" required />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Country</label>
                <input type="text" placeholder="Where you're based" className="w-full rounded-lg border border-slate-300/80 bg-white px-3 py-2 text-slate-800 shadow-sm outline-none ring-emerald-500/30 focus:ring" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Wellness Interest</label>
                <select className="w-full appearance-none rounded-lg border border-slate-300/80 bg-white px-3 py-2 text-slate-800 shadow-sm outline-none ring-emerald-500/30 focus:ring">
                  <option>Ayurveda Rejuvenation</option>
                  <option>Yoga & Mindfulness</option>
                  <option>Detox & Weight Management</option>
                  <option>Stress Relief Retreat</option>
                  <option>Physiotherapy Wellness Program</option>
                  <option>Holistic Healing Journey</option>
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Travel Dates</label>
                <input type="text" placeholder="e.g., 12–20 Jan, flexible" className="w-full rounded-lg border border-slate-300/80 bg-white px-3 py-2 text-slate-800 shadow-sm outline-none ring-emerald-500/30 focus:ring" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <input type="text" placeholder="Goals, preferences, medical notes (optional)" className="w-full rounded-lg border border-slate-300/80 bg-white px-3 py-2 text-slate-800 shadow-sm outline-none ring-emerald-500/30 focus:ring" />
              </div>
            </div>

            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-emerald-400/50 transition hover:from-teal-700 hover:to-emerald-700">
              Submit Enquiry
            </button>
            <p className="text-center text-xs text-slate-500">We respect your privacy. A concierge will respond within 24–48 hours.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function StepCard({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-emerald-100">{icon}</div>
      <h5 className="mt-4 font-serif text-xl text-slate-900">{title}</h5>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </motion.div>
  )
}
