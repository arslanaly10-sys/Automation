import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "We build the systems that keep service businesses responsive";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard("We build the systems that keep service businesses responsive", "About");
}
