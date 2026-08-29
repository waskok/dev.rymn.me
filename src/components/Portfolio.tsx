import { motion } from 'framer-motion';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { easeOut } from '../lib/motion';

interface PortfolioProps {
  projects: readonly Project[];
}

export function Portfolio({ projects }: PortfolioProps) {
  return (
    <section id="portfolio" className="relative z-20 mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-8 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="mb-10 max-w-lg"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-graphite-600 uppercase">portfolio</span>
        <h2 className="font-display mt-3 text-2xl font-medium text-graphite-900 sm:text-3xl">
          Zrealizowane projekty i demo
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-graphite-600 sm:text-base">
          Prawdziwe strony klientów oraz demo pokazujące zakres stylów i branż, w których się poruszam.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={0.08 * i} />
        ))}
      </div>
    </section>
  );
}
