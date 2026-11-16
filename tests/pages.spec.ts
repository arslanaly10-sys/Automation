import { expect, test } from "@playwright/test";

// Every page listed in the sitemap must load, render one h1, log no errors and fit the screen.
test("every sitemap page loads cleanly", async ({ page, baseURL }) => {
  // Fetched through the browser so it follows the same network path as the pages.
  const xml = (await (await page.goto("/sitemap.xml"))?.text()) ?? "";
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  expect(paths.length).toBeGreaterThan(20);

  for (const path of paths) {
    const errors: string[] = [];
    const onError = (e: Error) => errors.push(e.message);
    // Console errors other than failed loads, which are checked by URL below.
    const onConsole = (m: { type(): string; text(): string }) => {
      if (m.type() === "error" && !m.text().startsWith("Failed to load resource")) errors.push(m.text());
    };
    // Any failed request, except Vercel's analytics scripts, which only exist on Vercel.
    const onResponse = (r: { status(): number; url(): string }) => {
      if (r.status() >= 400 && !/\/_vercel\//.test(r.url())) errors.push(`${r.status()} ${r.url()}`);
    };
    page.on("pageerror", onError);
    page.on("console", onConsole);
    page.on("response", onResponse);

    const res = await page.goto(new URL(path, baseURL).toString(), { waitUntil: "networkidle" });
    expect(res?.status(), `${path} status`).toBe(200);
    await expect(page.locator("h1"), `${path} has one h1`).toHaveCount(1);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, `${path} horizontal overflow`).toBeLessThanOrEqual(0);
    expect(errors, `${path} errors`).toEqual([]);

    page.off("pageerror", onError);
    page.off("console", onConsole);
    page.off("response", onResponse);
  }
});

test("unknown pages return 404", async ({ page }) => {
  const res = await page.goto("/this-page-does-not-exist");
  expect(res?.status()).toBe(404);
});

test("forms send to Formspree when an ID is set, or fall back to email", async ({ page }) => {
  await page.route("https://formspree.io/**", (r) => r.fulfill({ status: 200, contentType: "application/json", body: "{}" }));
  await page.goto("/contact");
  await page.fill("input[name=name]", "Test");
  await page.fill("input[name=email]", "test@example.com");
  await page.fill("textarea[name=message]", "Smoke test");
  await page.click("form button[type=submit]");
  await expect(page.getByRole("status").first()).toContainText(/got it|email app/i);
});
