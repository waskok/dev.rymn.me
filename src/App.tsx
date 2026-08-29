import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

const Kawiarnia = lazy(() =>
  import('./pages/demo/Kawiarnia').then((module) => ({ default: module.Kawiarnia })),
);
const ComingSoon = lazy(() =>
  import('./pages/demo/ComingSoon').then((module) => ({ default: module.ComingSoon })),
);
const PrivacyPolicy = lazy(() =>
  import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })),
);
const Terms = lazy(() => import('./pages/Terms').then((module) => ({ default: module.Terms })));
const NotFound = lazy(() =>
  import('./pages/NotFound').then((module) => ({ default: module.NotFound })),
);

/**
 * Web development portfolio for dev.rymn.me. Demo case studies (e.g. the
 * coffee-shop site) render outside the portfolio chrome so they read as
 * standalone client sites; everything else stays inside the shared shell.
 */
function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/demo/kawiarnia" element={<Kawiarnia />} />

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="demo/w-przygotowaniu" element={<ComingSoon />} />
          <Route path="polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="regulamin" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
