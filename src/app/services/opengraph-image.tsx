import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Automation for the work between hello and job done";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard("Automation for the work between hello and job done", "Services");
}
