const { test, expect } = require('@playwright/test');

test('Validate Login API Response', async ({ page }) => {

  await page.goto(
    'https://rahulshettyacademy.com/client/#/auth/login'
  );

  const loginResponse = page.waitForResponse(
    response => response.url().includes('/auth/login')
  );

  await page.locator("[placeholder='email@example.com']")
    .fill('shivanimoorthy5@gmail.com');

  await page.locator("[placeholder='enter your passsword']")
    .fill('Learning55$');

  await page.locator("[type='submit']").click();

  const response = await loginResponse;

  expect(response.status()).toBe(200);
});

// tests/networkInterception.spec.js
const { test, expect } = require('@playwright/test');

/**
 * SCENARIO 2: Mocking an Empty Orders Response
 * This test intercepts the real API call and returns a custom fake response (Empty Data).
 */
test('Mock Empty Orders Screen via Network Interception', async ({ page }) => {
  // Intercept the orders API and force it to return an empty array
  await page.route('**/api/ecom/order/get-orders/**', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data: [], message: "No orders found" }) 
    });
  });

  // Navigate directly to the orders page
  await page.goto('https://rahulshettyacademy.com');
  
  // Verify if the UI handles the mocked empty state correctly
  const emptyMessage = page.locator('.mt-4'); 
  await expect(emptyMessage).toContainText('You have no order history');
});

/**
 * SCENARIO 3: Simulating a 500 Internal Server Error
 * This test simulates a backend crash when the user attempts to place an order.
 */
test('Simulate 500 Server Error on Checkout Page', async ({ page }) => {
  // Intercept the create-order API and simulate a server failure
  await page.route('**/api/ecom/order/create-order', route => route.fulfill({
    status: 500,
    contentType: 'application/json',
    body: JSON.stringify({ error: 'Internal Server Error' })
  }));

  // Navigate to the cart page to test error handling
  await page.goto('https://rahulshettyacademy.com');
  
  // Optional: Trigger checkout action to verify error handling UI components
  // await page.click('text=Checkout');
});

/**
 * SCENARIO 4: Aborting Images to Optimize Performance
 * This test blocks all image extensions from loading to drastically reduce test runtime.
 */
test('Speed up testing by aborting all image requests', async ({ page }) => {
  // Abort every network request that asks for an image
  await page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort()); 

  // Navigate to the main application page
  await page.goto('https://rahulshettyacademy.com');
  
  console.log("Page loaded successfully without any images!");
});
