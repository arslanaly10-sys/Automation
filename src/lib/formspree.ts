import { site } from "./site";

export type SubmitResult = { ok: true } | { ok: false; error: string };

/** True once a Formspree form ID is configured. */
export const formspreeReady = Boolean(site.formspreeId);

/** Posts form data to Formspree and returns a plain-language result. */
export async function submitToFormspree(data: FormData): Promise<SubmitResult> {
  try {
    const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) return { ok: true };
    const json = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null;
    return { ok: false, error: json?.errors?.map((x) => x.message).join(" ") || "The message didn’t go through." };
  } catch {
    return { ok: false, error: "We couldn’t reach the server. Check your connection." };
  }
}

/** Opens the visitor's email app addressed to us, used while no Formspree ID is set. */
export function openMailto(subject: string, body: string) {
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
