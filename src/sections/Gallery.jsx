import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, ImageIcon } from 'lucide-react'

const items = [
  { id: 1, caption: 'Kandy Theory Class',         tag: 'Centrix Kandy',  img: '/gallery/1.jpg', accent: '#06b6d4' },
  { id: 2, caption: "A/L Results Day 2024",        tag: 'Highlights',     img: '/gallery/2.jpg', accent: '#8b5cf6' },
  { id: 3, caption: 'Online Session in Progress',  tag: 'Via Zoom',       img: '/gallery/3.jpg', accent: '#10b981' },
  { id: 4, caption: 'Grandpass Batch',             tag: 'Eduzone',        img: '/gallery/4.jpg', accent: '#f59e0b' },
  { id: 5, caption: 'Dehiwala Students',           tag: 'Team Comrade',   img: '/gallery/5.jpg', accent: '#f43f5e' },
  { id: 6, caption: 'Past Paper Session',          tag: 'Revision',       img: '/gallery/6.jpg', accent: '#06b6d4' },
]

const CARD_W = 220
const CARD_H = 300
const SPREAD = 155   // horizontal gap between cards
const EASE   = [0.23, 1, 0.32, 1]

export default function Gallery() {
  const [hovered, setHovered] = useState(null)
  const center = (items.length - 1) / 2   // 2.5 for 6 items

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: '#060c1a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-5">
            <Camera size={12} />
            Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-3">
            Life at{' '}
            <motion.span
              animate={{ color: ['#06b6d4', '#8b5cf6', '#10b981', '#06b6d4'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              #TeamMaestro
            </motion.span>
          </h2>
          <p className="text-slate-400 text-base max-w-md mx-auto">
            Hover over a card to bring it forward.
          </p>
        </motion.div>

        {/* ── 3D Fan — desktop ── */}
        <div
          className="relative justify-center items-center hidden md:flex"
          style={{
            perspective: '1100px',
            perspectiveOrigin: '50% 60%',
            height: CARD_H + 100,
          }}
          onMouseLeave={() => setHovered(null)}
        >
          {items.map((item, i) => {
            const off    = i - center               // e.g. -2.5 … 2.5
            const isHov  = hovered === i
            const anyHov = hovered !== null

            // When hovered: face viewer, jump forward
            // Otherwise   : fan out in 3D
            const rotY  = isHov ? 0       : off * 22
            const tx    = off * SPREAD
            const tz    = isHov ? 110     : -Math.abs(off) * 35
            const sc    = isHov ? 1.12    : 1 - Math.abs(off) * 0.055
            const op    = isHov ? 1       : anyHov ? 0.55 - Math.abs(off) * 0.04 : 1 - Math.abs(off) * 0.06
            const zi    = isHov ? 20      : 10 - Math.abs(Math.round(off))

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHovered(i)}
                animate={{ rotateY: rotY, x: tx, z: tz, scale: sc, opacity: op }}
                transition={{ duration: 0.38, ease: EASE }}
                style={{
                  position:       'absolute',
                  width:          CARD_W,
                  height:         CARD_H,
                  zIndex:         zi,
                  cursor:         'pointer',
                  borderRadius:   16,
                  overflow:       'hidden',
                }}
              >
                {/* ── Photo ── */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${item.accent}1a 0%, #050a18 100%)` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon size={40} style={{ color: item.accent, opacity: 0.18 }} />
                  </div>
                  <img
                    src={item.img}
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>

                {/* ── Hover caption ── */}
                <motion.div
                  animate={{ opacity: isHov ? 1 : 0, y: isHov ? 0 : 14 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-x-0 bottom-0 px-4 py-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)' }}
                >
                  <span
                    className="block text-[10px] font-black uppercase tracking-widest mb-1"
                    style={{ color: item.accent }}
                  >
                    {item.tag}
                  </span>
                  <span className="text-white text-sm font-semibold leading-tight">{item.caption}</span>
                </motion.div>

                {/* ── Glow border ── */}
                <motion.div
                  animate={{ opacity: isHov ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position:    'absolute',
                    inset:       0,
                    borderRadius: 16,
                    pointerEvents: 'none',
                    boxShadow:   `inset 0 0 0 1.5px ${item.accent}99, 0 0 50px ${item.accent}44`,
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* ── Fallback grid — mobile ── */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '3/4' }}
            >
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${item.accent}1a, #050a18)` }}
              />
              <img
                src={item.img}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div
                className="absolute inset-x-0 bottom-0 px-3 py-3"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
              >
                <span className="text-[10px] font-black uppercase" style={{ color: item.accent }}>
                  {item.tag}
                </span>
                <p className="text-white text-xs font-semibold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
