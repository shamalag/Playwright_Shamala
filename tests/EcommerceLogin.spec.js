const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../PageObjects/LoginPage');
const {POManager} = require('../PageObjects/POManager');

let poManager;
// let productsList;
const productName = 'Zara Coat 4';

test.describe('Ecommerce App', () => {
    //test.describe.configure({ mode: 'serial' });

    test.beforeEach(async ({ page }) => {
        poManager = new POManager(page);
    });

    test.skip('creating browser context and new page', async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await context.close();
    })

    test('Login to ecommerce application', async ({ page }) => {
        const loginPage = poManager.getLoginPage();
        await loginPage.goToLoginPage(process.env.BASEURL);
        console.log(process.env.USERNAME, process.env.PASSWORD);
        await loginPage.validLogin(process.env.USERNAME, process.env.PASSWORD);
    })
    
    test('Add product on cart', async ({ page }) => {
         const loginPage = poManager.getLoginPage();
        await loginPage.goToLoginPage(process.env.BASEURL);
        console.log(process.env.USERNAME, process.env.PASSWORD);
        await loginPage.validLogin(process.env.USERNAME, process.env.PASSWORD);
        const dashboardPage = poManager.getDashboardPage();
        const cartPage = poManager.getCartPage();
        await dashboardPage.searchProductToAddCart(productName);
        await dashboardPage.navigateToCart();
        await cartPage.verifyProductOnCart(productName);
        await cartPage.checkout();

    })
})