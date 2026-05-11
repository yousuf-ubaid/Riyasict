import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Lightbulb, Target, Heart } from 'lucide-react'

const qualities = [
  {
    icon: GraduationCap,
    title: 'Qualified & Experienced',
    desc: 'Degree in ICT with 5+ years of dedicated tutoring across school and exam levels.',
  },
  {
    icon: Lightbulb,
    title: 'Clear & Engaging Style',
    desc: 'Complex topics broken into simple, memorable concepts — no student left behind.',
  },
  {
    icon: Target,
    title: 'Exam-Focused',
    desc: 'Targeted preparation for O/L and A/L exams with past papers and strategic revision.',
  },
  {
    icon: Heart,
    title: 'Student-First Approach',
    desc: "Personalized attention and flexible pacing to match every student's learning speed.",
  },
]

export default function About() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const leftRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true })
  const rightRef = useRef(null)
  const rightInView = useInView(rightRef, { once: true })

  return (
    <section id="about" className="py-24 md:py-32 relative bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">About Maestro</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            Meet <span className="gradient-text">Riyas Rushard</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Passionate about making ICT accessible, exciting, and exam-ready for every student.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile image side */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -30 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-blue-200 animate-pulse-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-cyan-200" />
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                  <img
                    src="/tutor.png"
                    alt="Riyas Rushard"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-4xl font-bold font-display text-white mb-3 shadow-lg glow">
                      R
                    </div>
                    <span className="text-slate-800 font-display font-semibold text-xl">Riyas Rushard</span>
                    <span className="text-blue-600 text-sm mt-1">Maestro in ICT</span>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 border border-blue-100 shadow-lg"
                >
                  <div className="text-2xl font-bold font-display gradient-text">5+</div>
                  <div className="text-xs text-slate-500">Years Teaching</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-3 border border-cyan-100 shadow-lg"
                >
                  <div className="text-2xl font-bold font-display text-cyan-600">1000+</div>
                  <div className="text-xs text-slate-500">Students</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 30 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-5">
              Turning ICT Confusion into Exam Confidence
            </h3>
            <p className="text-slate-600 leading-relaxed mb-5">
              Hi! I'm <span className="text-slate-900 font-semibold">Riyas Rushard</span>, known as{' '}
              <span className="gradient-text font-semibold">Maestro</span> — a dedicated ICT tutor
              with a passion for helping students truly understand the world of Information and
              Communication Technology.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              With a strong academic background and hands-on experience, I bridge the gap between
              textbook theory and real-world application. Whether you're starting out or preparing for
              O/L and A/L exams, my lessons are structured, practical, and always student-focused.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {qualities.map((q, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <q.icon size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-1">{q.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{q.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
