import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ImageIcon } from 'lucide-react'

const base = import.meta.env.BASE_URL

const items = [
  { id: 1, caption: 'Kandy Theory Class',          tag: 'Centrix Kandy',  img: `${base}gallery/1.jpg`, accent: '#06b6d4' },
  { id: 2, caption: "A/L Results Day 2024",         tag: 'Highlights',     img: `${base}gallery/2.jpg`, accent: '#8b5cf6' },
  { id: 3, caption: 'Online Session in Progress',   tag: 'Via Zoom',       img: `${base}gallery/3.jpg`, accent: '#10b981' },
  { id: 4, caption: 'Grandpass Batch',              tag: 'Eduzone',        img: `${base}gallery/4.jpg`, accent: '#f59e0b' },
  { id: 5, caption: 'Dehiwala Students',            tag: 'Team Comrade',   img: `${base}gallery/5.jpg`, accent: '#f43f5e' },
  { id: 6, caption: 'Past Paper Session',           tag: 'Revision',       img: `${base}gallery/6.jpg`, accent: '#06b6d4' },
]

function MasonryCard({ item, index, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(item)}
      className="relative rounded-2xl overflow-hidden cursor-zoom-in mb-4 break-inside-avoid"
      style={{ display: 'block' }}
    >
      {/* Placeholder */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${item.accent}18 0%, #050a18 100%)` }}
      >
        <ImageIcon size={32} style={{ color: item.accent, opacity: 0.2 }} />
      </div>

      {/* Photo */}
      <img
        src={item.img}
        alt={item.caption}
        className="w-full h-auto block relative z-10 transition-transform duration-500"
        style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        onError={(e) => { e.target.style.display = 'none' }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 z-20 flex items-end p-4 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
        }}
      >
        <div>
          <span
            className="text-[10px] font-black uppercase tracking-widest block mb-1"
            style={{ color: item.accent }}
          >
            {item.tag}
          </span>
          <span className="text-white text-sm font-semibold">{item.caption}</span>
        </div>
      </div>

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl z-30 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          boxShadow: `inset 0 0 0 1.5px ${item.accent}88`,
        }}
      />
    </motion.div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: '#060c1a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
            Moments from classes, results days, and the journey of our students.
          </p>
        </motion.div>

        {/* ── Masonry Grid ── */}
        <div
          className="gap-4"
          style={{
            columns: 'var(--cols)',
            '--cols': '2',
          }}
        >
          <style>{`
            @media (min-width: 640px)  { .masonry-wrap { columns: 2; } }
            @media (min-width: 1024px) { .masonry-wrap { columns: 3; } }
          `}</style>
          <div className="masonry-wrap" style={{ columns: 2 }}>
            {items.map((item, i) => (
              <MasonryCard key={item.id} item={item} index={i} onClick={setLightbox} />
            ))}
          </div>
        </div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.img}
                alt={lightbox.caption}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 inset-x-0 px-5 py-4 rounded-b-2xl"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <span className="text-[11px] font-black uppercase tracking-widest mr-2"
                  style={{ color: lightbox.accent }}>{lightbox.tag}</span>
                <span className="text-white text-sm font-semibold">{lightbox.caption}</span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
