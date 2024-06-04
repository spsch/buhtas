import { test, expect } from '@playwright/test';

test('Very basic Check of PW installation and baseUrl configuration', async ({ page }) => {
  await page.goto('/');

  // Expect a title "Swag Labs" as a page title.
  await expect(page).toHaveTitle("Swag Labs");
});

test('Very basic check of PW locators', async ({ page }) => {
  await page.goto('/');

  // Expect the login button to be visible.
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  // Expect the login button to be enabled.
  await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
});
