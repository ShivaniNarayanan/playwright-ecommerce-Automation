const { expect } = require('@playwright/test');

class CartPage {

  constructor(page) {
    this.page = page;
    this.deleteButton = page.locator(".fa-trash-o");
  }

  async verifyProduct(productName) {

    await this.page.waitForSelector(".cartSection h3");

    await expect(
      this.page.locator(`h3:has-text("${productName}")`)
    ).toBeVisible();
  }

  async removeProduct() {
    await this.deleteButton.click();
  }

  async verifyProductRemoved(productName) {

    await expect(
      this.page.locator(`h3:has-text("${productName}")`)
    ).toHaveCount(0);
  }

  async checkout() {
    await this.page.locator("text=Checkout").click();
  }

}

module.exports = { CartPage };