import { Link } from 'react-router-dom';
import { HeartHandshake, Mail } from 'lucide-react';
import { useLogoClick } from '../lib/useLogoClick';
import { useSectionNav } from '../lib/useSectionNav';
import { socials, SUPPORT_URL, CONTACT_EMAIL, HUB_URL } from '../data/projects';
import { GoogleIcon } from './icons';

export function Footer() {
  const year = new Date().getFullYear();
  const handleLogoClick = useLogoClick();
  const handlePortfolioClick = useSectionNav('portfolio');
  const handleDemoClick = useSectionNav('demo');

  return (
    <footer className="relative z-20 border-t border-graphite-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2.5">
              <img src="/favicon.svg" alt="" className="h-8 w-8 shrink-0 rounded-lg" />
              <span className="font-mono text-sm font-medium text-graphite-900">
                dev<span className="text-graphite-600">.rymn.me</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-graphite-600">
              Strony internetowe dla firm lokalnych - część ekosystemu{' '}
              <a href={HUB_URL} target="_blank" rel="noreferrer" className="text-graphite-800 underline underline-offset-4 hover:text-graphite-950">
                rymn.me
              </a>
              .
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-graphite-600 transition-colors hover:text-graphite-900"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-graphite-600 uppercase">Nawigacja</span>
            <div className="mt-3 flex flex-col gap-2.5">
              <a
                href="#portfolio"
                onClick={handlePortfolioClick}
                className="text-sm text-graphite-600 transition-colors hover:text-graphite-900"
              >
                Portfolio
              </a>
              <a
                href="#demo"
                onClick={handleDemoClick}
                className="text-sm text-graphite-600 transition-colors hover:text-graphite-900"
              >
                Jak może wyglądać Twoja strona
              </a>
              <Link to="/polityka-prywatnosci" className="text-sm text-graphite-600 transition-colors hover:text-graphite-900">
                Polityka prywatności
              </Link>
              <Link to="/regulamin" className="text-sm text-graphite-600 transition-colors hover:text-graphite-900">
                Regulamin
              </Link>
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-graphite-600 uppercase">Znajdziesz mnie</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-graphite-200 text-graphite-600 transition-colors hover:border-graphite-400 hover:text-graphite-900"
                >
                  <social.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-graphite-200 pt-8">
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-graphite-300 bg-white px-5 py-3 text-sm font-medium text-graphite-900 shadow-sm transition-all hover:border-graphite-500 hover:shadow-md sm:w-auto"
          >
            <HeartHandshake className="h-4 w-4" strokeWidth={1.75} />
            Wesprzyj mnie
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-graphite-200 pt-6 text-xs text-graphite-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} rymn - wszystkie prawa zastrzeżone.</span>
          <span className="flex items-center gap-1.5">
            <GoogleIcon className="h-3.5 w-3.5" />
            Certyfikowany przez Google · Strony, które przyciągają klientów
          </span>
        </div>
      </div>
    </footer>
  );
}
