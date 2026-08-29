import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Portfolio } from '../components/Portfolio';
import { TechStrip } from '../components/TechStrip';
import { Certification } from '../components/Certification';
import { projects, certificate, CONTACT_URL } from '../data/projects';

const techTags = ['REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'VITE', 'NODE.JS', 'GIT', 'LIGHTHOUSE 100/100'];

export function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.state]);

  return (
    <>
      <Hero />
      <TechStrip tags={techTags} />
      <Certification certificate={certificate} />
      <Portfolio projects={projects} />

      <section className="relative z-20 mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-graphite-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-display text-xl font-medium text-graphite-900 sm:text-2xl">
              Masz w głowie projekt strony?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-graphite-600">
              Napisz przez formularz na rymn.me — odpowiadam osobiście, bez agencji i pośredników.
            </p>
          </div>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-md bg-graphite-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Formularz kontaktowy
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </section>
    </>
  );
}
