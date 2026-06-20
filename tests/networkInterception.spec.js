const { test, expect } = require('@playwright/test');

test('Validate Login API Response', async ({ page }) => {

  await page.goto(
    'https://rahulshettyacademy.com/client/#/auth/login'
  );

  const loginResponse = page.waitForResponse(
    response => response.url().includes('/auth/login')
  );

  await page.locator("[placeholder='email@example.com']")
    .fill('shivanimoorthy5@gmail.com');

  await page.locator("[placeholder='enter your passsword']")
    .fill('Learning55$');

  await page.locator("[type='submit']").click();

  const response = await loginResponse;

  expect(response.status()).toBe(200);
});