const{test, expect} = require('@playwright/test');

test('click on google driver from 6 dot option btn', async ({page}) => {
    
    await page.goto('https://google.com/');
    await page.locator('[aria-label="Google apps"]').click();
    const frameApp = await page.frameLocator('[name="app"]');
    await frameApp.locator('li .Rq5Gcb').getByText('Drive').click();
    await page.waitForLoadState('networkidle');
    const pageTitle = await page.title();
    console.log(pageTitle);
    // expect(pageTitle).toHaveText('Google Drive');
    await expect(page).toHaveTitle('Google Drive: Share Files Online with Secure Cloud Storage | Google Workspace');
    await page.pause();
})