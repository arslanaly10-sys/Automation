import { ImageResponse } from "next/og";
import { WORDMARK_D } from "@/components/wordmark-path";

export const alt = "INFOTECH: AI automation for service businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const wordmark = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2496 432"><path fill="#CB3A51" fill-rule="evenodd" d="${WORDMARK_D}"/></svg>`,
  )}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#000", padding: 80 }}>
        <img src={wordmark} width={520} height={90} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: "#fff", fontSize: 68, lineHeight: 1.08, letterSpacing: -1.5, maxWidth: 960 }}>
            Your team is on the job. Your front office never goes quiet.
          </div>
          <div style={{ color: "#a3a3ad", fontSize: 30 }}>AI reception, booking and follow-up for service businesses</div>
        </div>
        <div style={{ height: 10, width: 160, background: "#CB3A51", borderRadius: 999 }} />
      </div>
    ),
    size,
  );
}
