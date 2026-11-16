import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const mark = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" fill="none" stroke="#CB3A51"><path d="M21 4 L4 30 L21 56" stroke-width="8"/><path d="M79 4 L96 30 L79 56" stroke-width="8"/><path d="M50 6 L74 30 L50 54 L26 30 Z" stroke-width="4"/><path d="M50 17 L63 30 L50 43 L37 30 Z" stroke-width="4"/></svg>`,
  )}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#000" }}>
        <img src={mark} width={130} height={78} alt="" />
      </div>
    ),
    size,
  );
}
