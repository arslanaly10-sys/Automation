import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Straight answers before you decide";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard("Straight answers before you decide", "Resources");
}
