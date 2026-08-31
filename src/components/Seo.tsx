import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resolvePageSeo } from '../config/seo';
import { applyPageSeo } from '../lib/seo';

/** Keeps title, meta tags, canonical URL and JSON-LD in sync with the current route. */
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageSeo(resolvePageSeo(pathname));
  }, [pathname]);

  return null;
}
