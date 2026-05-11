import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Aisha F.',
    role: 'O/L Student',
    grade: 'Got an A in ICT',
    text: "Before joining, I was really struggling with networking and databases. The explanations here are so clear — I actually started enjoying ICT! My O/L result was beyond what I expected.",
    stars: 5,
    avatar: 'A',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Mohamed R.',
    role: 'A/L Student',
    grade: 'Distinction in A/L ICT',
    text: "The A/L course is incredibly detailed. Programming and systems analysis made so much more sense after just a few sessions. My teacher at school was shocked by my improvement!",
    stars: 5,
    avatar: 'M',
    color: 'from-purple-500 to-blue-400',
  },
  {
    name: 'Priya S.',
    role: 'School Student (Gr. 10)',
    grade: 'Top of class in ICT',
    text: "I used to dread ICT class. Now I actually look forward to it! The way everything is explained step by step, with real examples, made a huge difference to my confidence.",
    stars: 5,
    avatar: 'P',
    color: 'from-green-500 to-cyan-400',
  },
  {
    name: 'Ishan K.',
    role: 'Parent',
    grade: "Son scored A grade",
    text: "My son went from failing ICT to scoring top marks in 3 months. The tutor's patience and dedication are remarkable. I can't recommend this highly enough to other parents.",
    stars: 5,
    avatar: 'I',
    color: 'from-orange-500 to-amber-400',
  },
  {
    name: 'Fatima N.',
    role: 'O/L Graduate',
    grade: 'Full marks in practical',
    text: "The practical skills training is excellent. I learned things that aren't even in the textbook — real skills that actually help. The WhatsApp support for doubts is super helpful too.",
    stars: 5,
    avatar: 'F',
    color: 'from-pink-500 to-rose-400',
  },
  {
    name: 'Dilshan W.',
    role: 'A/L Student',
    grade: 'University entrance secured',
    text: "The structured approach to the A/L syllabus is what sets this apart. Every topic is covered in depth and linked to past paper questions. My university entrance marks were amazing.",
    stars: 5,
    avatar: 'D',
    color: 'from-cyan-500 to-blue-400',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Student Stories</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            Real Results, <span className="gradient-text">Real Students</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Don't take my word for it — hear directly from students and parents who've seen the results.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-amber-50 border border-amber-200 rounded-2xl">
            <StarRating count={5} />
            <span className="text-slate-900 font-bold">4.9 / 5</span>
            <span className="text-slate-500 text-sm">from 120+ reviews</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={`${page}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col bg-white rounded-3xl border border-slate-200 hover:border-blue-200 hover:shadow-lg p-6 transition-all shadow-sm"
            >
              <Quote size={24} className="text-blue-200 mb-4" />

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <div className="text-right shrink-0">
                  <StarRating count={t.stars} />
                  <div className="text-xs text-green-600 font-medium mt-0.5">{t.grade}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-blue-300 disabled:opacity-30 transition-colors shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === page ? 'bg-blue-500 w-6' : 'bg-slate-300 w-2'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-blue-300 disabled:opacity-30 transition-colors shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
