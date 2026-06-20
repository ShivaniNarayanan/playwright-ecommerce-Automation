const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Product Search Validation', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    "shivanimoorthy5@gmail.com",
    "Learning55$"
  );

  const products =
    page.locator(".card-body b");

  await products.first().waitFor();

  const allProducts =
    await products.allTextContents();

  expect(
    allProducts.some(
      p => p.includes("iphone 13 pro")
    )
  ).toBeTruthy();

});