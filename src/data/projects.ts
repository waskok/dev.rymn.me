import { Mail } from 'lucide-react';
import { GithubIcon, DiscordIcon } from '../components/icons';
import type { Certificate, Project, SocialLink } from '../types';

/**
 * Real, deployed client sites - carry Lighthouse scores and an actual screenshot.
 */
export const realizedProjects: readonly Project[] = [
  {
    id: 'sft',
    index: '01',
    title: 'Sklep komputerowy SFT Computers',
    domain: 'indev.sft.net.pl',
    description: 'Kompletna strona firmowa - klienci od razu wiedzą, czym się zajmujecie i jak się z Wami skontaktować.',
    tags: ['Strona firmowa', 'Szybka', 'Czytelna'],
    kind: 'external',
    href: 'https://indev.sft.net.pl',
    screenshot: '/screenshots/sft.png',
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
  },
  {
    id: 'hub',
    index: '02',
    title: 'Rymn.me',
    domain: 'rymn.me',
    description: 'Przejrzyste centrum usług - klient od razu wie, gdzie szukać informacji i jak się skontaktować.',
    tags: ['Nowoczesny design', 'Przejrzysta', 'Wielostronicowa'],
    kind: 'external',
    href: 'https://rymn.me',
    screenshot: '/screenshots/rymn-hub.png',
    lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
  },
];

/**
 * Example sites hosted on separate subdomains - each tile opens the live demo externally.
 */
export const demoProjects: readonly Project[] = [
  {
    id: 'demo-kawiarnia',
    index: '01',
    title: 'Kawiarnia',
    domain: 'kawiarnia.rymn.me',
    description: 'Przykład dla lokalu gastronomicznego - menu, galeria, godziny otwarcia i rezerwacja stolika w jednym miejscu.',
    tags: ['Gastronomia', 'Menu online', 'Rezerwacja'],
    kind: 'external',
    href: 'https://kawiarnia.rymn.me',
  },
  {
    id: 'demo-2',
    index: '02',
    title: 'Demo #2',
    domain: 'wkrótce.rymn.me',
    description: 'Kolejny przykład w przygotowaniu - inna branża, inny styl. Wkrótce zobaczysz, co jeszcze mogę dla Ciebie zrobić.',
    tags: ['Demo', 'Wkrótce'],
    kind: 'soon',
    href: '#',
  },
];

/** Google-issued certificate, shown with personal data redacted (see /public + scripts/redact-certificate.ps1). */
export const certificate: Certificate = {
  title: 'Using AI in Business Development',
  program: 'Umiejętności Jutra AI',
  issuer: 'Google',
  partner: 'SGH',
  issueDate: '10 czerwca 2026',
  description:
    'Certyfikowany kurs Google z wykorzystania nowoczesnych narzędzi - dzięki temu mogę szybciej i sprawniej realizować projekty dla moich klientów.',
  image: '/certyfikat-google-ai-redacted.png?v=2',
};

export const socials: readonly SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/waskok', icon: GithubIcon },
  { id: 'discord', label: 'Discord', href: 'discord://-/users/410434333686497281', icon: DiscordIcon },
  { id: 'mail', label: 'Mail', href: 'mailto:kontakt.rymn@gmail.com', icon: Mail },
] as const;

export const CONTACT_URL = 'https://rymn.me/kontakt';
export const SUPPORT_URL = 'https://buycoffee.to/rymn';
export const CONTACT_EMAIL = 'kontakt.rymn@gmail.com';
export const HUB_URL = 'https://rymn.me';
