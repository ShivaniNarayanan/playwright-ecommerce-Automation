const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { OrdersPage } = require('../pages/OrdersPage');
const data = require('../test-data/testData');

test('Order History Validation', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const ordersPage = new OrdersPage(page);

  await loginPage.goto();

  await loginPage.login(
    data.email,
    data.password
  );

  await ordersPage.navigateToOrders();

  const rows = page.locator("tbody tr");

  await expect(rows.first()).toBeVisible();

  const orderCount = await rows.count();

  console.log("Total Orders:", orderCount);

  expect(orderCount).toBeGreaterThan(0);
});