// Writes full-colour tool logos to public/logos and a manifest to src/lib/tool-logos.json.
// Colour marks come from gilbarbara/logos (CC0) via @iconify-json/logos; where no colour mark exists,
// the Simple Icons mark (CC0) is painted in the brand's own hex. Run: node scripts/build-logos.mjs
import { readFileSync, writeFileSync } from "node:fs";
import * as si from "simple-icons";

const logos = JSON.parse(readFileSync(new URL("../node_modules/@iconify-json/logos/icons.json", import.meta.url)));

// tool name -> source
const map = {
  "Google Calendar": { set: "logos", id: "google-calendar" },
  HubSpot: { set: "logos", id: "hubspot" },
  Salesforce: { set: "logos", id: "salesforce" },
  Pipedrive: { set: "logos", id: "pipedrive" },
  Zoho: { set: "logos", id: "zoho" },
  Twilio: { set: "logos", id: "twilio-icon" },
  "WhatsApp Business": { set: "logos", id: "whatsapp-icon" },
  Stripe: { set: "logos", id: "stripe" },
  Xero: { set: "logos", id: "xero" },
  Slack: { set: "logos", id: "slack-icon" },
  Zapier: { set: "logos", id: "zapier-icon" },
  Calendly: { set: "si", id: "siCalendly" },
  QuickBooks: { set: "si", id: "siQuickbooks" },
  Make: { set: "si", id: "siMake" },
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const manifest = {};

for (const [name, src] of Object.entries(map)) {
  let svg, w, h;
  if (src.set === "logos") {
    const icon = logos.icons[src.id] ?? logos.icons[logos.aliases?.[src.id]?.parent];
    if (!icon) throw new Error(`missing ${src.id}`);
    w = icon.width ?? logos.width ?? 256;
    h = icon.height ?? logos.height ?? 256;
    svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${icon.left ?? 0} ${icon.top ?? 0} ${w} ${h}">${icon.body}</svg>`;
  } else {
    const icon = si[src.id];
    if (!icon) throw new Error(`missing ${src.id}`);
    w = 24; h = 24;
    svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#${icon.hex}" d="${icon.path}"/></svg>`;
  }
  const file = `/logos/${slug(name)}.svg`;
  writeFileSync(new URL(`../public${file}`, import.meta.url), svg);
  manifest[name] = { file, ratio: Math.round((w / h) * 100) / 100, source: src.set === "logos" ? "gilbarbara/logos (CC0)" : "Simple Icons (CC0), brand colour" };
}

writeFileSync(new URL("../src/lib/tool-logos.json", import.meta.url), JSON.stringify(manifest, null, 2) + "\n");
console.log(Object.entries(manifest).map(([n, m]) => `${n.padEnd(18)} ratio ${m.ratio}`).join("\n"));
