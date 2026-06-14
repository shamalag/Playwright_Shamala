const {test, expect} = require('../fixtures/test-fixture');

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
    
    const text = await page.textContent("[style*='block']");
    console.log(text);
    expect(text).toContain('Incorrect username/password');
    expect(text).toBeTruthy();
});

test('dotenv login credentials test', async ({ page, env }) => {
    await page.goto(env.baseurl);
    await page.getByPlaceholder('email@example.com').fill(env.username); 
    await page.getByPlaceholder('enter your passsword').fill(env.password);
    await page.getByRole('button', { name: 'Login' }).click();
    // await page.pause();
})