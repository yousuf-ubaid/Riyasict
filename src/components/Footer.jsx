import { MessageCircle, Mail, Phone, MapPin, Youtube, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const socials = [
    { href: 'https://www.youtube.com/@riyasict',        icon: Youtube,       bg: 'bg-red-600/20 border-red-600/30',   text: 'text-red-400'  },
    { href: 'https://www.facebook.com/ict.riyas/',       icon: Facebook,      bg: 'bg-blue-600/20 border-blue-600/30', text: 'text-blue-400' },
    { href: 'https://www.instagram.com/riyasrushard',    icon: Instagram,     bg: 'bg-pink-600/20 border-pink-600/30', text: 'text-pink-400' },
    { href: 'https://wa.me/94788584316',                 icon: MessageCircle, bg: 'bg-green-600/20 border-green-600/30', text: 'text-green-400' },
  ]

  const links = [
    { label: 'About Maestro', href: '#about' },
    { label: 'Courses',       href: '#courses' },
    { label: 'Results',       href: '#results' },
    { label: 'Gallery',       href: '#gallery' },
    { label: 'Resources',     href: '#resources' },
    { label: 'Schedule',      href: '#schedule' },
  ]

  const centres = [
    { name: 'Centrix Kandy',        url: 'https://share.google/sBohvW4g5QMoIjPrf' },
    { name: 'Eduzone Grandpass',    url: 'https://share.google/XLH9NNbVgGH6Gouz3' },
    { name: 'Team Comrade Dehiwala',url: 'https://share.google/9hYTcxFWxRlKQReZy' },
    { name: 'Via Zoom',             url: 'https://lms.riyasict.com' },
  ]

  return (
    <footer className="relative border-t border-slate-200 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ── DESKTOP layout (md+) ── */}
        <div className="hidden md:grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo_white.jpeg`} alt="Team Maestro" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              No.1 Sri Lanka's English Medium ICT Class. Building confident, skilled learners across O/L and A/L.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors ${s.bg} ${s.text}`}>
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <button onClick={() => handleNav(l.href)} className="text-slate-400 hover:text-white text-sm transition-colors">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>
          {/* Courses & Centres */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Courses</h4>
            <ul className="flex flex-col gap-2.5 mb-6">
              {['A/L ICT', 'O/L ICT'].map((c) => (
                <li key={c}><button onClick={() => handleNav('#courses')} className="text-slate-400 hover:text-white text-sm transition-colors text-left">{c}</button></li>
              ))}
            </ul>
            <h4 className="font-semibold text-white text-sm mb-4">Centres</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {centres.map((c) => (
                <li key={c.name}><a href={c.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">{c.name}</a></li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2"><MapPin size={14} className="text-slate-500 mt-0.5 shrink-0" /><span>No: 52 Old Matale Road, Kandy<br />Centrix Eduspace</span></div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-slate-500 shrink-0" />078 858 4316</div>
              <div className="flex items-center gap-2"><Mail size={14} className="text-slate-500 shrink-0" />riyas2ict@gmail.com</div>
            </div>
            <a href="https://wa.me/94788584316" target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 text-white text-xs font-semibold hover:bg-green-700 transition-colors shadow-sm">
              <MessageCircle size={13} />WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── MOBILE layout ── */}
        <div className="md:hidden flex flex-col items-center text-center gap-8 mb-10">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}logo_white.jpeg`} alt="Team Maestro" className="h-14 w-auto object-contain" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              No.1 Sri Lanka's English Medium ICT Class.
            </p>
          </div>

          {/* Social icons row */}
          <div className="flex justify-center gap-4">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-colors ${s.bg} ${s.text}`}>
                <s.icon size={18} />
              </a>
            ))}
          </div>

          {/* WhatsApp button */}
          <a href="https://wa.me/94788584316" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors shadow-md w-full justify-center">
            <MessageCircle size={16} />
            Chat on WhatsApp — 078 858 4316
          </a>

          {/* Quick links — 2 column pill grid */}
          <div className="w-full">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <button key={l.label} onClick={() => handleNav(l.href)}
                  className="py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 hover:text-white transition-colors">
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Centres */}
          <div className="w-full">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Our Centres</p>
            <div className="grid grid-cols-2 gap-2">
              {centres.map((c) => (
                <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 hover:text-white transition-colors text-center">
                  {c.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center gap-2 text-sm text-slate-400">
            <div className="flex items-center gap-2"><MapPin size={13} className="text-slate-500" />No: 52 Old Matale Road, Kandy</div>
            <div className="flex items-center gap-2"><Phone size={13} className="text-slate-500" />078 858 4316</div>
            <div className="flex items-center gap-2"><Mail size={13} className="text-slate-500" />riyas2ict@gmail.com</div>
          </div>
        </div>

        {/* Bottom bar — both layouts */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10">
          <p className="text-slate-500 text-xs text-center">© 2026 Team Maestro Pvt Ltd. All rights reserved.</p>
          <button onClick={scrollTop} className="text-slate-500 hover:text-white text-xs transition-colors">↑ Back to top</button>
        </div>
      </div>
    </footer>
  )
}

