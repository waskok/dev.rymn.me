import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUp } from 'lucide-react';

const buttonClass =
  'inline-flex cursor-pointer items-center gap-2 rounded-md border border-graphite-300 bg-white px-4 py-2 text-xs font-medium text-graphite-700 transition-colors hover:border-graphite-500 hover:text-graphite-900 sm:text-sm';

interface PageNavProps {
  /** Top bar shows only back; bottom bar adds scroll-to-top. */
  variant: 'top' | 'bottom';
}

export function PageNav({ variant }: PageNavProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        variant === 'bottom' ? 'mt-12 border-t border-graphite-200 pt-8' : 'mb-8'
      }`}
    >
      <Link to="/" className={buttonClass}>
        <ArrowLeft className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
        Powrót
      </Link>

      {variant === 'bottom' && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={buttonClass}>
          <ArrowUp className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
          Przewiń do góry
        </button>
      )}
    </div>
  );
}
