import { Mail } from 'lucide-react';
import { GithubIcon, DiscordIcon } from '../components/icons';
import type { Certificate, Project, SocialLink } from '../types';

/**
 * Case studies shown in the portfolio grid. Real, deployed sites (`external`)
 * carry Lighthouse scores; demo sites built inside this repo (`internal`) are
 * playgrounds showcasing range and don't ship a live client project.
 *
 * TODO(rymn): swap `screenshot` placeholders for real captures once ready —
 * drop images into `public/screenshots/` and set the path here.
 */
export const projects: readonly Project[] = [
  {
    id: 'sft',
    index: '01',
    title: 'SFT',
    domain: 'indev.sft.net.pl',
    description: 'Strona zrealizowana dla klienta — od makiety po wdrożenie, z naciskiem na szybkość i czytelność treści.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    kind: 'external',
    href: 'https://indev.sft.net.pl',
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
  },
  {
    id: 'hub',
    index: '02',
    title: 'Rymn Hub',
    domain: 'rymn.me',
    description: 'Główny hub freelancera — punkt startowy kierujący do dedykowanych portfolio (web, design, wideo).',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    kind: 'external',
    href: 'https://rymn.me',
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
  },
  {
    id: 'demo-kawiarnia',
    index: '03',
    title: 'Kawiarnia',
    domain: 'dev.rymn.me/demo/kawiarnia',
    description: 'Demo strony dla lokalu gastronomicznego — menu, galeria, godziny otwarcia i rezerwacja stolika.',
    tags: ['Demo', 'React', 'Tailwind CSS'],
    kind: 'internal',
    href: '/demo/kawiarnia',
  },
  {
    id: 'demo-2',
    index: '04',
    title: 'Demo #2',
    domain: 'dev.rymn.me/demo/…',
    description: 'Kolejna demo-strona w przygotowaniu — kolejna branża, kolejny styl. Wkrótce dostępna.',
    tags: ['Demo'],
    kind: 'soon',
    href: '/demo/w-przygotowaniu',
  },
] as const;

/** Google-issued certificate, shown with personal data redacted (see /public + scripts/redact-certificate.ps1). */
export const certificate: Certificate = {
  title: 'Using AI in Business Development',
  program: 'Umiejętności Jutra AI',
  issuer: 'Google',
  partner: 'SGH',
  issueDate: '10 czerwca 2026',
  description:
    'Pięciotygodniowe szkolenie z profesjonalnego wykorzystania AI w automatyzacji pracy i procesów biznesowych, zakończone pozytywnym wynikiem egzaminu końcowego.',
  image: '/certyfikat-google-ai-redacted.png',
};

export const socials: readonly SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/waskok', icon: GithubIcon },
  { id: 'discord', label: 'Discord', href: 'discord://-/users/410434333686497281', icon: DiscordIcon },
  { id: 'mail', label: 'Mail', href: 'mailto:kontakt.rymn@gmail.com', icon: Mail },
] as const;

export const CONTACT_URL = 'https://rymn.me/kontakt';
export const HUB_URL = 'https://rymn.me';
