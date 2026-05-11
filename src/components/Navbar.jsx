import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Maestro',   href: '#about' },
  { label: 'Courses',   href: '#courses' },
  { label: 'Results',   href: '#results' },
  { label: 'Gallery',   href: '#gallery' },
  { label: 'Resources', href: '#resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [hovered, setHovered]     = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── FLOATING PILL ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="w-full"
          style={{ maxWidth: '780px' }}
        >
          <div
            className="flex items-center justify-between rounded-full px-3 py-2.5 transition-all duration-300"
            style={{
              background: scrolled
                ? 'rgba(255,255,255,0.88)'
                : 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: scrolled
                ? '1px solid rgba(0,0,0,0.10)'
                : '1px solid rgba(255,255,255,0.60)',
              boxShadow: scrolled
                ? '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)'
                : '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => go(e, '#home')}
              className="flex items-center shrink-0 group"
            >
              <img
                src="/logo.png"
                alt="Maestro ICT"
                className="h-8 w-auto object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback */}
              <span className="hidden items-center gap-2" style={{ display: 'none' }}>
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">M</span>
                <span className="font-display font-bold text-slate-900 text-sm">Maestro</span>
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors rounded-full"
                >
                  {/* Hover pill bg */}
                  {hovered === link.label && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-slate-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href="#schedule"
                onClick={(e) => go(e, '#schedule')}
                className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-md shadow-blue-200"
              >
                Join Classes
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── MOBILE DROPDOWN ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,0,0,0.09)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.14)',
            }}
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#schedule"
                onClick={(e) => go(e, '#schedule')}
                className="mt-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center font-semibold text-sm shadow-md shadow-blue-200"
              >
                Join Classes
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
