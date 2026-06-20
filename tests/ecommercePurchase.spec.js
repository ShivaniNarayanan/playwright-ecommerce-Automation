const { test } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
console.log(LoginPage);
const { DashboardPage } = require('../pages/DashboardPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OrdersPage } = require('../pages/OrdersPage');

const data = require('../test-data/testData');
const { only } = require('node:test');


test('Complete E-Commerce Purchase Flow',
  async ({ page }) => {

    const loginPage =
      new LoginPage(page);

    const dashboardPage =
      new DashboardPage(page);

    const cartPage =
      new CartPage(page);

    const checkoutPage =
      new CheckoutPage(page);

    const ordersPage =
      new OrdersPage(page);

    await loginPage.goto();

    await loginPage.login(
      data.email,
      data.password
    );

    await dashboardPage.addProductToCart(
      data.productName
    );

    await dashboardPage.goToCart();

    await cartPage.verifyProduct(
      data.productName
    );

    await cartPage.checkout();

    await checkoutPage.selectCountry(
      "India"
    );

    await checkoutPage.placeOrder();

    const orderId =
      await checkoutPage.getOrderId();

    console.log("Order Id :", orderId);

    await ordersPage.navigateToOrders();

    await ordersPage.openOrder(orderId);

    await ordersPage.verifyOrder(orderId);
  });