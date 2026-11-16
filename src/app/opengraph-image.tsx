import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "INFOTECH: AI automation for service businesses";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return ogCard("Your team is on the job. Your front office never goes quiet.", "AI automation for service businesses");
}
