import { motion } from 'framer-motion';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { easeOut } from '../lib/motion';

interface DemoShowcaseProps {
  projects: readonly Project[];
}

export function DemoShowcase({ projects }: DemoShowcaseProps) {
  return (
    <section id="demo" className="relative z-20 mx-auto max-w-6xl scroll-mt-24 px-4 py-8 sm:px-8 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="mb-10 max-w-lg"
      >
        <span className="font-mono text-xs tracking-[0.25em] text-graphite-600 uppercase">demo</span>
        <h2 className="font-display mt-3 text-2xl font-medium text-graphite-900 sm:text-3xl">
          Zobacz, jak może wyglądać Twoja strona
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-graphite-600 sm:text-base">
          Kliknij na przykładową realizację, żeby zobaczyć pełne demo - kolejne branże i style dołączą wkrótce.
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
