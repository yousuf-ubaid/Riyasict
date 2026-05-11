import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Monitor, Clock, ChevronDown } from 'lucide-react'

const centres = [
  {
    id: 'kandy',
    name: 'Centrix Kandy',
    icon: MapPin,
    type: 'physical',
    color: 'blue',
    address: 'Centrix Eduspace, No: 52 Old Matale Road, Kandy',
    batches: [
      { level: 'Grade 10', day: 'Saturday', time: '4:00 PM – 5:30 PM', tag: 'O/L' },
      { level: 'Grade 11', day: 'Saturday', time: '8:00 AM – 10:00 AM', tag: 'O/L' },
      { level: 'AL 2028', day: 'Saturday', time: '10:30 AM – 12:30 PM', tag: 'A/L' },
      { level: 'AL 2027 – Batch I', day: 'Saturday', time: '2:00 PM – 4:00 PM', tag: 'A/L' },
      { level: 'AL 2027 – Batch II', day: 'Thursday', time: '3:00 PM – 5:00 PM', tag: 'A/L' },
      { level: 'AL 2026 Revision', day: 'Thursday', time: '8:00 AM – 3:00 PM', tag: 'A/L' },
      { level: 'AL 2026 Theory', day: 'Friday', time: '8:00 AM – 3:00 PM', tag: 'A/L' },
    ],
  },
  {
    id: 'grandpass',
    name: 'Eduzone Grandpass',
    icon: MapPin,
    type: 'physical',
    color: 'purple',
    address: 'Eduzone, Grandpass, Colombo',
    batches: [
      { level: 'AL 2028', day: 'Sunday', time: '10:30 AM – 12:30 PM', tag: 'A/L' },
      { level: 'AL 2027', day: 'Sunday', time: '8:00 AM – 10:00 AM', tag: 'A/L' },
      { level: 'AL 2026 Revision', day: 'Sunday', time: '10:00 AM – 3:00 PM', tag: 'A/L' },
      { level: 'AL 2026 Theory', day: 'Sunday', time: '3:00 PM – 5:00 PM', tag: 'A/L' },
    ],
  },
  {
    id: 'dehiwala',
    name: 'Team Comrade Dehiwala',
    icon: MapPin,
    type: 'physical',
    color: 'green',
    address: 'Team Comrade, Dehiwala',
    batches: [
      { level: 'AL 2028', day: 'Monday', time: '3:00 PM – 5:00 PM', tag: 'A/L' },
      { level: 'AL 2027', day: 'Monday', time: '5:00 PM – 7:00 PM', tag: 'A/L' },
      { level: 'AL 2026 Revision', day: 'Monday', time: '8:00 PM – 11:00 PM', tag: 'A/L' },
      { level: 'AL 2026 Theory', day: 'Monday', time: '11:00 PM – 3:00 AM', tag: 'A/L' },
    ],
  },
  {
    id: 'online',
    name: 'Via Zoom',
    icon: Monitor,
    type: 'online',
    color: 'cyan',
    address: 'Lankawata Online · Zoom Platform',
    batches: [
      { level: 'AL 2028', day: 'Friday', time: '8:30 PM – 10:30 PM', tag: 'A/L' },
      { level: 'AL 2027', day: 'Wednesday', time: '5:00 PM – 7:00 PM', tag: 'A/L' },
      { level: 'AL 2026 Revision', day: 'Wednesday', time: '2:30 PM – 5:00 PM', tag: 'A/L' },
      { level: 'AL 2026 Theory', day: 'Wednesday', time: '8:30 PM – 10:30 PM', tag: 'A/L' },
    ],
  },
]

const colorMap = {
  blue: {
    btn: 'bg-blue-600 text-white border-blue-600',
    btnOff: 'bg-white text-slate-700 border-slate-200 hover:border-blue-300',
    tag: 'bg-blue-50 text-blue-700 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    icon: 'text-blue-600',
    headerBg: 'bg-blue-50 border-blue-100',
    levelTag: { 'A/L': 'bg-purple-100 text-purple-700', 'O/L': 'bg-blue-100 text-blue-700' },
  },
  purple: {
    btn: 'bg-purple-600 text-white border-purple-600',
    btnOff: 'bg-white text-slate-700 border-slate-200 hover:border-purple-300',
    tag: 'bg-purple-50 text-purple-700 border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
    icon: 'text-purple-600',
    headerBg: 'bg-purple-50 border-purple-100',
    levelTag: { 'A/L': 'bg-purple-100 text-purple-700', 'O/L': 'bg-blue-100 text-blue-700' },
  },
  green: {
    btn: 'bg-green-600 text-white border-green-600',
    btnOff: 'bg-white text-slate-700 border-slate-200 hover:border-green-300',
    tag: 'bg-green-50 text-green-700 border-green-200',
    badge: 'bg-green-100 text-green-700',
    icon: 'text-green-600',
    headerBg: 'bg-green-50 border-green-100',
    levelTag: { 'A/L': 'bg-purple-100 text-purple-700', 'O/L': 'bg-blue-100 text-blue-700' },
  },
  cyan: {
    btn: 'bg-cyan-600 text-white border-cyan-600',
    btnOff: 'bg-white text-slate-700 border-slate-200 hover:border-cyan-300',
    tag: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    badge: 'bg-cyan-100 text-cyan-700',
    icon: 'text-cyan-600',
    headerBg: 'bg-cyan-50 border-cyan-100',
    levelTag: { 'A/L': 'bg-purple-100 text-purple-700', 'O/L': 'bg-blue-100 text-blue-700' },
  },
}

export default function Schedule() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const [activeId, setActiveId] = useState('kandy')

  const active = centres.find((c) => c.id === activeId)
  const cm = colorMap[active.color]

  return (
    <section id="schedule" className="py-24 md:py-32 relative bg-white">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Class Timetable</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            Find Your <span className="gradient-text">Centre</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Select your nearest centre to see batch details, timings, and available classes.
          </p>
        </motion.div>

        {/* Centre selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {centres.map((c) => {
            const isActive = c.id === activeId
            const cm2 = colorMap[c.color]
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl border font-semibold text-sm transition-all ${
                  isActive ? cm2.btn : cm2.btnOff
                } shadow-sm`}
              >
                <c.icon size={15} />
                {c.name}
              </button>
            )
          })}
        </div>

        {/* Batches panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden"
          >
            {/* Panel header */}
            <div className={`px-6 py-5 border-b flex items-start justify-between ${cm.headerBg}`}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <active.icon size={18} className={cm.icon} />
                  <h3 className="font-display font-bold text-slate-900 text-lg">{active.name}</h3>
                  {active.type === 'online' && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 border border-cyan-200">Online</span>
                  )}
                </div>
                <p className="text-sm text-slate-500">{active.address}</p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${cm.badge}`}>
                {active.batches.length} Batches
              </span>
            </div>

            {/* Batch list */}
            <div className="divide-y divide-slate-100">
              {active.batches.map((batch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${cm.levelTag[batch.tag] || 'bg-slate-100 text-slate-600'}`}>
                      {batch.tag}
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{batch.level}</div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                        <Clock size={11} />
                        {batch.day} · {batch.time}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open('https://wa.me/94788584316', '_blank')}
                    className="text-xs px-3 py-1.5 rounded-xl bg-green-50 border border-green-200 text-green-700 font-semibold hover:bg-green-100 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    Enroll →
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Panel footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-500">Contact us to confirm seat availability.</p>
              <a
                href="https://wa.me/94788584316"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-white text-xs font-semibold hover:bg-green-600 transition-colors shadow-sm"
              >
                📱 WhatsApp to Enroll
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
