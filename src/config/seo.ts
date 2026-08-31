export const SITE_URL = 'https://dev.rymn.me';
export const SITE_NAME = 'dev.rymn.me';
export const SITE_LOCALE = 'pl_PL';
export const SITE_LANGUAGE = 'pl-PL';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/rymn-me-icon.png`;
export const DEFAULT_OG_IMAGE_WIDTH = 635;
export const DEFAULT_OG_IMAGE_HEIGHT = 637;

/**
 * Wklej token z Google Search Console (Ustawienia → Weryfikacja własności → Tag HTML).
 * Zostaw pusty string, dopóki nie masz tokenu - meta tag wtedy nie jest renderowany.
 */
export const GOOGLE_SITE_VERIFICATION = 'GKszsukSWZvUR8u_n84hCjw4Q4vFrVh48jMMIOj53PM';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  robots?: string;
  jsonLd?: Record<string, unknown> | readonly Record<string, unknown>[];
}

const sharedAuthor = {
  '@type': 'Person' as const,
  name: 'rymn',
  email: 'kontakt.rymn@gmail.com',
  url: SITE_URL,
};

export const PAGE_SEO: Record<string, PageSeo> = {
  '/': {
    title: 'dev.rymn.me · Strony internetowe dla firm',
    description:
      'Tworzę nowoczesne strony internetowe dla lokalnych firm - szybkie, przejrzyste i widoczne w Google. Portfolio web development w React i TypeScript.',
    path: '/',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        description:
          'Portfolio web development - strony internetowe dla firm, z wynikiem Lighthouse 100/100.',
        inLanguage: SITE_LANGUAGE,
        author: sharedAuthor,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'dev.rymn.me - Strony internetowe',
        url: SITE_URL,
        description: 'Tworzenie nowoczesnych stron internetowych dla lokalnych firm i freelancerów.',
        areaServed: { '@type': 'Country', name: 'Polska' },
        serviceType: 'Web Development',
        provider: sharedAuthor,
        image: DEFAULT_OG_IMAGE,
      },
    ],
  },
  '/polityka-prywatnosci': {
    title: 'Polityka prywatności · dev.rymn.me',
    description: 'Polityka prywatności serwisu dev.rymn.me - zasady przetwarzania danych osobowych.',
    path: '/polityka-prywatnosci',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Polityka prywatności',
      url: `${SITE_URL}/polityka-prywatnosci`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
      inLanguage: SITE_LANGUAGE,
    },
  },
  '/regulamin': {
    title: 'Regulamin · dev.rymn.me',
    description: 'Regulamin korzystania z serwisu dev.rymn.me - portfolio web development.',
    path: '/regulamin',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Regulamin',
      url: `${SITE_URL}/regulamin`,
      isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
      inLanguage: SITE_LANGUAGE,
    },
  },
};

export const NOT_FOUND_SEO: PageSeo = {
  title: 'Strona nie istnieje · dev.rymn.me',
  description: 'Nie znaleziono strony na dev.rymn.me.',
  path: '',
  robots: 'noindex, follow',
};

export function resolvePageSeo(pathname: string): PageSeo {
  if (pathname in PAGE_SEO) return PAGE_SEO[pathname];
  return NOT_FOUND_SEO;
}

export function absoluteUrl(path: string): string {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
