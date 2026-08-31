import { Outlet } from 'react-router-dom';
import { BackgroundGrid } from './BackgroundGrid';
import { Header } from './Header';
import { Footer } from './Footer';
import { Seo } from './Seo';

/** Shared page shell - background, header and footer stay mounted across routes. */
export function Layout() {
  return (
    <div className="relative min-h-screen bg-graphite-50 font-sans text-graphite-800">
      <Seo />
      <BackgroundGrid />

      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
