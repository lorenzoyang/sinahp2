import { expect, test } from "@playwright/test";

const locales = [
  { prefix: "", label: "Demo storica", result: "Simulazione completata" },
  { prefix: "/zh", label: "历史演示", result: "演示已完成" },
  { prefix: "/en", label: "Archived demo", result: "Demo complete" },
  { prefix: "/es", label: "Demo histórica", result: "Demo completada" },
  { prefix: "/fr", label: "Démo historique", result: "Démo terminée" },
];
const forbiddenService = /api\.web3forms|web3forms\.com\/client|hcaptcha\.com|googletagmanager|googleadservices|doubleclick/i;

for (const locale of locales) {
  test(`${locale.label}: local simulation sends no form data`, async ({ page, context }) => {
    const requests: { url: string; method: string; body: string | null }[] = [];
    page.on("request", (request) => requests.push({
      url: request.url(), method: request.method(), body: request.postData(),
    }));
    await page.goto(`${locale.prefix}/reservation/`);
    const form = page.locator("[data-reservation-form]");
    const button = form.getByRole("button");
    await expect(button).toBeEnabled();
    await expect(page.locator("[data-archive-notice]")).toContainText(locale.label);

    // Required inputs still prevent advancing to the result route.
    await button.click();
    await expect(page).toHaveURL(new RegExp(`${locale.prefix}/reservation/$`));
    await expect(form.locator("input:invalid").first()).toBeVisible();

    await form.getByRole("textbox").nth(0).fill("DEMO_ONLY_SENTINEL");
    await form.getByRole("textbox").nth(1).fill("+39 000 000 0000");
    await form.getByRole("spinbutton").fill("2");
    await form.locator("[data-reservation-location]").selectOption({ index: 1 });
    await form.locator("[data-reservation-time]").selectOption("18:30");
    await form.locator('input[type="date"]').fill("2099-01-01");
    await form.getByRole("checkbox").check();
    await button.click();

    await expect(page).toHaveURL(new RegExp(`${locale.prefix}/reservation-success/$`));
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(locale.result);
    expect(new URL(page.url()).search).toBe("");
    expect(requests.every((request) => request.method === "GET")).toBe(true);
    expect(requests.some((request) => forbiddenService.test(request.url))).toBe(false);
    expect(JSON.stringify(requests)).not.toContain("DEMO_ONLY_SENTINEL");
    expect(await context.cookies()).toEqual([]);
    expect(await page.evaluate(() => ({ local: localStorage.length, session: sessionStorage.length })))
      .toEqual({ local: 0, session: 0 });

    await page.goBack();
    await expect(page.locator("[data-reservation-form]").getByRole("textbox").nth(0)).toHaveValue("");
  });
}

test("time slots follow the selected location and elapsed times require a future date", async ({ page }) => {
  await page.clock.install({ time: new Date("2026-11-09T20:00:00") });
  await page.goto("/en/reservation/");
  const location = page.locator("[data-reservation-location]");
  const time = page.locator("[data-reservation-time]");
  const date = page.locator('input[type="date"]');
  await expect(location).toBeEnabled();
  await location.selectOption({ index: 1 });
  await expect(time.locator('option[value="00:00"]')).toHaveCount(1);
  await time.selectOption("18:30");
  await expect(date).toHaveAttribute("min", "2026-11-10");
  await date.fill("2026-11-10");
  await time.selectOption("21:00");
  await expect(date).toHaveAttribute("min", "2026-11-09");
  await location.selectOption({ index: 2 });
  await expect(time).toHaveValue("");
  await expect(time.locator('option[value="12:00"]')).toHaveCount(1);
  await expect(time.locator('option[value="00:00"]')).toHaveCount(0);
  await time.selectOption("12:00");
  await expect(date).toHaveAttribute("min", "2026-11-10");
});

test("without JavaScript the form stays disabled and cannot submit", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  const response = await page.goto("/en/reservation/");
  await expect(page.locator("[data-reservation-form]").getByRole("textbox").first()).toBeDisabled();
  await expect(page.locator("[data-reservation-form]").getByRole("button")).toBeDisabled();
  await expect(page.locator("noscript p")).toBeVisible();
  await expect(page.locator("noscript p")).toContainText("JavaScript");
  await expect(page.locator("[data-reservation-form] [name]")).toHaveCount(0);
  expect(response?.headers()["x-robots-tag"]).toBe("noindex, follow");
  await context.close();
});

test("a failed client script leaves the simulation disabled", async ({ page }) => {
  await page.route("**/_astro/*.js", (route) => route.abort());
  await page.goto("/en/reservation/");
  await expect(page.locator("[data-reservation-form]").getByRole("textbox").first()).toBeDisabled();
  await expect(page.locator("[data-reservation-form]").getByRole("button")).toBeDisabled();
});

for (const width of [320, 390, 1440]) {
  test(`layout, navigation and gallery at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/en/");
    await expect(page.locator("[data-archive-notice]")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page).toHaveTitle(/Archived demo/);
    const notice = page.locator("[data-archive-notice]");
    await expect(notice.getByRole("link", { name: /Current official website/ })).toHaveAttribute("href", "https://sinahp.com/");
    await expect(notice.getByRole("link", { name: /Source code/ })).toHaveAttribute("href", "https://github.com/lorenzoyang/sinahp2");

    if (width < 1024) {
      await page.locator('summary[aria-label="Menu"]').click();
      await page.getByRole("navigation", { name: "Mobile navigation" })
        .getByRole("link", { name: "Reservation demo", exact: true }).click();
    } else {
      await page.getByRole("navigation", { name: "Primary navigation" })
        .getByRole("link", { name: "Reservation demo", exact: true }).click();
    }
    await expect(page).toHaveURL(/\/en\/reservation\/$/);
    await page.locator('summary[aria-label="Choose language"]').click();
    await page.getByRole("navigation", { name: "Choose language" })
      .getByRole("link", { name: "中文", exact: true }).click();
    await expect(page).toHaveURL(/\/zh\/reservation\/$/);
    await expect(page.locator("[data-archive-notice]")).toContainText("历史演示");

    await page.goto("/en/locations/");
    await expect(page.locator('a[href^="tel:"], a[href^="mailto:"], a[href*="wa.me"]')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto("/en/gallery/");
    await expect(page.locator("[data-gallery-video-player]")).toBeVisible();
    await page.locator("[data-gallery-video-toggle]").click();
    await expect(page.locator("[data-gallery-video]")).toHaveAttribute("data-playing", "true");
    await page.locator("[data-gallery-video-toggle]").click();
    await expect(page.locator("[data-gallery-video]")).toHaveAttribute("data-playing", "false");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/gallery-${width}.png`, fullPage: false });

    await page.goto("/en/reservation/");
    await expect(page.locator("[data-reservation-form]").getByRole("button")).toBeEnabled();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.screenshot({ path: `test-results/reservation-${width}.png`, fullPage: true });
  });
}
