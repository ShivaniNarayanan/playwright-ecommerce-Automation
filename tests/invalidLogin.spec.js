const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Invalid Login Validation', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    "wronguser@test.com",
    "WrongPassword123"
  );

  await expect(
    page.locator("[class*='flyInOut']")
  ).toContainText(
    "Incorrect email or password"
  );

});