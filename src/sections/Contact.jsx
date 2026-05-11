import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, Youtube, Instagram, Facebook } from 'lucide-react'

const socials = [
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://youtube.com/@maestroict',
    color: 'text-red-600',
    bg: 'bg-red-50 border-red-200 hover:bg-red-100',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com/maestroict',
    color: 'text-blue-700',
    bg: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/maestroict',
    color: 'text-pink-600',
    bg: 'bg-pink-50 border-pink-200 hover:bg-pink-100',
  },
]

const contactDetails = [
  { icon: MapPin, label: 'Head Office', value: 'No: 52 Old Matale Road, Kandy\nCentrix Eduspace', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
  { icon: Phone, label: 'Phone / WhatsApp', value: '078 858 4316', href: 'tel:+94788584316', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
  { icon: Mail, label: 'Email', value: 'riyas2ict@gmail.com', href: 'mailto:riyas2ict@gmail.com', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Sun: 8:00 AM – 5:00 PM', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
]

const courses = ['A/L ICT', 'O/L ICT', 'Other / Custom']

export default function Contact() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-slate-900">
            Join <span className="gradient-text">#TeamMaestro</span> Today
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Ready to master ICT? Reach out directly or fill the form — we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact details card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-5">Contact & Location</h3>
              <div className="flex flex-col gap-3">
                {contactDetails.map((info, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border ${info.bg} ${info.href ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
                    onClick={() => info.href && window.open(info.href)}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-white border border-slate-200`}>
                      <info.icon size={16} className={info.color} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{info.label}</div>
                      <div className="text-sm text-slate-800 font-medium whitespace-pre-line leading-snug">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold text-slate-900 text-sm mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border font-semibold text-sm transition-colors ${s.bg} ${s.color}`}
                  >
                    <s.icon size={16} />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/94788584316"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-green-200"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp — 078 858 4316
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mb-4">
                    <Send size={28} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 max-w-xs">
                    Thanks! We'll get back to you within 24 hours. You can also WhatsApp us for a faster response.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-6">Enrollment Inquiry</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-500 mb-1.5 block font-medium">Full Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-sm" />
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 mb-1.5 block font-medium">Email *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-sm" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-500 mb-1.5 block font-medium">Phone / WhatsApp</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="07X XXX XXXX"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-sm" />
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 mb-1.5 block font-medium">Interested Course *</label>
                        <select name="course" value={form.course} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-sm">
                          <option value="">Select a course</option>
                          {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1.5 block font-medium">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        placeholder="Tell us your current level, preferred centre, and any questions..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all text-sm resize-none" />
                    </div>
                    <button type="submit"
                      className="group flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.01] shadow-md shadow-blue-200">
                      <Send size={16} />
                      Send Inquiry
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
