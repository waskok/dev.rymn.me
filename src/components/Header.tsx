import { useState, type MouseEvent } from 'react';
import { AnimatePresence, motion, useMotionTemplate, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { StatusPill } from './StatusPill';
import { useLogoClick } from '../lib/useLogoClick';
import { useSectionNav } from '../lib/useSectionNav';
import { easeOut } from '../lib/motion';
import { CONTACT_URL } from '../data/projects';

const navButtonClass =
  'inline-flex items-center gap-1.5 rounded-lg border border-graphite-200 bg-white px-4 py-2 text-sm font-medium text-graphite-700 shadow-sm transition-all hover:border-graphite-400 hover:bg-graphite-50 hover:shadow-md active:scale-[0.98]';

const showcaseButtonClass =
  'inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-950 shadow-sm transition-all hover:border-emerald-300 hover:bg-emerald-100 active:scale-[0.98]';

function Logo({ onClick }: { onClick: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5">
      <img src="/favicon.svg" alt="" className="h-8 w-8 shrink-0 rounded-lg" />
      <span className="font-mono text-[15px] font-medium tracking-tight text-graphite-900 sm:text-base">
        dev<span className="text-graphite-500">.rymn.me</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogoClick = useLogoClick();
  const handlePortfolioClick = useSectionNav('portfolio');
  const handleDemoClick = useSectionNav('demo');

  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.9]);
  const borderColor = useMotionTemplate`rgba(226, 226, 231, ${borderOpacity})`;
  const backgroundColor = useMotionTemplate`rgba(250, 250, 250, ${bgOpacity})`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeOut }}
      style={{ borderBottomColor: borderColor, backgroundColor }}
      className="sticky top-0 z-50 border-b border-transparent backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-8 sm:py-4">
        <Logo onClick={handleLogoClick} />

        <nav className="hidden items-center gap-2 lg:flex">
          <a href="#portfolio" onClick={handlePortfolioClick} className={navButtonClass}>
            Portfolio
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
          </a>
          <a href="#demo" onClick={handleDemoClick} className={showcaseButtonClass}>
            <span className="hidden xl:inline">Jak może wyglądać Twoja strona</span>
            <span className="xl:hidden">Twoja strona</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block">
            <StatusPill />
          </div>

          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            className={`${navButtonClass} hidden lg:inline-flex items-center gap-1.5`}
          >
            Kontakt
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMenuOpen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-graphite-200 bg-white text-graphite-600 shadow-sm transition-all hover:border-graphite-400 hover:text-graphite-900 lg:hidden"
          >
            {isMenuOpen ? <X className="h-4.5 w-4.5" strokeWidth={1.75} /> : <Menu className="h-4.5 w-4.5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="overflow-hidden border-t border-graphite-200 lg:hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-5">
              <StatusPill />
              <a
                href="#portfolio"
                onClick={(event) => {
                  handlePortfolioClick(event);
                  setIsMenuOpen(false);
                }}
                className={navButtonClass}
              >
                Portfolio
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
              </a>
              <a
                href="#demo"
                onClick={(event) => {
                  handleDemoClick(event);
                  setIsMenuOpen(false);
                }}
                className={`${showcaseButtonClass} justify-center`}
              >
                Jak może wyglądać Twoja strona
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
              </a>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className={`${navButtonClass} flex items-center justify-center gap-1.5`}
              >
                Kontakt
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
