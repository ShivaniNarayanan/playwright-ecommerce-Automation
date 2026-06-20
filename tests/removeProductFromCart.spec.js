const { test } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const { CartPage } = require('../pages/CartPage');

test('Remove Product From Cart', async ({ page }) => {

  const productName = "iphone 13 pro";

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();

  await loginPage.login(
    "shivanimoorthy5@gmail.com",
    "Learning55$"
  );

  await dashboardPage.addProductToCart(productName);

  await dashboardPage.goToCart();

  await cartPage.verifyProduct(productName);

  await cartPage.removeProduct();

  await cartPage.verifyProductRemoved(productName);

});