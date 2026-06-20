const { expect } = require('@playwright/test');

class OrdersPage {

  constructor(page) {
    this.page = page;
  }

  async navigateToOrders() {
    await this.page.locator("button[routerlink*='myorders']").click();
    await this.page.locator("tbody").waitFor();
  }

  async verifyOrderPresent(orderId) {

    const rows = this.page.locator("tbody tr");
    let orderFound = false;

    for (let i = 0; i < await rows.count(); i++) {

      const rowOrderId = await rows
        .nth(i)
        .locator("th")
        .textContent();

      if (orderId.includes(rowOrderId.trim())) {
        orderFound = true;
        break;
      }
    }

    expect(orderFound).toBeTruthy();
  }

  async openOrder(orderId) {

    const rows = this.page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); i++) {

      const rowOrderId = await rows
        .nth(i)
        .locator("th")
        .textContent();

      if (orderId.includes(rowOrderId.trim())) {

        await rows
          .nth(i)
          .locator("button")
          .first()
          .click();

        break;
      }
    }
  }

  async verifyOrder(orderId) {

    const orderIdDetails =
      await this.page
        .locator(".col-text")
        .textContent();

    expect(
      orderId.includes(orderIdDetails.trim())
    ).toBeTruthy();
  }
}

module.exports = { OrdersPage };