import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import type { Project } from '../types';
import { easeOut } from '../lib/motion';
import { ScreenshotFrame } from './ScreenshotFrame';
import { LighthouseBadge } from './LighthouseBadge';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const isSoon = project.kind === 'soon';
  const isExternal = project.kind === 'external';

  const cta = isSoon ? (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-graphite-600">
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

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-graphite-200 pt-4">
        {project.lighthouse ? <LighthouseBadge scores={project.lighthouse} /> : <span />}
        {cta}
      </div>
    </>
  );

  const shellClass =
    'group block rounded-xl border border-graphite-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-graphite-400 hover:shadow-lg sm:p-6';

  const MotionWrap = motion.div;

  if (project.kind === 'external') {
    return (
      <MotionWrap
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: easeOut, delay }}
      >
        <a href={project.href} target="_blank" rel="noreferrer" className={shellClass}>
          {body}
        </a>
      </MotionWrap>
    );
  }

  return (
    <MotionWrap
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: easeOut, delay }}
    >
      <Link to={project.href} className={shellClass}>
        {body}
      </Link>
    </MotionWrap>
  );
}
