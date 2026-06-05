const {test, expect} = require('@playwright/test');
class CartPage{
    constructor(page){
        this.page = page;
        this.productNamesOnCart = this.page.locator('.cart .cartSection h3');
        this.cartProducts = this.page.locator("div li").first();
        this.checkOutBtn = this.page.locator('[routerlink="/dashboard/cart"]');
    }

    async verifyProductOnCart(productName){
        await this.cartProducts.waitFor();
        await expect(this.getProductName(productName).isVisible()).toBeTruthy();
        await this.productNamesOnCart.first().textContent().then(text=>{
            expect(text).toBe(productName);
        })
    }

    getProductName(productName){
        return this.productNamesOnCart.filter({hasText: productName});

    }

    async clickOnCheckout(){
        await this.checkOutBtn.click();
        await this.page.waitForNavigation();
    }
}
module.exports = {CartPage};