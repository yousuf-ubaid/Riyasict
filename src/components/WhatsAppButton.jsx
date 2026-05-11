import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-white rounded-2xl border border-slate-200 p-4 max-w-[210px] shadow-xl"
          >
            <p className="text-slate-900 text-sm font-semibold mb-1">Chat with Maestro!</p>
            <p className="text-slate-500 text-xs mb-3">Questions about courses or enrollment? We reply fast.</p>
            <a
              href="https://wa.me/94788584316"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-green-500 text-white text-xs font-semibold w-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={14} />
              078 858 4316
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl shadow-green-200/60 relative"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {showTooltip ? (
          <X size={22} className="text-white relative z-10" />
        ) : (
          <MessageCircle size={22} className="text-white relative z-10" />
        )}
      </motion.button>
    </div>
  )
}
