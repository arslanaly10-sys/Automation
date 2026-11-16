import Link from "next/link";
import { PageHero } from "@/components/sections";

export default function NotFound() {
  return (
    <PageHero title="That page doesn’t exist." intro="The link may be old, or the address may have a typo.">
      <Link href="/" className="btn btn-primary">Go to the homepage</Link>
    </PageHero>
  );
}
