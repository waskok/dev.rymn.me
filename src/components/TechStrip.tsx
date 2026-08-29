interface TechStripProps {
  tags: readonly string[];
}

/** Continuous tech ticker — same infinite-scroll technique as a marquee, restyled in mono/graphite. */
export function TechStrip({ tags }: TechStripProps) {
  const loop = [...tags, ...tags];

  return (
    <div className="relative z-20 mt-4 overflow-hidden border-y border-graphite-200 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-graphite-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-graphite-50 to-transparent" />

      <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap">
        {loop.map((tag, i) => (
          <span key={`${tag}-${i}`} className="font-mono flex items-center gap-8 text-xs tracking-[0.2em] text-graphite-600">
            {tag}
            <span className="text-graphite-300">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
