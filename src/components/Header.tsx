import { useState } from 'react';
import { AnimatePresence, motion, useMotionTemplate, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { StatusPill } from './StatusPill';
import { useLogoClick } from '../lib/useLogoClick';
import { useSectionNav } from '../lib/useSectionNav';
import { easeOut } from '../lib/motion';
import { CONTACT_URL } from '../data/projects';

function Logo({ onClick }: { onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="font-mono flex items-center text-[15px] font-medium tracking-tight text-graphite-900 sm:text-base"
    >
      <span className="text-graphite-500">&lt;</span>
      dev<span className="text-graphite-600">.rymn.me</span>
      <span className="text-graphite-500">/&gt;</span>
    </Link>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogoClick = useLogoClick();
  const handlePortfolioClick = useSectionNav('portfolio');

  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.85]);
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-5">
        <Logo onClick={handleLogoClick} />

        <nav className="hidden items-center gap-8 sm:flex">
          <a
            href="#portfolio"
            onClick={handlePortfolioClick}
            className="font-mono group relative text-[13px] text-graphite-600 transition-colors hover:text-graphite-900"
          >
            portfolio
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-graphite-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <StatusPill />
          </div>

          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-md border border-graphite-300 px-4 py-2 text-[13px] font-medium text-graphite-900 transition-colors hover:border-graphite-500 hover:bg-graphite-100 sm:flex"
          >
            Kontakt
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.9} />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMenuOpen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-graphite-300 text-graphite-600 transition-colors hover:text-graphite-900 sm:hidden"
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
            className="overflow-hidden border-t border-graphite-200 sm:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-5">
              <StatusPill />
              <a
                href="#portfolio"
                onClick={(event) => {
                  handlePortfolioClick(event);
                  setIsMenuOpen(false);
                }}
                className="font-mono text-sm text-graphite-600"
              >
                portfolio
              </a>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-md border border-graphite-300 px-4 py-3 text-sm font-medium text-graphite-900"
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
