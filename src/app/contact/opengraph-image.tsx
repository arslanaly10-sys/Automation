import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "What would you like your team to stop doing by hand?";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard("What would you like your team to stop doing by hand?", "Contact");
}
