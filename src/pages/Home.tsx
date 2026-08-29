import { ArrowLeft, Code2 } from 'lucide-react';

export function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 py-16">
      <a
        href="https://rymn.me"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white/80"
      >
        <ArrowLeft className="size-4" aria-hidden />
        rymn.me
      </a>

      <div className="flex max-w-xl flex-col items-center text-center">
        <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Code2 className="size-7 text-white/80" aria-hidden />
        </div>

        <p className="mb-3 text-xs tracking-[0.3em] text-white/40 uppercase">Web Development</p>
        <h1 className="font-display mb-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          dev.rymn.me
        </h1>
        <p className="text-base leading-relaxed text-white/55 text-balance sm:text-lg">
          Portfolio stron internetowych — React, TypeScript i Tailwind CSS. Wkrótce więcej projektów.
        </p>
      </div>
    </div>
  );
}
