import { motion } from 'framer-motion';
import { easeOut } from '../lib/motion';
import { GoogleIcon } from './icons';

const scores = [
  { label: 'Szybkość', short: 'Szyb.' },
  { label: 'Czytelność', short: 'Czyt.' },
  { label: 'Jakość', short: 'Jak.' },
  { label: 'Widoczność', short: 'SEO' },
] as const;

const lighthouseGreen = '#0cce6b';

function ScoreRing({ label, short, delay }: { label: string; short: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: easeOut, delay }}
      className="flex flex-col items-center gap-2.5"
    >
      <div
        className="relative flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full sm:h-[5.25rem] sm:w-[5.25rem]"
        style={{ background: `conic-gradient(${lighthouseGreen} 360deg, #303136 0deg)` }}
      >
        <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-[#1f1f23] sm:h-[3.9rem] sm:w-[3.9rem]">
          <span className="font-mono text-xl font-semibold sm:text-[1.35rem]" style={{ color: lighthouseGreen }}>
            100
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[11px] font-medium leading-tight text-[#e8eaed] sm:text-xs">{label}</p>
        <p className="font-mono mt-0.5 text-[9px] tracking-wide text-[#9aa0a6] uppercase sm:hidden">{short}</p>
      </div>
    </motion.div>
  );
}

/** Lighthouse score showcase for the hero - overlapping logo badges on the score card corners. */
export function LighthouseHeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut, delay: 0.25 }}
      className="relative w-full px-6 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -8, y: -8 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.55, ease: easeOut, delay: 0.45 }}
        className="absolute top-0 left-0 z-20 flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-2xl border border-graphite-200 bg-white p-2 shadow-xl sm:h-[6.5rem] sm:w-[6.5rem] sm:p-2.5"
      >
        <img src="/lighthouse-logo.png" alt="Certyfikat jakości Google" className="h-full w-full object-contain" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 8, y: 8 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.55, ease: easeOut, delay: 0.55 }}
        className="absolute right-0 bottom-0 z-20 flex h-14 w-14 items-center justify-center rounded-xl border border-graphite-200 bg-white shadow-xl sm:h-16 sm:w-16"
      >
        <GoogleIcon className="h-8 w-8 sm:h-9 sm:w-9" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-2xl border border-graphite-300/80 bg-[#1f1f23] shadow-2xl shadow-graphite-400/30"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#18181b] px-4 py-3.5 pl-[4.75rem] sm:px-5 sm:py-4 sm:pl-[5.5rem]">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white sm:text-base">Jakość strony</p>
            <p className="font-mono text-xs text-[#9aa0a6] sm:text-sm">sprawdzona przez Google</p>
          </div>
          <span
            className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase"
            style={{ color: lighthouseGreen, backgroundColor: 'rgba(12, 206, 107, 0.12)', border: '1px solid rgba(12, 206, 107, 0.25)' }}
          >
            100 / 100
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-5 px-4 py-5 sm:gap-x-4 sm:gap-y-6 sm:px-6 sm:py-6">
          {scores.map((score, i) => (
            <ScoreRing key={score.label} label={score.label} short={score.short} delay={0.45 + i * 0.08} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
