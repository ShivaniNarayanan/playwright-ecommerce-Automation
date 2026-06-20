const { expect } = require('@playwright/test');

class CheckoutPage {

  constructor(page) {
    this.page = page;
  }

  async selectCountry(country) {

    await this.page
      .locator("[placeholder='Select Country']")
      .pressSequentially("ind", { delay: 150 });

    const dropdown =
      this.page.locator(".ta-results");

    await dropdown.waitFor();

    const count =
      await dropdown.locator("button").count();

    for (let i = 0; i < count; i++) {

      const text =
        await dropdown.locator("button")
          .nth(i)
          .textContent();

      if (text.trim() === country) {

        await dropdown.locator("button")
          .nth(i)
          .click();

        break;
      }
    }
  }

  async placeOrder() {

    await this.page
      .locator(".action__submit")
      .click();

    await expect(
      this.page.locator(".hero-primary")
    ).toHaveText("Thankyou for the order.");
  }

  async getOrderId() {

    return await this.page
      .locator("label.ng-star-inserted")
      .textContent();
  }
}

module.exports = { CheckoutPage };