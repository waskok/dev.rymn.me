interface ScreenshotFrameProps {
  domain: string;
  screenshot?: string;
}

/** Faux browser chrome wrapping a project screenshot — falls back to a labeled placeholder. */
export function ScreenshotFrame({ domain, screenshot }: ScreenshotFrameProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-graphite-200 bg-graphite-50">
      <div className="flex items-center gap-2 border-b border-graphite-200 bg-graphite-100 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-graphite-300" />
        <span className="h-2 w-2 rounded-full bg-graphite-300" />
        <span className="h-2 w-2 rounded-full bg-graphite-300" />
        <span className="font-mono ml-2 truncate rounded bg-graphite-200 px-2 py-0.5 text-[10px] text-graphite-600">
          {domain}
        </span>
      </div>
      <div className="dot-grid relative aspect-video w-full overflow-hidden bg-graphite-100">
        {screenshot ? (
          <img
            src={screenshot}
            alt={`Zrzut ekranu — ${domain}`}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[11px] text-graphite-600">zrzut ekranu — wkrótce</span>
          </div>
        )}
      </div>
    </div>
  );
}
