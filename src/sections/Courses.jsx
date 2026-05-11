import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BookOpen, GraduationCap, CheckCircle } from 'lucide-react'

const courses = [
  {
    id: 'al',
    icon: GraduationCap,
    tag: 'Advanced Level',
    tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
    title: 'A/L ICT',
    subtitle: 'University Entrance Preparation',
    description:
      'Comprehensive Advanced Level ICT covering the full syllabus — programming, databases, networking, systems analysis, and more. Built for students aiming for top results and university entrance.',
    highlights: [
      'Full A/L Syllabus Coverage',
      'Programming (Python / Visual Basic)',
      'Database Design & SQL',
      'Systems Analysis & Design',
      'Networking & Data Communication',
      'Past Papers & Marking Schemes',
    ],
    batches: 'AL 2026 · AL 2027 · AL 2028',
    mode: 'Online & Physical',
    accentFrom: 'from-purple-600',
    accentTo: 'to-blue-600',
    cardBorder: 'border-purple-200 hover:border-purple-400',
    shadow: 'shadow-purple-100',
    iconBg: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
    badgeGradient: 'from-purple-600 to-blue-600',
  },
  {
    id: 'ol',
    icon: BookOpen,
    tag: 'Ordinary Level',
    tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
    title: 'O/L ICT',
    subtitle: 'Exam Excellence Programme',
    description:
      'Structured O/L ICT preparation with full syllabus coverage, focused exam strategies, and intensive past paper practice. Designed to help every student achieve an A grade.',
    highlights: [
      'Complete O/L Syllabus',
      'Hardware & Software',
      'Internet & Networking',
      'Microsoft Office Skills',
      'MCQ & Structured Q Strategies',
      'Past Papers (2015–2023)',
    ],
    batches: 'Grade 10 · Grade 11',
    mode: 'Online & Physical',
    accentFrom: 'from-blue-600',
    accentTo: 'to-cyan-500',
    cardBorder: 'border-blue-200 hover:border-blue-400',
    shadow: 'shadow-blue-100',
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-600',
    badgeGradient: 'from-blue-600 to-cyan-500',
  },
]

function CourseCard({ course, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col bg-white rounded-3xl border-2 ${course.cardBorder} transition-all duration-300 shadow-lg ${course.shadow} overflow-hidden`}
    >
      {/* Top gradient accent bar */}
      <div className={`h-1.5 bg-gradient-to-r ${course.accentFrom} ${course.accentTo}`} />

      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${course.iconBg}`}>
            <course.icon size={28} className={course.iconColor} />
          </div>
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${course.tagColor}`}>
            {course.tag}
          </span>
        </div>

        <h3 className="font-display text-3xl font-bold text-slate-900 mb-1">{course.title}</h3>
        <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${course.accentFrom} ${course.accentTo} bg-clip-text text-transparent`}>
          {course.subtitle}
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">{course.description}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2.5 mb-8 flex-1">
          {course.highlights.map((item, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
              <CheckCircle size={15} className={course.iconColor} />
              {item}
            </li>
          ))}
        </ul>

        {/* Meta row */}
        <div className="flex items-center justify-between mb-6 py-3 px-4 rounded-2xl bg-slate-50 border border-slate-100">
          <div>
            <div className="text-xs text-slate-500">Batches</div>
            <div className="text-sm font-semibold text-slate-800">{course.batches}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Mode</div>
            <div className="text-sm font-semibold text-slate-800">{course.mode}</div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })}
          className={`group/btn flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r ${course.accentFrom} ${course.accentTo} text-white font-semibold hover:opacity-90 transition-all hover:scale-[1.02] shadow-md`}
        >
          View Schedule & Enroll
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  )
}

export default function Courses() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="courses" className="py-24 md:py-32 relative bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Our Courses</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            Choose Your <span className="gradient-text">Path</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Two focused programmes designed for every stage — from O/L foundations to A/L mastery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
