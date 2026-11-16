import { guides } from "@/lib/guides";
import { ogCard, ogContentType, ogSize } from "@/lib/og";

export const alt = "INFOTECH guide";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  return ogCard(g?.title ?? "Guides for service businesses", `Guide${g ? `, ${g.minutes} min read` : ""}`);
}
