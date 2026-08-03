import { MessageCircle, Mail, Phone, MapPin, Youtube, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-200 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo_white.jpeg`}
                alt="Team Maestro"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              No.1 Sri Lanka's English Medium ICT Class. Building confident, skilled learners across O/L and A/L.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@riyasict" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-400 hover:bg-red-600/30 transition-colors">
                <Youtube size={15} />
              </a>
              <a href="https://www.facebook.com/ict.riyas/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 transition-colors">
                <Facebook size={15} />
              </a>
              <a href="https://www.instagram.com/riyasrushard" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-600/20 border border-pink-600/30 flex items-center justify-center text-pink-400 hover:bg-pink-600/30 transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://wa.me/94788584316" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-green-600/20 border border-green-600/30 flex items-center justify-center text-green-400 hover:bg-green-600/30 transition-colors">
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'About Maestro', href: '#about' },
                { label: 'Courses', href: '#courses' },
                { label: 'Results', href: '#results' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Resources', href: '#resources' },
                { label: 'Schedule', href: '#schedule' },
              ].map((link) => (
                <li key={link.label}>
                  <button onClick={() => handleNav(link.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Courses</h4>
            <ul className="flex flex-col gap-2.5">
              {['A/L ICT', 'O/L ICT'].map((c) => (
                <li key={c}>
                  <button onClick={() => handleNav('#courses')}
                    className="text-slate-400 hover:text-white text-sm transition-colors text-left">
                    {c}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-white text-sm mt-6 mb-4">Centres</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { name: 'Centrix Kandy',          url: 'https://share.google/sBohvW4g5QMoIjPrf' },
                { name: 'Eduzone Grandpass',       url: 'https://share.google/XLH9NNbVgGH6Gouz3' },
                { name: 'Team Comrade Dehiwala',   url: 'https://share.google/9hYTcxFWxRlKQReZy' },
                { name: 'Via Zoom',                url: 'https://lms.riyasict.com' },
              ].map((c) => (
                <li key={c.name}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-slate-500 mt-0.5 shrink-0" />
                <span>No: 52 Old Matale Road, Kandy<br />Centrix Eduspace</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-slate-500 shrink-0" />
                078 858 4316
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-slate-500 shrink-0" />
                riyas2ict@gmail.com
              </div>
            </div>

            <a
              href="https://wa.me/94788584316"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 text-white text-xs font-semibold hover:bg-green-700 transition-colors shadow-sm"
            >
              <MessageCircle size={13} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-slate-500 text-xs">
            © 2026 Team Maestro Pvt Ltd. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="text-slate-500 hover:text-white text-xs transition-colors"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
