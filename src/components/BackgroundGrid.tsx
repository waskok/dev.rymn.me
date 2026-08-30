/**
 * Flat, near-white backdrop with a soft top vignette line. Deliberately plain
 * and static (no dot-grid texture, no blurred color orbs, no dark glass) to
 * read as a clean, light "graphite" identity next to the hub's dark look.
 */
export function BackgroundGrid() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-graphite-50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-graphite-300 to-transparent" />
    </div>
  );
}
