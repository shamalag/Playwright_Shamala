const {test,expect} = require('@playwright/test');
test('first playwright test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/search?q=iphone%2017&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off');
    const iphoneLocator = await page.locator('.k7wcnx').filter({hasLocator: page.locator('.o2uEoz')});
    const iphoneCount = await iphoneLocator.count();
    console.log(iphoneCount);
    // await iphoneLocator.nth(0).textContent().screenshot({path: 'iphone1.png'});
    // await iphoneLocator.nth(1).textContent().screenshot({path: 'iphone2.png'});                             
    console.log(await iphoneLocator.nth(0).textContent());
    console.log(await iphoneLocator.nth(1).textContent());
    console.log(iphoneLocator)
    await page.waitForLoadState('networkidle');
    await page.locator('.k7wcnx').filter({has: page.locator('.o2uEoz')}).filter({hasText: 'Apple iPhone 17 (Black, 256 GB)'}).click();
    // //div[@class='o2uEoz i7J1SB']/ancestor::a
    await page.waitForLoadState('networkidle');
    
    // await page.pause();
})

test('getting the ipnone name anf prices', async ({ page }) => {
    await page.goto('https://www.flipkart.com/search?q=iphone%2017&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off');
    const iphoneToSelect = "Apple iPhone 17 (Black, 256 GB)"

    const products = await page.locator('.k7wcnx');
    const count = await products.count()
    
    for(let i=0; i<count; i++){
        if(await products.nth(i).locator('.RG5Slk').textContent() === iphoneToSelect){
            const price = await products.nth(i).locator('.hZ3P6w.DeU9vF').textContent();
            console.log(price);
            break;
        }
    }
})