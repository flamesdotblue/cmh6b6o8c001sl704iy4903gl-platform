import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative isolate pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1556228453-efd1e3f53281?q=80&w=2070&auto=format&fit=crop"
          alt="Tranquil Ayurvedic therapy setup"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
            Healing Journeys, Trusted Paths
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            Discover authentic Ayurveda, Yoga, and Medical Wellness Experiences across South India.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-emerald-400/50 transition hover:from-teal-700 hover:to-emerald-700"
            >
              Plan Your Journey
            </a>
            <a
              href="#packages"
              className="inline-flex items-center rounded-full border border-slate-300/70 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow"
            >
              Explore Packages
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-200/70 backdrop-blur"
          >
            <p className="text-sm text-slate-600">Curated by experts in Ayurveda, Yoga and Medical Tourism</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-200/70 backdrop-blur"
          >
            <p className="text-sm text-slate-600">Trusted network of retreats, resorts and hospitals across South India</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-200/70 backdrop-blur"
          >
            <p className="text-sm text-slate-600">Personalized itineraries with premium hospitality</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
