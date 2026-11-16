import { defineConfig, devices } from "@playwright/test";

// Smoke tests for every page in the sitemap. Runs against a production build.
// Locally: npm run build && npm test. Against the live site: BASE_URL=https://... npm test
const external = Boolean(process.env.BASE_URL);

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  use: { baseURL: process.env.BASE_URL ?? "http://localhost:3100", trace: "off" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: external ? undefined : { command: "npx next start -p 3100", url: "http://localhost:3100", reuseExistingServer: !process.env.CI, timeout: 60_000 },
});
