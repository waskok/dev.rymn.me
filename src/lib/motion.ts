/** Shared cubic-bezier easing used across entrance animations for a consistent feel. */
export const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Fire when a good chunk of the element is on screen - not before it scrolls into view. */
export const inView = {
  once: true,
  amount: 0.35,
} as const;

export const entranceDuration = 0.9;
export const entranceYOffset = 28;
export const entranceDelayStep = 0.14;

export function entranceTransition(delay = 0) {
  return { duration: entranceDuration, ease: easeOut, delay };
}

export function fadeUpMotion(delay = 0) {
  return {
    initial: { opacity: 0, y: entranceYOffset },
    whileInView: { opacity: 1, y: 0 },
    viewport: inView,
    transition: entranceTransition(delay),
  };
}
