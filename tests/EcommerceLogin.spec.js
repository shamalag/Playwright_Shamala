const {test, expect} = require('../fixtures/test-fixture');
const {LoginPage} = require('../PageObjects/LoginPage');
const {POManager} = require('../PageObjects/POManager');

//const testData = require(`../test_data/appData.${env}.json`);

let poManager;
// let productsList;
const productName = 'ZARA COAT 3';

test.describe('Ecommerce App', () => {
    //test.describe.configure({ mode: 'serial' });

    test.beforeEach(async ({ page }) => {
        poManager = new POManager(page);
    });

    test('creating browser context and new page', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await context.close();
    })

    test('Login to ecommerce application', async ({ page, env }) => {
        const loginPage = poManager.getLoginPage();
        await loginPage.goToLoginPage(env.baseurl);
        console.log(env.username, env.password);
        await loginPage.validLogin(env.username, env.password);
    })
    
    test('Add product on cart', async ({ page, env }) => {
        const loginPage = poManager.getLoginPage();
        await loginPage.goToLoginPage(env.baseurl);
        console.log(env.username, env.password);
        await loginPage.validLogin(env.username, env.password);
        const dashboardPage = poManager.getDashboardPage();
        const cartPage = poManager.getCartPage();
        await dashboardPage.searchProductToAddCart(env.data.Product);
        await dashboardPage.navigateToCart();
        await cartPage.verifyProductOnCart(env.data.Product);
        await cartPage.clickOnCheckout();

    })
})