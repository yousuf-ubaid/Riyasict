import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ImageIcon } from 'lucide-react'

const base = import.meta.env.BASE_URL

const images = [
  { img: `${base}gallery/1.jpg`,            accent: '#06b6d4', caption: 'AL 2023 Farewell',             tag: 'Highlights'     },
  { img: `${base}gallery/2.jpg`,            accent: '#8b5cf6', caption: 'AL 2023 Farewell',              tag: 'Highlights'     },
  { img: `${base}gallery/3.jpg`,            accent: '#10b981', caption: 'AL 2022 Workshop',               tag: 'Workshop'       },
  { img: `${base}gallery/4.jpg`,            accent: '#f59e0b', caption: 'Kithulgala Tour',                tag: 'TeamMaestro'    },
  { img: `${base}gallery/5.jpg`,            accent: '#f43f5e', caption: 'Scavenger Hunt Season 1',        tag: 'TeamMaestro'    },
  { img: `${base}gallery/6.jpg`,            accent: '#06b6d4', caption: 'AL 2023 OS Workshop',            tag: 'Workshop'       },
  { img: `${base}gallery/adventure.jpg`,    accent: '#06b6d4', caption: 'Adventure Guide',               tag: 'TeamMaestro'    },
  { img: `${base}gallery/dopamine.jpg`,     accent: '#8b5cf6', caption: 'Dopamine Detox',                tag: 'Special Event'  },
  { img: `${base}gallery/farewell_2022.jpg`,accent: '#10b981', caption: 'Farewell — A/L 2022',           tag: 'Highlights'     },
  { img: `${base}gallery/farewell_2023.jpg`,accent: '#f59e0b', caption: 'Farewell — A/L 2023',           tag: 'Highlights'     },
  { img: `${base}gallery/motivation.jpg`,   accent: '#f43f5e', caption: 'Motivation Program A/L 2022',  tag: 'Special Event'  },
  { img: `${base}gallery/scavenger.jpg`,    accent: '#a78bfa', caption: 'Scavenger Hunt Season 1',       tag: 'TeamMaestro'    },
]

// 3 columns of 4
const col1 = images.slice(0, 4)
const col2 = images.slice(4, 8)
const col3 = images.slice(8, 12)

function PhotoTile({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className="relative rounded-2xl overflow-hidden cursor-pointer mb-3 group"
      style={{ height: 200 }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${item.accent}22, #050a18)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <ImageIcon size={28} style={{ color: item.accent, opacity: 0.18 }} />
      </div>
      <img
        src={item.img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.target.style.display = 'none' }}
      />
      {/* Hover overlay with title */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }}>
        <div className="px-3 pb-3">
          <span className="block text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: item.accent }}>
            {item.tag}
          </span>
          <span className="text-white text-xs font-semibold leading-tight">{item.caption}</span>
        </div>
      </div>
    </div>
  )
}

function ScrollColumn({ items, direction = 'up', duration = 20 }) {
  const tripled = [...items, ...items, ...items]
  const tileH   = 200 + 12   // height + mb-3
  const colH    = items.length * tileH

  return (
    <div className="relative overflow-hidden" style={{ height: 560 }}>
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #060c1a, transparent)' }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #060c1a, transparent)' }} />

      <motion.div
        animate={direction === 'up'
          ? { y: [0, -colH] }
          : { y: [-colH, 0] }
        }
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {tripled.map((item, i) => (
          <PhotoTile key={i} item={item} onClick={() => {}} />
        ))}
      </motion.div>
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const tripled1 = [...col1, ...col1, ...col1]
  const tripled2 = [...col2, ...col2, ...col2]
  const tripled3 = [...col3, ...col3, ...col3]
  const tileH    = 200 + 12
  const colH1    = col1.length * tileH  // 4 * 212 = 848
  const colH2    = col2.length * tileH
  const colH3    = col3.length * tileH

  const makeColumn = (items, tripled, colH, direction, duration) => (
    <div className="relative overflow-hidden flex-1" style={{ height: 560 }}>
      <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #060c1a, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #060c1a, transparent)' }} />
      <motion.div
        animate={direction === 'up' ? { y: [0, -colH] } : { y: [-colH, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {tripled.map((item, i) => (
          <PhotoTile key={i} item={item} onClick={setLightbox} />
        ))}
      </motion.div>
    </div>
  )

  return (
    <section
      id="gallery"
      className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: '#060c1a' }}
    >
      <div className="max-w-5xl mx-auto">

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

        {/* ── 3 vertical scrolling columns ── */}
        <div className="flex gap-3">
          {makeColumn(col1, tripled1, colH1, 'up',   22)}
          {makeColumn(col2, tripled2, colH2, 'down', 26)}
          {makeColumn(col3, tripled3, colH3, 'up',   20)}
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
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.img}
                alt=""
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
