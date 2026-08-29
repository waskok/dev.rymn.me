import type { LighthouseScores } from '../types';

function scoreColor(score: number) {
  if (score >= 90) return '#16a34a';
  if (score >= 50) return '#d97706';
  return '#dc2626';
}

function Ring({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="relative flex h-11 w-11 items-center justify-center rounded-full"
        style={{ background: `conic-gradient(${scoreColor(value)} ${value * 3.6}deg, var(--color-graphite-200) 0deg)` }}
      >
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white">
          <span className="font-mono text-[10.5px] font-semibold text-graphite-900">{value}</span>
        </div>
      </div>
      <span className="font-mono text-[8.5px] tracking-wide text-graphite-600 uppercase">{label}</span>
    </div>
  );
}

interface LighthouseBadgeProps {
  scores: LighthouseScores;
}

/** Compact Lighthouse score readout — reused on each real (non-demo) project card. */
export function LighthouseBadge({ scores }: LighthouseBadgeProps) {
  return (
    <div className="flex items-center gap-3.5">
      <Ring label="Perf" value={scores.performance} />
      <Ring label="A11y" value={scores.accessibility} />
      <Ring label="Prakt." value={scores.bestPractices} />
      <Ring label="SEO" value={scores.seo} />
    </div>
  );
}
