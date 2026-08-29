import { useCallback, type MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Shared logo behaviour: smoothly scroll to top when already on the home
 * page, otherwise navigate there.
 */
export function useLogoClick() {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (location.pathname === '/') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    },
    [location.pathname, navigate],
  );
}
