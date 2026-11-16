import { faqs, plans, services } from "@/lib/content";
import { companyReady, site, trust } from "@/lib/site";

/** Renders schema.org structured data. Content is our own static data, never user input. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.siteUrl}/#org`,
      name: site.name,
      url: site.siteUrl,
      logo: `${site.siteUrl}/brand/infotech-wordmark.svg`,
      email: site.email,
      description: site.description,
      areaServed: "Worldwide",
      ...(companyReady ? { legalName: trust.company.legalName, address: { "@type": "PostalAddress", streetAddress: trust.company.address, addressCountry: trust.company.country } } : {}),
    },
    { "@type": "WebSite", "@id": `${site.siteUrl}/#site`, url: site.siteUrl, name: site.name, publisher: { "@id": `${site.siteUrl}/#org` } },
  ],
};

export function faqLd(items: { q: string; a: string }[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export const servicesLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.short,
      url: `${site.siteUrl}/services/${s.slug}`,
      provider: { "@id": `${site.siteUrl}/#org` },
      areaServed: "Worldwide",
    },
  })),
};

export const pricingLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${site.name} automation plans`,
  provider: { "@id": `${site.siteUrl}/#org` },
  offers: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    description: p.for,
    priceSpecification: { "@type": "UnitPriceSpecification", price: p.price, priceCurrency: "USD", unitText: "MONTH", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
  })),
};
