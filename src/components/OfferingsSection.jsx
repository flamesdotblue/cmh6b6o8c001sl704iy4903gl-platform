import React from 'react'
import { motion } from 'framer-motion'

const packages = [
  {
    title: 'Ayurveda Rejuvenation',
    price: 'From $899',
    img: 'https://images.unsplash.com/photo-1542866789-f9b9e9cbe50d?q=80&w=2070&auto=format&fit=crop',
    blurb: 'Traditional therapies, Abhyanga massage, and Rasayana diet to restore balance.'
  },
  {
    title: 'Yoga & Mindfulness',
    price: 'From $699',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop',
    blurb: 'Guided asana, pranayama, and meditation in serene coastal and forest settings.'
  },
  {
    title: 'Detox & Weight Management',
    price: 'From $1099',
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop',
    blurb: 'Holistic detox plans with Ayurveda, nutrition, and mindful movement.'
  },
  {
    title: 'Stress Relief Retreat',
    price: 'From $799',
    img: 'https://images.unsplash.com/photo-1541021040886-8d34dffe1e25?q=80&w=2069&auto=format&fit=crop',
    blurb: 'Restorative rituals, shirodhara, and nature immersion for deep relaxation.'
  },
  {
    title: 'Physiotherapy Wellness Program',
    price: 'From $949',
    img: 'https://images.unsplash.com/photo-1584467735871-6bd4f58f35d4?q=80&w=2070&auto=format&fit=crop',
    blurb: 'Evidence-based physiotherapy combined with restorative therapies.'
  },
  {
    title: 'Holistic Healing Journey',
    price: 'From $1299',
    img: 'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=2069&auto=format&fit=crop',
    blurb: 'A bespoke blend of Ayurveda, yoga, dietetics, and nature for full-spectrum wellbeing.'
  }
]

export default function OfferingsSection() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-start gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <span className="inline-block rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-700">About HealRoutes</span>
          <h2 className="mt-4 font-serif text-3xl text-slate-900 sm:text-4xl">Where ancient wisdom meets modern hospitality</h2>
          <p className="mt-4 text-slate-700">
            HealRoutes connects global travelers with South India’s most authentic wellness and medical centers. From Kerala’s backwaters to the Western Ghats, we curate trusted retreats that honor Ayurveda, Yoga, and evidence-based care.
          </p>
          <p className="mt-3 text-slate-700">
            Our expertise spans Ayurveda therapies, yoga and mindfulness, detox and weight management, physiotherapy-led recovery, and medical tourism coordination.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl lg:col-span-3"
        >
          <img
            src="https://images.unsplash.com/photo-1465406325227-efcf44f7f565?q=80&w=2069&auto=format&fit=crop"
            alt="Kerala backwaters and tropical greenery"
            className="h-full w-full rounded-2xl object-cover shadow-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-slate-900/10" />
        </motion.div>
      </div>

      {/* Top Packages */}
      <div id="packages" className="mt-16">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-serif text-2xl text-slate-900 sm:text-3xl">Top Packages</h3>
            <p className="mt-2 text-slate-600">Handpicked journeys crafted with care and authenticity.</p>
          </div>
          <div className="hidden text-amber-600 sm:block">Luxury meets trust</div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-lg text-slate-900">{p.title}</h4>
                  <span className="text-sm font-semibold text-emerald-700">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a href="#contact" className="text-sm font-medium text-teal-700 hover:text-teal-800">Enquire Now →</a>
                  <span className="text-xs text-amber-600">Limited availability</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
