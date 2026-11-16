import { ImageResponse } from "next/og";
import { WORDMARK_D } from "@/components/wordmark-path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const wordmark = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2496 432"><path fill="#CB3A51" fill-rule="evenodd" d="${WORDMARK_D}"/></svg>`,
)}`;

/** Branded share card: logo, the page's own title, and a short line under it. */
export function ogCard(title: string, kicker: string) {
  const size = title.length > 60 ? 58 : title.length > 40 ? 66 : 76;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#000", padding: 80 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wordmark} width={380} height={66} alt="" />
          <div style={{ color: "#a3a3ad", fontSize: 26 }}>{kicker}</div>
        </div>
        <div style={{ color: "#fff", fontSize: size, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 1000 }}>{title}</div>
        <div style={{ height: 10, width: 160, background: "#CB3A51", borderRadius: 999 }} />
      </div>
    ),
    ogSize,
  );
}
