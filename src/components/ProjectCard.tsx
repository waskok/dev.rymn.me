import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import type { Project } from '../types';
import { fadeUpMotion } from '../lib/motion';
import { ScreenshotFrame } from './ScreenshotFrame';
import { LighthouseBadge } from './LighthouseBadge';

interface ProjectCardProps {
  project: Project;
  delay?: number;
  animate?: boolean;
}

const shellClass =
  'group block rounded-xl border border-graphite-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-graphite-400 hover:shadow-lg sm:p-6';

export function ProjectCard({ project, delay = 0, animate = true }: ProjectCardProps) {
  const isSoon = project.kind === 'soon';
  const isExternal = project.kind === 'external';

  const cta = isSoon ? (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-graphite-900">
      Wkrótce
      <Clock3 className="h-3.5 w-3.5" strokeWidth={2} />
    </span>
  ) : (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-graphite-900">
      {isExternal ? 'Zobacz stronę' : 'Zobacz demo'}
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
    </span>
  );

  const body = (
    <>
      <ScreenshotFrame domain={project.domain} screenshot={project.screenshot} />

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono rounded border border-graphite-200 bg-graphite-50 px-1.5 py-0.5 text-[10px] text-graphite-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-display text-lg font-medium text-graphite-900 sm:text-xl">{project.title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-graphite-600">{project.description}</p>
        </div>
        <span className="font-mono shrink-0 text-xs text-graphite-600">{project.index}</span>
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-graphite-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
        {project.lighthouse ? (
          <div className="min-w-0 overflow-x-auto">
            <LighthouseBadge scores={project.lighthouse} />
          </div>
        ) : (
          <span />
        )}
        {cta}
      </div>
    </>
  );

  const motionProps = animate
    ? {
        ...fadeUpMotion(delay),
        whileHover: { y: -4 } as const,
      }
    : { initial: false as const };

  if (isSoon) {
    return (
      <motion.div {...motionProps}>
        <div className={`${shellClass} cursor-default`} aria-disabled="true">
          {body}
        </div>
      </motion.div>
    );
  }

  if (isExternal) {
    return (
      <motion.div {...motionProps}>
        <a href={project.href} target="_blank" rel="noreferrer" className={shellClass}>
          {body}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link to={project.href} className={shellClass}>
        {body}
      </Link>
    </motion.div>
  );
}
