import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What age / grade levels do you teach?',
    a: "I teach students from Grade 6 all the way through A/L (Advanced Level). Whether you're just starting ICT in school or preparing for university entrance, there's a course for you.",
  },
  {
    q: 'Are the online classes live or recorded?',
    a: 'All online classes are live and interactive via Zoom or Google Meet. Sessions are also recorded and shared with students so they can review them at any time.',
  },
  {
    q: 'How many students are in each class?',
    a: 'Classes are kept small — typically 6 to 10 students — to ensure every student receives personal attention and can ask questions freely.',
  },
  {
    q: 'What if I miss a class?',
    a: "No problem! Every session is recorded. You can also attend a makeup session in another batch or arrange a catch-up. We never want students falling behind.",
  },
  {
    q: 'Do you provide study materials?',
    a: 'Yes! All enrolled students receive comprehensive notes, past papers, and practice sheets. Free resources are also available in the Resources section for everyone.',
  },
  {
    q: 'How can I enroll?',
    a: "Simply fill out the contact form on this page or send a WhatsApp message. I'll confirm availability, discuss your goals, and get you started — usually within 24 hours.",
  },
  {
    q: 'Is there a trial class available?',
    a: 'Yes — I offer a free first trial session for new students so you can experience the teaching style before committing. Just mention this when you reach out.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Fees vary by course level and duration. Please contact me directly for the latest pricing. I also offer sibling discounts and flexible payment options.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-slate-100 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm md:text-base text-slate-700 group-hover:text-slate-900 transition-colors font-medium leading-snug">
          {faq.q}
        </span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${open ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-slate-600 text-sm leading-relaxed pb-5">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-white">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Everything you need to know before getting started. Can't find your answer? Just reach out.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl border border-slate-200 px-6 md:px-8 shadow-sm">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-slate-500 text-sm"
        >
          Still have questions?{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Ask directly →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
