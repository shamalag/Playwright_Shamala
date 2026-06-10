const { test, expect } = require('@playwright/test');

const path = require('path');
const fs = require('fs');

test.describe('File Upload and Download', () => {
    test('should upload a file', async ({ page }) => {    
        // await page.goto('https://the-internet.herokuapp.com/upload');
        await page.goto("https://demoqa.com/upload-download");
        // await page.setInputFiles('#uploadFile', 'C:/Users/shamala.intuit/Desktop/Playwright_Shamala/tests/sampleFile.txt');
        await page.locator('#uploadFile').click();
        await page.locator('input[type="file"]').setInputFiles('uploadItems/test.txt');
        // await page.getByLabel("Select a File").setInputFiles('C:/Users/admin/Desktop/test.txt');
        await page.locator('#uploadedFilePath').textContent().then((text) => {
            console.log(text);
            expect(text).toContain('test.txt');
        });
        // await page.pause()
    })

    test('should download a file', async ({ page }) => {
        // const context= browser.context
         await page.goto("https://demoqa.com/upload-download");

        const [downloadFile] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('#downloadButton').click(),
        ])


        const fileName = downloadFile.suggestedFilename();
        console.log(fileName);

        const downloadDir = path.resolve(process.cwd(), 'downloadfilesssss');
        if(!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir, {recursive: true});
        
        const savePath = path.join(downloadDir, fileName);
        await downloadFile.saveAs(savePath);

        // persist file to your chosen path
        console.log("save file to: ",savePath);
        expect(fs.existsSync(savePath)).toBeTruthy();
    })


    //     const fileName = downloadFile.suggestedFilename();
    //     console.log(fileName);
    //     // let downloadPath = path.join(__dirname, '..', 'downloads', fileName);
    //     // await downloadFile.saveAs(downloadPath);
    //     // expect(fs.existsSync(downloadPath)).toBeTruthy();
    //     // downloadPath = await downloadFile.path();
    //     // console.log(downloadPath);

    //     // await page.pause();

    // const downloadsDir = path.resolve(process.cwd(), 'downloadsssss');
    // if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true });
    // const savePath = path.join(downloadsDir, fileName);

    // // persist file to your chosen path
    // await downloadFile.saveAs(savePath);
    // console.log('saved to', savePath);

    // expect(fs.existsSync(savePath)).toBeTruthy();
    // })
})