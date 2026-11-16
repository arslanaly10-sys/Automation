import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

/** Pinned scroll effects only run here; everyone else never downloads GSAP. */
export const PIN_MEDIA = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

type Gsap = { gsap: typeof GsapType; ScrollTrigger: typeof ScrollTriggerType };
let loading: Promise<Gsap> | null = null;

/** Loads GSAP and ScrollTrigger once, on first need. */
export function loadGsap(): Promise<Gsap> {
  loading ??= Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([g, s]) => {
    g.gsap.registerPlugin(s.ScrollTrigger);
    return { gsap: g.gsap, ScrollTrigger: s.ScrollTrigger };
  });
  return loading;
}

/**
 * Runs `setup` with GSAP whenever PIN_MEDIA matches, loading GSAP lazily.
 * Returns a cleanup that reverts synchronously: call it from useLayoutEffect so pins are undone
 * before React removes the DOM (otherwise navigating away crashes the next page).
 */
export function whenPinnable(setup: (g: Gsap) => () => void): () => void {
  const mq = window.matchMedia(PIN_MEDIA);
  let undo: (() => void) | null = null;
  let disposed = false;
  const sync = () => {
    if (mq.matches && !undo) {
      loadGsap().then((g) => {
        if (disposed || undo || !mq.matches) return;
        undo = setup(g);
        requestAnimationFrame(() => g.ScrollTrigger.refresh());
      });
    } else if (!mq.matches && undo) {
      undo();
      undo = null;
    }
  };
  sync();
  mq.addEventListener("change", sync);
  return () => {
    disposed = true;
    mq.removeEventListener("change", sync);
    undo?.();
    undo = null;
  };
}
