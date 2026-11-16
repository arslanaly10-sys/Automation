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

test("audit request form sends, then shows next steps", async ({ page }) => {
  await page.route("https://formspree.io/**", (r) => r.fulfill({ status: 200, contentType: "application/json", body: "{}" }));
  await page.goto("/contact?plan=Growth");
  await expect(page.getByText("You’re asking about the Growth plan.")).toBeVisible();
  await page.getByText("Missed calls", { exact: true }).click();
  await page.fill("input[name=name]", "Test");
  await page.fill("input[name=email]", "test@example.com");
  await page.click("form button[type=submit]");
  // With a Formspree ID the visitor lands on /thanks; without one, their email app opens instead.
  await expect(async () => {
    const onThanks = page.url().includes("/thanks");
    const fallback = await page.getByText(/email app should have opened/i).count();
    expect(onThanks || fallback > 0).toBe(true);
  }).toPass({ timeout: 5000 });
});

test("calculator carries the visitor's figure into the audit request", async ({ page }) => {
  await page.goto("/");
  const cta = page.locator("a", { hasText: /Get a free audit to recover/ });
  await cta.scrollIntoViewIfNeeded();
  const label = (await cta.textContent()) ?? "";
  const figure = label.match(/\$[\d,]+/)?.[0];
  await cta.click();
  await page.waitForURL(/\/contact\?/);
  await expect(page.getByText(`${figure} a month`)).toBeVisible();
});

test("phones always have a way to book", async ({ page, isMobile }) => {
  test.skip(!isMobile, "phone-only behaviour");
  await page.goto("/");
  await expect(page.locator("header a[data-cta=audit]:visible")).toHaveCount(1);
  await page.evaluate(() => window.scrollTo(0, window.innerHeight * 2));
  await expect(page.locator("[data-mobile-audit-bar] a[data-cta=audit]")).toBeInViewport();
});

test("moving from the homepage to other pages keeps them working", async ({ page, isMobile }) => {
  test.skip(isMobile, "pinned scroll sections only run on desktop");
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const label of ["Pricing", "Services", "Resources"]) {
    await page.goto("/");
    // Scroll through the pinned sections first so their scroll effects are active.
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight / 2));
    await page.waitForTimeout(300);
    await page.locator("header nav[aria-label=Main] a", { hasText: label }).click();
    await page.waitForURL(`**/${label.toLowerCase()}`);
    await expect(page.locator("h1")).toHaveCount(1);
  }
  await page.goto("/");
  await page.locator("a", { hasText: /Get a free audit to recover/ }).click();
  await page.waitForURL(/\/contact\?/);
  await expect(page.locator("form")).toHaveCount(1);
  expect(errors).toEqual([]);
});
