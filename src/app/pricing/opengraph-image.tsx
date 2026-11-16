import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Clear plans from $497 a month. Live in 30 days, or your setup fee back.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard("Clear plans from $497 a month. Live in 30 days, or your setup fee back.", "Pricing");
}
