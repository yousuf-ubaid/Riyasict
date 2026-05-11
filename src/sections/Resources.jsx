import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Download, ExternalLink, BookMarked, Video, File } from 'lucide-react'

const resources = [
  {
    icon: FileText,
    category: 'Notes',
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200',
    headerBg: 'bg-blue-50 border-blue-100',
    items: [
      { title: 'Computer Hardware & Components', level: 'O/L', type: 'PDF' },
      { title: 'Networking Fundamentals', level: 'O/L', type: 'PDF' },
      { title: 'Database Concepts (SQL)', level: 'A/L', type: 'PDF' },
      { title: 'Systems Analysis & Design', level: 'A/L', type: 'PDF' },
    ],
  },
  {
    icon: BookMarked,
    category: 'Past Papers',
    color: 'text-purple-600',
    bg: 'bg-purple-50 border-purple-200',
    headerBg: 'bg-purple-50 border-purple-100',
    items: [
      { title: 'O/L ICT Past Papers 2019–2023', level: 'O/L', type: 'ZIP' },
      { title: 'A/L ICT Past Papers 2018–2023', level: 'A/L', type: 'ZIP' },
      { title: 'Model Papers — Paper 1', level: 'O/L', type: 'PDF' },
      { title: 'A/L Marking Schemes Bundle', level: 'A/L', type: 'PDF' },
    ],
  },
  {
    icon: Video,
    category: 'Video Guides',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 border-cyan-200',
    headerBg: 'bg-cyan-50 border-cyan-100',
    items: [
      { title: 'Python Programming — Beginner Series', level: 'A/L', type: 'Video' },
      { title: 'Excel Mastery for ICT Students', level: 'All', type: 'Video' },
      { title: 'HTML & CSS Crash Course', level: 'Beginner', type: 'Video' },
      { title: 'Binary & Number Systems Explained', level: 'O/L', type: 'Video' },
    ],
  },
  {
    icon: File,
    category: 'Practice Sheets',
    color: 'text-green-600',
    bg: 'bg-green-50 border-green-200',
    headerBg: 'bg-green-50 border-green-100',
    items: [
      { title: 'MCQ Practice — Hardware & Software', level: 'O/L', type: 'PDF' },
      { title: 'Structured Q&A — Networks', level: 'A/L', type: 'PDF' },
      { title: 'Programming Exercises Set 1', level: 'A/L', type: 'PDF' },
      { title: 'Quick Revision Cards — O/L', level: 'O/L', type: 'PDF' },
    ],
  },
]

const typeIcon = { PDF: Download, ZIP: Download, Video: ExternalLink }

function ResourceCard({ resource, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-200 hover:shadow-md transition-all shadow-sm"
    >
      {/* Header */}
      <div className={`p-5 border-b border-slate-100 flex items-center gap-3 ${resource.headerBg}`}>
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${resource.bg}`}>
          <resource.icon size={18} className={resource.color} />
        </div>
        <h3 className="font-display font-bold text-slate-900">{resource.category}</h3>
      </div>

      {/* Items */}
      <div className="p-3">
        {resource.items.map((item, i) => {
          const Icon = typeIcon[item.type] || Download
          return (
            <motion.div
              key={i}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors truncate">
                  {item.title}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-400">{item.level}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-400">{item.type}</span>
                </div>
              </div>
              <Icon
                size={15}
                className="text-slate-400 group-hover:text-blue-500 transition-colors shrink-0"
              />
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function Resources() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="resources" className="py-24 md:py-32 relative bg-slate-50">
      <div className="absolute left-0 top-1/3 w-[350px] h-[350px] bg-purple-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Learning Hub</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            Free <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Access notes, past papers, video guides and practice sheets — all curated by your tutor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((resource, i) => (
            <ResourceCard key={i} resource={resource} index={i} />
          ))}
        </div>

        {/* Enrollment note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-blue-50 border border-blue-200 rounded-2xl text-sm text-blue-700">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Full resource library unlocked for enrolled students
          </div>
        </motion.div>
      </div>
    </section>
  )
}
