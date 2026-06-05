const {test,expect} = require('@playwright/test');

test('first playwright test with browser context', async ({ browser }) => {
    const context = await browser.newContext();
    const page  = await context.newPage();
    await page.goto('https://google.com/');
    await context.close();
});

test('first playwright test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const pageHeadingTitle = await page.title();
    console.log(pageHeadingTitle);
   // await page.pause(); //it is to pause the test execution and open the playwright inspector to debug the test
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    await page.locator('#username').screenshot({path: '../elementScreenshots/username.png'});
    await page.locator('#username').fill('rahulshettyacademy--');
    await page.locator('#password').fill('Learning@830$3mK2');
    //await page.locator('#terms').check();
    await page.locator('#signInBtn').click();
    //  page.getAttribute('#signInBtn', 'value').then(function (text) {
    //     console.log(text);
    // });
    // await page.route('**/dashboard', async route => {
    //     const response = await page.request.fetch(route.request());
    //     let body = await response.json();
    //     body.dashboard = 'modified dashboard';
    //     route.fulfill({
    //         response,
    //         body: JSON.stringify(body),
    //     });
    // });
    // await expect(page.locator('.card-body a')).toHaveText('modified dashboard');

    // Promise.all([
    //     context.waitForEvent('page'),
    //     link.click(),
    // ])
    
const text = await page.textContent("[style*='block']");
console.log(text);
expect(text).toContain('Incorrect username/password');
expect(text).toBeTruthy();

});

test.only('dotenv login credentials test', async ({ page }) => {
    await page.goto(process.env.BASEURL);
    await page.getByPlaceholder('email@example.com').fill(process.env.USERNAME); 
    await page.getByPlaceholder('enter your passsword').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    // await page.pause();
})