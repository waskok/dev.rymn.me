import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

const PrivacyPolicy = lazy(() =>
  import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })),
);
const Terms = lazy(() => import('./pages/Terms').then((module) => ({ default: module.Terms })));
const NotFound = lazy(() =>
  import('./pages/NotFound').then((module) => ({ default: module.NotFound })),
);

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="regulamin" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
