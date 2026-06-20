class DashboardPage {

  constructor(page) {
    this.page = page;
    this.cards = page.locator(".card-body");
  }

  async addProductToCart(productName) {

    await this.page.locator(".card-body b").first().waitFor();

    const count = await this.cards.count();

    for (let i = 0; i < count; i++) {

      const product =
        await this.cards.nth(i)
          .locator("b")
          .textContent();

      if (product === productName) {

        await this.cards.nth(i)
          .locator("text=Add To Cart")
          .click();

        break;
      }
    }
  }

  async goToCart() {
    await this.page.locator("[routerlink*='cart']").click();
  }
}

module.exports = { DashboardPage };