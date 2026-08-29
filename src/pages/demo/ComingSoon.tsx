import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hammer } from 'lucide-react';
import { easeOut } from '../../lib/motion';

/** Placeholder for the not-yet-decided second demo — swap for a real page once the concept is set. */
export function ComingSoon() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeOut }}
      className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center px-6 py-24 sm:px-10"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-graphite-200 bg-graphite-100 text-graphite-600">
        <Hammer className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <span className="font-mono mt-5 text-xs tracking-[0.2em] text-graphite-600 uppercase">demo #2 · w przygotowaniu</span>
      <h1 className="font-display mt-3 text-3xl font-medium text-graphite-900 sm:text-4xl">
        Kolejne demo w budowie
      </h1>
      <p className="mt-4 max-w-lg text-balance leading-relaxed text-graphite-600">
        Ta karta portfolio czeka na kolejny projekt — inna branża, inny styl. Wróć tu wkrótce albo
        zajrzyj na resztę portfolio.
      </p>

      <Link
        to="/"
        state={{ scrollTo: 'portfolio' }}
        className="mt-9 inline-flex items-center gap-2 rounded-md border border-graphite-300 px-5 py-3 text-sm font-medium text-graphite-900 transition-colors hover:border-graphite-500 hover:bg-graphite-100"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
        Wróć do portfolio
      </Link>
    </motion.section>
  );
}
