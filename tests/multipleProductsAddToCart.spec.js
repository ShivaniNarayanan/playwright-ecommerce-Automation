const { test, expect } = require('@playwright/test');

test('Add Multiple Products To Cart', async ({ page }) => {

  const productsToAdd = [
    "iphone 13 pro",
    "zara coat 3"
  ];

  await page.goto(
    "https://rahulshettyacademy.com/client/#/auth/login"
  );

  await page.locator("[placeholder='email@example.com']")
    .fill("shivanimoorthy5@gmail.com");

  await page.locator("[placeholder='enter your passsword']")
    .fill("Learning55$");

  await page.locator("[type='submit']").click();

  await page.locator(".card-body b").first().waitFor();

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

});