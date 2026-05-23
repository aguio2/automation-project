import { test, expect } from "@playwright/test";

test("user should login successfully", async ({ page }) => {
  // Abrir login
  await page.goto("https://auth.wp.blossombeta.com/sign-in");

  // Cerrar modal inicial si aparece
  const modalButton = page.getByTestId("BlossomModal-body").locator("button");
  if (await modalButton.count()) {
    await modalButton.click();
  }

  // Username
  const usernameInput = page.getByTestId("usernameInput");
  await expect(usernameInput).toBeVisible({ timeout: 10000 });
  await usernameInput.fill("andregqa");

  // Continuar
  await page.getByTestId("btn-sign-in-username").click();
  await expect(page).toHaveURL(/sign-in-password/, { timeout: 15000 });

  // Password
  const passwordInput = page.getByTestId("passwordInput");
  await expect(passwordInput).toBeVisible({ timeout: 15000 });
  await passwordInput.fill("Secret1234&");

  // Login
  await page.getByTestId("btn-sign-in-password").click();

  // Validar resultado del login: home o código de verificación
  await expect(page).toHaveURL(/(home|email-verification-code)/, { timeout: 20000 });
});
