import { WORDMARK_D } from "./wordmark-path";

/** The INFOTECH wordmark, traced from the original logo. Inherits colour via currentColor. */
export function Wordmark({ className, title = "INFOTECH" }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 2496 432" className={className} role="img" aria-label={title} fill="currentColor">
      <path fillRule="evenodd" d={WORDMARK_D} />
    </svg>
  );
}

/** The diamond mark from the logo, redrawn on a clean grid. */
export function Mark({ className, strokeWidth = 3 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 60" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <path d="M21 4 L4 30 L21 56" strokeWidth={strokeWidth * 2.6} strokeLinejoin="miter" />
      <path d="M79 4 L96 30 L79 56" strokeWidth={strokeWidth * 2.6} strokeLinejoin="miter" />
      <path d="M50 6 L74 30 L50 54 L26 30 Z" strokeWidth={strokeWidth} strokeLinejoin="miter" />
      <path d="M50 17 L63 30 L50 43 L37 30 Z" strokeWidth={strokeWidth} strokeLinejoin="miter" />
    </svg>
  );
}
