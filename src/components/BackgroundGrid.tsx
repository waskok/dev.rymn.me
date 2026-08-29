/**
 * Flat, technical backdrop — a faint dot-grid on a near-white canvas.
 * Deliberately monochrome and static (no blurred color orbs, no dark glass)
 * to read as a distinct, light "graphite" identity next to the hub's dark look.
 */
export function BackgroundGrid() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-graphite-50">
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-50 via-transparent to-graphite-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-graphite-300 to-transparent" />
    </div>
  );
}
