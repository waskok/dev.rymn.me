import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface DemoBarProps {
  label: string;
  /** Tailwind classes for the bar background/text — lets each demo match its own theme. */
  toneClassName?: string;
}

/**
 * Sticky disclosure bar shown on every demo page — makes it obvious this is a
 * showcase (not a real client site) and always offers a way back to the
 * dev.rymn.me portfolio grid.
 */
export function DemoBar({ label, toneClassName = 'bg-stone-950 text-stone-300 border-stone-800' }: DemoBarProps) {
  return (
    <div className={`sticky top-0 z-50 flex items-center justify-between gap-3 border-b px-4 py-2.5 text-xs sm:px-6 ${toneClassName}`}>
      <span className="truncate">
        <span className="font-semibold">Demo</span> — {label}. Zbudowane w React + Tailwind CSS.
      </span>
      <Link
        to="/"
        state={{ scrollTo: 'portfolio' }}
        className="flex shrink-0 items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 font-medium transition-colors hover:border-white/30"
      >
        <ArrowLeft className="h-3 w-3" strokeWidth={2} />
        Portfolio
      </Link>
    </div>
  );
}
