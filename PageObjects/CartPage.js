import { expect } from '@playwright/test';
class CartPage{
    constructor(page){
        this.page = page;
        this.productNamesOnCart = this.page.locator('.cart .cartSection h3');
        this.cartProducts = this.page.locator("div li").first();
        this.checkOutBtn = this.page.getByRole('button', { name: 'Checkout' });
    }

    async verifyProductOnCart(productName){
        await this.cartProducts.waitFor({ timeout: 10000 });
        await expect(this.getProductName(productName)).toBeVisible();
        const text = await this.productNamesOnCart.first().textContent();
        expect(text).toBe(productName);
    }

    getProductName(productName){
        return this.productNamesOnCart.filter({hasText: productName});

    }

    async clickOnCheckout(){
        await this.checkOutBtn.click();
        await this.page.waitForLoadState('networkidle');
    }
}

export { CartPage };