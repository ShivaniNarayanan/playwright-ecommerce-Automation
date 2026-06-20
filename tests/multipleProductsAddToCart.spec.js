const productsToAdd = [
  "iphone 13 pro",
  "zara coat 3"
];

for (const product of productsToAdd) {

  const count =
    await page.locator(".card-body").count();

  for (let i = 0; i < count; i++) {

    const text =
      await page.locator(".card-body")
        .nth(i)
        .locator("b")
        .textContent();

    if (text === product) {

      await page.locator(".card-body")
        .nth(i)
        .locator("text=Add To Cart")
        .click();

      break;
    }
  }
}