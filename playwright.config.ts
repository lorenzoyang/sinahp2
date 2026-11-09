import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4321",
    viewport: { width: 1440, height: 1000 },
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npx wrangler dev --local --ip 127.0.0.1 --port 4321",
    url: "http://127.0.0.1:4321",
    timeout: 120_000,
    reuseExistingServer: false,
  },
});
