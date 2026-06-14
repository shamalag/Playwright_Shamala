import { expect } from '@playwright/test';

class DashboardPage{
    constructor(page){
        this.page = page;
        this.products = this.page.locator('.card-body');
        this.productText = this.page.locator('.card-body b');
        // this.addToCartBtn = this.page.locator('[routerlink="/dashboard/cart"]');
        this.cartBtn = this.page.locator('[routerlink="/dashboard/cart"]');
        this.cartNumber = this .page.locator('[routerlink="/dashboard/cart"] label');
    }

    async searchProductToAddCart(productName){
        await this.page.waitForSelector('.card-body');
        await expect(this.products.first()).toBeVisible();
        const titles = await this.productText.allTextContents();
        const productCount = await this.products.count();
        for(let i=0; i<productCount; i++){
            const productTitle = await this.products.nth(i).locator('b').textContent();
            console.log(productTitle);
            if(productTitle === productName){
                await this.products.nth(i).getByRole('button', {name: 'Add To Cart'}).click();
                await this.page.waitForResponse('https://rahulshettyacademy.com/api/ecom/user/add-to-cart').then(response =>{
                    expect(response.status()).toBe(200);
                });
                await this.page.waitForLoadState('networkidle');
                break;
            }
           
        }
        const cartCountText = await this.cartNumber.textContent();
        const cartCount = parseInt(cartCountText, 10);
        console.log(cartCount);
        expect(cartCount).toBeGreaterThanOrEqual(1, 'Product not added to cart');
    }

    async navigateToCart(){
        await this.cartBtn.click();
        await expect(this.page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/cart');
    }

    async navigateToOrders(){
        await this.orders.click();
    }
}
module.exports = {DashboardPage};