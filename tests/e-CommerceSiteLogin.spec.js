const { test, expect } = require('@playwright/test');

test('login page test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  const productName = "iphone 13 pro";
  const useremail = page.locator("[placeholder ='email@example.com']");
  const password = page.locator("[placeholder='enter your passsword']");
  const loginbtn = page.locator("[type='submit']");
  const cards = page.locator(".card-body");
  await useremail.fill('shivanimoorthy5@gmail.com');
  await password.fill('Learning55$')

  await loginbtn.click();
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const Count = await cards.count();

  console.log("product count:", Count);

  for (let i = 0; i < Count; ++i) {
    console.log("Loop running index:", i);
    const text = await cards.nth(i).locator("b").textContent();
    console.log("Product:", text);
    if (text === productName) {
      console.log("Match found");
      await cards.nth(i).locator("text=Add To Cart").click();
      break;
    }
  }

  await page.locator("[routerlink*='cart']").click();
  //await page.locator(".cartSection h3").first().waitFor();
  await page.waitForSelector(".cartSection h3");
  const checkoutOption = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
  expect(checkoutOption).toBeTruthy();
  await page.locator("text=Checkout").click();

  //form for credit card
  //dynamic drop down
  await page.locator("[placeholder='Select Country']").pressSequentially("ind", { delay: 150 });
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionCount = await dropdown.locator("button").count();
  console.log(optionCount);
  for (let i = 0; i < optionCount; ++i) {
    const text = await dropdown.locator("button").nth(i).textContent();
    await console.log(text);
    if (text === ' India') {
      await dropdown.locator("button").nth(i).click();
      break;

    }
  }
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
  const orderId = await page.locator("label.ng-star-inserted").textContent();
  console.log("Your OrderID is", orderId);
  await page.locator("button[routerlink*=myorders]").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < await rows.count(); ++i) {
    const roworderId = await rows.nth(i).locator("th").textContent();
    if (orderId.includes(roworderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();


});