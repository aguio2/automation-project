import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("should login with valid credentials", async ({ page }) => {
    await page.goto("/login");

    await page.getByLabel("Username").fill(process.env.QA_USER_EMAIL!);

    await page.getByLabel("Password").fill(process.env.QA_USER_PASSWORD!);

    await page.getByRole("button", { name: "Login" }).click();

    await page.waitForURL(/practice\.expandtesting\.com\/(secure|logged)/, {
      timeout: 20000,
    });
  });
});
