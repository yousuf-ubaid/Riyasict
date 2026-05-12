import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy } from 'lucide-react'

// Row 1 — A/L focused, 2024–2023
const resultsRow1 = [
  { name: 'Aisha Fathima',       exam: 'A/L ICT', grade: 'A', year: '2024', centre: 'Kandy' },
  { name: 'Mohamed Rameez',      exam: 'A/L ICT', grade: 'A', year: '2024', centre: 'Dehiwala' },
  { name: 'Dilshan Wijesinghe',  exam: 'A/L ICT', grade: 'A', year: '2024', centre: 'Online' },
  { name: 'Ishan Kumara',        exam: 'A/L ICT', grade: 'B', year: '2024', centre: 'Kandy' },
  { name: 'Kasun Perera',        exam: 'A/L ICT', grade: 'A', year: '2024', centre: 'Dehiwala' },
  { name: 'Rifhan Ahamed',       exam: 'A/L ICT', grade: 'A', year: '2023', centre: 'Kandy' },
  { name: 'Tharuka Silva',       exam: 'A/L ICT', grade: 'B', year: '2023', centre: 'Grandpass' },
  { name: 'Lahiru Bandara',      exam: 'A/L ICT', grade: 'A', year: '2023', centre: 'Dehiwala' },
  { name: 'Akram Saleem',        exam: 'A/L ICT', grade: 'A', year: '2023', centre: 'Kandy' },
  { name: 'Binara Gunawardena',  exam: 'A/L ICT', grade: 'A', year: '2022', centre: 'Dehiwala' },
  { name: 'Dayan Rodrigo',       exam: 'A/L ICT', grade: 'B', year: '2022', centre: 'Online' },
  { name: 'Nimesh Jayantha',     exam: 'A/L ICT', grade: 'A', year: '2022', centre: 'Kandy' },
  { name: 'Sandun Madushan',     exam: 'A/L ICT', grade: 'A', year: '2022', centre: 'Dehiwala' },
  { name: 'Yasiru Pathirana',    exam: 'A/L ICT', grade: 'A', year: '2023', centre: 'Online' },
  { name: 'Harsha Gunasekara',   exam: 'A/L ICT', grade: 'A', year: '2024', centre: 'Kandy' },
]

// Row 2 — O/L focused, 2024–2022
const resultsRow2 = [
  { name: 'Priya Sathees',        exam: 'O/L ICT', grade: 'A', year: '2024', centre: 'Kandy' },
  { name: 'Fatima Nazeer',        exam: 'O/L ICT', grade: 'A', year: '2024', centre: 'Grandpass' },
  { name: 'Nusrath Hafeeza',      exam: 'O/L ICT', grade: 'A', year: '2024', centre: 'Kandy' },
  { name: 'Amaya Fernando',       exam: 'O/L ICT', grade: 'A', year: '2024', centre: 'Online' },
  { name: 'Senuri Dissanayake',   exam: 'O/L ICT', grade: 'A', year: '2023', centre: 'Kandy' },
  { name: 'Zainab Moosa',         exam: 'O/L ICT', grade: 'A', year: '2023', centre: 'Kandy' },
  { name: 'Hiruni Jayaweera',     exam: 'O/L ICT', grade: 'A', year: '2023', centre: 'Online' },
  { name: 'Chathuri Weerasinghe', exam: 'O/L ICT', grade: 'A', year: '2022', centre: 'Kandy' },
  { name: 'Shalini Rathnayake',   exam: 'O/L ICT', grade: 'A', year: '2022', centre: 'Grandpass' },
  { name: 'Fathima Zahara',       exam: 'O/L ICT', grade: 'A', year: '2022', centre: 'Kandy' },
  { name: 'Rukshana Jabir',       exam: 'O/L ICT', grade: 'A', year: '2022', centre: 'Grandpass' },
  { name: 'Nadeesha Kumari',      exam: 'O/L ICT', grade: 'A', year: '2023', centre: 'Dehiwala' },
  { name: 'Thilini Perera',       exam: 'O/L ICT', grade: 'B', year: '2024', centre: 'Grandpass' },
  { name: 'Isuri Madushani',      exam: 'O/L ICT', grade: 'A', year: '2022', centre: 'Online' },
  { name: 'Kavindya Senanayake',  exam: 'O/L ICT', grade: 'A', year: '2023', centre: 'Kandy' },
]

const gradeColors = {
  A: 'bg-green-100 text-green-700 border-green-300',
  B: 'bg-blue-100 text-blue-700 border-blue-300',
  C: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  S: 'bg-orange-100 text-orange-700 border-orange-300',
}

function ResultCard({ result }) {
  const color = gradeColors[result.grade] || gradeColors['S']
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm mx-2 min-w-max">
      <div className={`w-9 h-9 rounded-xl border-2 flex items-center justify-center font-display font-bold text-lg ${color}`}>
        {result.grade}
      </div>
      <div>
        <div className="font-semibold text-slate-900 text-sm whitespace-nowrap">{result.name}</div>
        <div className="text-xs text-slate-500">{result.exam} · {result.year} · {result.centre}</div>
      </div>
    </div>
  )
}

export default function Results() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const doubledRow1 = [...resultsRow1, ...resultsRow1]
  const doubledRow2 = [...resultsRow2, ...resultsRow2]

  return (
    <section id="results" className="py-24 md:py-32 relative bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Student Achievements</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            Our <span className="gradient-text">Results</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Hundreds of students have achieved top grades under Maestro's guidance. Here are their stories.
          </p>

          {/* Summary stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: Trophy, value: '500+', label: "'A' Results", color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
              { icon: Trophy, value: '95%', label: 'Pass Rate', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
              { icon: Trophy, value: '1000+', label: 'Total Students', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
            ].map((s, i) => (
              <div key={i} className={`flex items-center gap-3 px-5 py-3 rounded-2xl border ${s.bg}`}>
                <s.icon size={18} className={s.color} />
                <div>
                  <span className={`font-bold font-display text-xl ${s.color}`}>{s.value}</span>
                  <span className="text-slate-600 text-sm ml-2">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scrolling marquee — Row 1 */}
      <div className="relative mb-4">
        {/* Left/right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {doubledRow1.map((r, i) => (
            <ResultCard key={i} result={r} />
          ))}
        </motion.div>
      </div>

      {/* Scrolling marquee — Row 2 (reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        >
          {doubledRow2.map((r, i) => (
            <ResultCard key={`b-${i}`} result={r} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
