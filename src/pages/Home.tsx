import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Portfolio } from '../components/Portfolio';
import { DemoShowcase } from '../components/DemoShowcase';
import { TechStrip } from '../components/TechStrip';
import { Certification } from '../components/Certification';
import { easeOut } from '../lib/motion';
import { realizedProjects, demoProjects, certificate, CONTACT_URL } from '../data/projects';

const benefitTags = [
  'SZYBKA ŁADOWANIE',
  'DZIAŁA NA TELEFONIE',
  'WIDOCZNA W GOOGLE',
  'PROFESJONALNY WYGLĄD',
  'ŁATWY KONTAKT',
  'WŁASNA DOMENA',
  'BEZ POŚREDNIKÓW',
];

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
      <TechStrip tags={benefitTags} />
      <Certification certificate={certificate} />
      <Portfolio projects={realizedProjects} />
      <DemoShowcase projects={demoProjects} />

      <section className="relative z-20 mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="flex flex-col items-start justify-between gap-6 rounded-xl border border-graphite-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-10"
        >
          <div>
            <h2 className="font-display text-xl font-medium text-graphite-900 sm:text-2xl">
              Chcesz, żeby klienci łatwiej Cię znaleźli?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-graphite-600">
              Opisz mi swoją firmę - odpowiem osobiście, bez zobowiązań i bez pośredników. Wspólnie ustalimy, jak
              ma wyglądać Twoja strona.
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
        </motion.div>
      </section>
    </>
  );
}
