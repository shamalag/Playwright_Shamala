import {test, expect, request} from '@playwright/test';
// const {test,expect} = require('@playwright/test');
const modifiedAPIdata = {data:[], message: "No Product in Cart"};
const apiPayload = {userEmail: "shamala.intuit@gmail.com", userPassword: "Omsai@123"};
let token;

test.describe('API Intercepting', () => {

  test.beforeAll(async () => {
    // await page.goto('https://rahulshettyacademy.com/client/');

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
      {
        data:apiPayload
      }
    )//200, 201
    expect((await loginResponse).ok()).toBeTruthy();  
    const loginResponseJson = await loginResponse.json();
    // console.log(loginResponseJson.token);
    token = loginResponseJson.token;
    console.log(token);
  })

  test('Login using token set the local storage', async ({page}) => {
      await page.addInitScript(value =>{
        window.localStorage.setItem('token', value);
      }, token)
      await page.goto('https://rahulshettyacademy.com/client/');
      // await pag.pause()
      // await expect(page.title()).toBe('Let\'s Shop');
     await expect(page.locator('[routerlink="/dashboard/myorders"]')).toBeVisible();
  })

  test('should intercept and modify API response', async ({page}) => {
    // const apiContext = await request.newContext();
      await page.addInitScript(value =>{
        window.localStorage.setItem('token', value);
      }, token)
    // Intercept the API request and modify the response
    await page.goto('https://rahulshettyacademy.com/client/');
    // await page.getByPlaceholder('email@example.com').fill('shamala.intuit@gmail.com'); 
    // await page.getByPlaceholder('enter your passsword').fill('Omsai@123');
    // await page.getByRole('button', { name: 'Login' }).click();
    
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a11cace17ee3e78ba94e043',
      async route =>{
        let response = await page.request.fetch(route.request());
        let body =  JSON.stringify(modifiedAPIdata);
        route.fulfill({response, body});
      }
    );
    await page.getByRole('button', {name:'ORDERS'}).click();
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6a11cace17ee3e78ba94e043')
    // await page.pause();
    await page.locator('.mt-4').textContent().then((text) => {      
      console.log(text);
      expect(text).toContain(' You have No Orders to show at this time.');
    });
  })
})