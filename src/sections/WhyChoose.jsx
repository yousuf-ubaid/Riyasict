import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Zap, Target, BookOpen, Users, MessageCircle, BarChart3, Clock, Trophy
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Crystal-Clear Explanations',
    desc: 'Complex ICT concepts simplified into everyday language. No confusion, just clarity.',
    color: 'text-amber-600',
    bg: 'bg-amber-50 border-amber-200',
  },
  {
    icon: Target,
    title: 'Exam-Smart Strategies',
    desc: 'Learn exactly what examiners look for. Targeted techniques to maximize marks.',
    color: 'text-red-600',
    bg: 'bg-red-50 border-red-200',
  },
  {
    icon: BookOpen,
    title: 'Rich Study Materials',
    desc: 'Curated notes, past papers, and guides — everything you need in one place.',
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200',
  },
  {
    icon: Users,
    title: 'Small Batch Classes',
    desc: 'Limited students per class ensures every student gets personal attention.',
    color: 'text-green-600',
    bg: 'bg-green-50 border-green-200',
  },
  {
    icon: MessageCircle,
    title: 'Always Reachable',
    desc: 'Quick support via WhatsApp for doubts anytime — before or after class.',
    color: 'text-purple-600',
    bg: 'bg-purple-50 border-purple-200',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    desc: 'Regular assessments to monitor growth and identify areas to improve.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 border-cyan-200',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    desc: 'Weekday and weekend batches to fit around school and family commitments.',
    color: 'text-orange-600',
    bg: 'bg-orange-50 border-orange-200',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    desc: '95%+ pass rate with many students achieving distinctions and A grades.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50 border-yellow-200',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group shadow-sm"
    >
      <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${feature.bg} group-hover:scale-110 transition-transform`}>
        <feature.icon size={20} className={feature.color} />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1.5 text-sm">{feature.title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChoose() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-cyan-100/60 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Why Students Choose Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            The <span className="gradient-text">Smart Choice</span> for ICT
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            More than tutoring — a complete learning experience built around your success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
