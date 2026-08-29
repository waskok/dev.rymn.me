import { useCallback, type MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Smoothly scrolls to an in-page section when already on `/`; otherwise
 * navigates home first and passes the target through router state so the
 * home page can pick up the scroll once it has mounted.
 */
export function useSectionNav(sectionId: string) {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (location.pathname === '/') {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: sectionId } });
      }
    },
    [location.pathname, navigate, sectionId],
  );
}
