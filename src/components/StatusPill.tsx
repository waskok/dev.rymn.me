export function StatusPill() {
  return (
    <div className="flex items-center gap-2 rounded-md border border-graphite-200 bg-graphite-100/70 px-2.5 py-1.5">
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      <span className="font-mono truncate text-[11px] tracking-tight text-graphite-600">
        dostępny_na_projekty: true
      </span>
    </div>
  );
}
