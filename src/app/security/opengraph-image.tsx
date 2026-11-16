import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Your data stays yours";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard("Your data stays yours", "Security and data");
}
