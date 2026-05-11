import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Users, Trophy, TrendingUp, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

// ── Typewriter hook ──────────────────────────────────────
function useTypewriter(text, speed = 65, startDelay = 0) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    setDisplayed(''); setDone(false)
    let i = 0
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++; setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(iv); setDone(true) }
      }, speed)
      return () => clearInterval(iv)
    }, startDelay)
    return () => clearTimeout(t)
  }, [text, speed, startDelay])
  return { displayed, done }
}

// ── Blinking cursor ──────────────────────────────────────
function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
      className="inline-block w-[3px] h-[0.82em] bg-cyan-400 align-middle ml-1 rounded-sm"
      aria-hidden
    />
  )
}

// ── Animated # for hashtag ───────────────────────────────
function AnimatedHash() {
  return (
    <motion.span
      animate={{ color: ['#facc15', '#34d399', '#60a5fa', '#f472b6', '#facc15'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      className="font-black"
    >
      #
    </motion.span>
  )
}

function HashtagLine({ text }) {
  const idx = text.indexOf('#')
  if (idx === -1) return <>{text}</>
  return <>{text.slice(0, idx)}<AnimatedHash />{text.slice(idx + 1)}</>
}

// ── Floating stat chips ───────────────────────────────────
// positions are % of the image container (which is ~155% of card height)
// so top-[X%] where X < 62 will be visible inside the card
const stats = [
  { icon: Users,      value: '1000+', label: 'Students',     pos: 'top-[10%]  left-[17%]',  delay: 0    },
  { icon: Trophy,     value: '500+',  label: "'A' Results",  pos: 'top-[6%]  right-[1%]', delay: 0.18 },
  { icon: TrendingUp, value: '95%',   label: 'Pass Rate',    pos: 'top-[45%] left-[10%]',  delay: 0.32 },
  { icon: Clock,      value: '5+',    label: 'Yrs Teaching', pos: 'top-[51%] right-[2%]', delay: 0.46 },
]


// ── Animated circuit dot grid ────────────────────────────
function CircuitGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(6,182,212,0.18) 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }}
    />
  )
}

// ── Main component ───────────────────────────────────────
export default function Hero() {
  const L1_TEXT   = 'Maestro'
  const L2_TEXT   = 'in ICT.'
  const L3_TEXT   = 'Become a Part of #TeamMaestro'

  const D1 = 350
  const D2 = D1 + L1_TEXT.length * 70 + 140
  const D3 = D2 + L2_TEXT.length * 70 + 180

  const line1 = useTypewriter(L1_TEXT, 70, D1)
  const line2 = useTypewriter(L2_TEXT, 70, D2)
  const line3 = useTypewriter(L3_TEXT, 42, D3)

  const cur1 = !line1.done
  const cur2 =  line1.done && !line2.done
  const cur3 =  line2.done

  return (
    <section id="home" className="bg-white pt-24 md:pt-28 pb-8 px-3 sm:px-5 lg:px-8">
      <div className="max-w-[1500px] mx-auto">

        {/* ── CARD ── */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ background: '#080e1f', minHeight: '680px' }}
        >
          {/* Circuit dot grid */}
          <CircuitGrid />

          {/* Glowing orb behind where tutor stands */}
          <div
            className="absolute bottom-0 right-[8%] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(99,102,241,0.10) 50%, transparent 72%)',
              filter: 'blur(50px)',
            }}
          />

          {/* ── LEFT TEXT CONTENT ── */}
          <div className="relative z-10 px-10 md:px-16 lg:px-24 py-16 pb-14 lg:w-[52%]">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold mb-6 tracking-widest uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              O/L &amp; A/L · English Medium · ICT
            </motion.div>

            {/* Typewriter headline */}
            <h1
              className="font-display font-black text-white leading-[1.02] tracking-tight mb-5"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)', minHeight: '2.2em' }}
            >
              <span className="block">
                {line1.displayed}
                {cur1 && <Cursor />}
              </span>
              <span
                className="block"
                style={{
                  WebkitTextStroke: '1px rgba(6,182,212,0.6)',
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(90deg, #fff 40%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                {line2.displayed}
                {cur2 && <Cursor />}
              </span>
            </h1>

            {/* Hashtag line */}
            <p
              className="text-xl md:text-2xl font-bold text-white/90 mb-3"
              style={{ minHeight: '1.6em' }}
            >
              {line3.displayed.length > 0 && <HashtagLine text={line3.displayed} />}
              {cur3 && <Cursor />}
            </p>

            {/* Subtitle */}
            <motion.p
              animate={{ opacity: line3.done ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="text-slate-400 text-sm md:text-base font-medium mb-8"
            >
              No.1 Sri Lanka's English Medium ICT Class
            </motion.p>

            {/* CTAs */}
            <motion.div
              animate={{ opacity: line3.done ? 1 : 0, y: line3.done ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://lms.riyasict.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-cyan-500 text-white font-bold text-sm hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-900/40"
              >
                Join Live
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/94788584316"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/8 border border-white/15 text-white font-bold text-sm hover:bg-white/15 transition-all hover:scale-105 backdrop-blur-sm"
              >
                <MessageCircle size={16} className="text-green-400" />
                Talk to us
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: TUTOR IMAGE (absolutely positioned, overflows bottom → card clips feet) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="absolute top-0 right-[8%] hidden lg:block"
            style={{ width: '52%', height: '158%', pointerEvents: 'none' }}
          >
            {/* Tutor image — anchored to top, bottom overflows and is clipped by card */}
            <img
              src="/hero.png"
              alt="Riyas Rushard — Maestro in ICT"
              className="absolute top-0 right-0 h-full w-auto object-contain object-top select-none"
              style={{ filter: 'drop-shadow(0 0 40px rgba(6,182,212,0.3))' }}
              draggable={false}
            />

            {/* Floating stat chips */}
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.78 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, i % 2 === 0 ? -8 : 8, 0],
                }}
                transition={{
                  opacity: { delay: 0.6 + s.delay, duration: 0.4 },
                  scale:   { delay: 0.6 + s.delay, duration: 0.4 },
                  y: { delay: 0.6 + s.delay, duration: 3.6 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
                }}
                className={`absolute z-20 ${s.pos} flex items-center gap-3 rounded-2xl px-4 py-3`}
                style={{
                  background: 'rgba(8,14,31,0.75)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  backdropFilter: 'blur(14px)',
                  boxShadow: '0 4px 28px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
                  pointerEvents: 'auto',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(99,102,241,0.2))',
                    border: '1px solid rgba(6,182,212,0.35)',
                  }}
                >
                  <s.icon size={16} className="text-cyan-400" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-display font-black text-lg text-white leading-none">{s.value}</div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
