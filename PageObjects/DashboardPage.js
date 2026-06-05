class DashboardPage{
    constructor(page){
        this.page = page;
        this.products = this.page.locator('.card-body');
        this.productText = this.page.locator('.card-body b');
        this.addToCartBtn = this.page.locator('routerlink="/dashboard/cart"');
        this.cartBtn = this.page.getByRole('button', {name: 'Cart'});
    }

    async searchProductToAddCart(productName){
        const titles = this.productText.allTextContents();
        for(let i=0; i<titles.length;i++){
            // if(await this.products.nth(i).locator('b').textContent()===productName){
            if(this.products.nth(i).locator('b').textContent===productName){
                await this.products.nth(i).getByRole('button', {name: 'Add To Cart'}).click();
                break;
            }
        }
    }

    async navigateToCart(){
        await this.cartBtn.click();
    }

    async navigateToOrders(){
        await this.orders.click();
    }
}
module.exports = {DashboardPage};