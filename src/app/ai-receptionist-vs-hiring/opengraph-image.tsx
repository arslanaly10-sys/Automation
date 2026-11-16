import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "AI receptionist, answering service or a new hire?";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard("AI receptionist, answering service or a new hire?", "Comparison");
}
