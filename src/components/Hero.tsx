import { motion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { easeOut } from '../lib/motion';
import { useSectionNav } from '../lib/useSectionNav';
import { CONTACT_URL } from '../data/projects';

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

export function Hero() {
  const handlePortfolioClick = useSectionNav('portfolio');

  return (
    <section className="relative z-20 mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="max-w-3xl"
      >
        <motion.span variants={item} className="font-mono text-xs tracking-[0.25em] text-graphite-600 uppercase">
          web development · portfolio
        </motion.span>

        {/* Visible from first paint for LCP; only a short slide so it doesn't look static. */}
        <motion.h1
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="font-display text-balance mt-4 text-4xl leading-[1.1] font-medium tracking-tight text-graphite-900 sm:text-5xl md:text-7xl"
        >
          Strony, które <span className="text-graphite-600">ładują się szybko</span> i wyglądają czysto.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-balance text-base leading-relaxed text-graphite-600 sm:text-lg">
          Buduję responsywne strony i landing page'e w React i Tailwind CSS - od makiety po wdrożenie,
          z naciskiem na wydajność i dobre wyniki Lighthouse.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#portfolio"
            onClick={handlePortfolioClick}
            className="flex items-center gap-2 rounded-md bg-graphite-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Zobacz portfolio
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-graphite-300 px-5 py-3 text-sm font-medium text-graphite-900 transition-colors hover:border-graphite-500 hover:bg-graphite-100"
          >
            Napisz do mnie
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
