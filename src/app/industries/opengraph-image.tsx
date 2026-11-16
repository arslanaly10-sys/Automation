import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "Different trades, different rules. No missed customers.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard("Different trades, different rules. No missed customers.", "Industries");
}
