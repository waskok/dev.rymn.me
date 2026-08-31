import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectCarouselProps {
  projects: readonly Project[];
}

const SWIPE_THRESHOLD = 48;

/** Desktop grid + mobile carousel: one full card visible, arrows below, touch swipe. */
export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = projects.length;

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + count) % count);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - event.changedTouches[0].clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      go(delta > 0 ? 1 : -1);
    }
    touchStartX.current = null;
  };

  return (
    <>
      <div className="hidden gap-5 sm:grid sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={0.08 * i} />
        ))}
      </div>

      <div className="sm:hidden">
        <div
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full shrink-0 grow-0 basis-full">
                <ProjectCard project={project} animate={false} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Poprzedni projekt"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-graphite-200 bg-white text-graphite-800 shadow-sm transition-colors hover:border-graphite-400 active:bg-graphite-50"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>

          <div className="flex items-center justify-center gap-2">
            {projects.map((project, i) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Pokaż ${project.title}`}
                aria-current={i === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-graphite-900' : 'w-2 bg-graphite-300'}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Następny projekt"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-graphite-200 bg-white text-graphite-800 shadow-sm transition-colors hover:border-graphite-400 active:bg-graphite-50"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </>
  );
}
