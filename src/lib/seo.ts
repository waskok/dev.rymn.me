import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
  GOOGLE_SITE_VERIFICATION,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
  type PageSeo,
} from '../config/seo';

const JSON_LD_ID = 'page-json-ld';

function upsertMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaName(name: string, content: string) {
  upsertMeta(
    `meta[name="${name}"]`,
    () => {
      const meta = document.createElement('meta');
      meta.name = name;
      return meta;
    },
    content,
  );
}

function setMetaProperty(property: string, content: string) {
  upsertMeta(
    `meta[property="${property}"]`,
    () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', property);
      return meta;
    },
    content,
  );
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

function setJsonLd(data: PageSeo['jsonLd']) {
  let el = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;

  if (!data) {
    el?.remove();
    return;
  }

  if (!el) {
    el = document.createElement('script');
    el.id = JSON_LD_ID;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }

  el.textContent = JSON.stringify(data);
}

function setGoogleVerification() {
  const selector = 'meta[name="google-site-verification"]';
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (!GOOGLE_SITE_VERIFICATION) {
    existing?.remove();
    return;
  }

  upsertMeta(
    selector,
    () => {
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      return meta;
    },
    GOOGLE_SITE_VERIFICATION,
  );
}

/** Syncs document head (title, meta, canonical, OG, Twitter, JSON-LD) for the active route. */
export function applyPageSeo(seo: PageSeo) {
  const url = seo.path ? absoluteUrl(seo.path) : absoluteUrl('/');

  document.title = seo.title;
  setCanonical(url);
  setMetaName('description', seo.description);
  setMetaName('robots', seo.robots ?? 'index, follow');

  setMetaProperty('og:type', 'website');
  setMetaProperty('og:locale', SITE_LOCALE);
  setMetaProperty('og:site_name', SITE_NAME);
  setMetaProperty('og:url', url);
  setMetaProperty('og:title', seo.title);
  setMetaProperty('og:description', seo.description);
  setMetaProperty('og:image', DEFAULT_OG_IMAGE);
  setMetaProperty('og:image:secure_url', DEFAULT_OG_IMAGE);
  setMetaProperty('og:image:type', 'image/png');
  setMetaProperty('og:image:width', String(DEFAULT_OG_IMAGE_WIDTH));
  setMetaProperty('og:image:height', String(DEFAULT_OG_IMAGE_HEIGHT));
  setMetaProperty('og:image:alt', SITE_NAME);

  setMetaName('twitter:card', 'summary');
  setMetaName('twitter:title', seo.title);
  setMetaName('twitter:description', seo.description);
  setMetaName('twitter:image', DEFAULT_OG_IMAGE);
  setMetaName('twitter:image:alt', SITE_NAME);

  setJsonLd(seo.jsonLd);
  setGoogleVerification();
}
