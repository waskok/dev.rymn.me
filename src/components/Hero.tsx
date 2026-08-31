import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Gauge, Smartphone } from 'lucide-react';
import { easeOut, entranceDuration } from '../lib/motion';
import { useSectionNav } from '../lib/useSectionNav';
import { CONTACT_URL } from '../data/projects';
import { LighthouseHeroCard } from './LighthouseHeroCard';

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: entranceDuration, ease: easeOut } },
};

export function Hero() {
  const handlePortfolioClick = useSectionNav('portfolio');
  const handleDemoClick = useSectionNav('demo');

  return (
    <section className="relative z-20 overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-graphite-200/40 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-100/50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } } }}
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-graphite-200 bg-white px-2.5 py-1 text-[11px] font-medium text-graphite-700 shadow-sm">
              <Gauge className="h-3 w-3 text-emerald-600" strokeWidth={2} />
              Ładuje się błyskawicznie
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-graphite-200 bg-white px-2.5 py-1 text-[11px] font-medium text-graphite-700 shadow-sm">
              <Smartphone className="h-3 w-3 text-amber-500" strokeWidth={2} />
              Na telefonie i komputerze
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-balance mt-6 text-[2.35rem] leading-[1.08] font-medium tracking-tight text-graphite-900 sm:text-5xl lg:text-[3.25rem]"
          >
            Nowoczesna strona dla{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Twojej Firmy</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-2.5 w-full origin-left rounded-sm bg-emerald-200/70"
              />
            </span>
            .
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-lg text-base leading-relaxed text-graphite-600 sm:text-lg">
            Pomagam lokalnym firmom zaistnieć w internecie - tworzę strony, które budzą zaufanie, ułatwiają kontakt
            z klientami i dobrze wyglądają na każdym urządzeniu. Bez agencji, bez pośredników - rozmawiasz ze mną
            bezpośrednio.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              onClick={handlePortfolioClick}
              className="group flex items-center gap-2 rounded-lg bg-graphite-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-black hover:shadow-lg"
            >
              Zobacz realizacje
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
            <a
              href="#demo"
              onClick={handleDemoClick}
              className="group flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-950 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-100"
            >
              Sprawdź Przykłady
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-graphite-600 underline underline-offset-4 transition-colors hover:text-graphite-900"
            >
              Napisz do mnie
            </a>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md pb-6 lg:max-w-none lg:pb-0">
          <LighthouseHeroCard />
        </div>
      </div>
    </section>
  );
}
