import { test, expect, chromium } from "@playwright/test";

test.describe('Fingress explorer', () => {
    test.beforeEach('This will launch the components dropdown menu for all the testcases mentioned below', async ({ page }) => {
        test.info().annotations.push(({
            type: 'BeforeTest',
            description: 'This PreTest should navigate to the components dropdown'
        }))
        await test.step('User passes the fingress URL', async () => {
            await page.goto("http://192.168.1.49:8086")
        });
        await test.step('User clicks on the view comfy icon', async () => {
            await page.getByText("view_comfy").click();
        });
        await test.step('User clicks on the Fingress Explorer icon', async () => {
            await page.getByText('Fingress Explorer').click();
        });
        await test.step('User clicks on the Components dropdown', async () => {
            await page.getByRole('button', { name: 'Components' }).click();
        });
        await test.step('User clicks to Data grid option', async () => {
            await page.getByText('Data Grids').click();
        });
    });
    test('Verify the user can add all the invoice details successfully', async ({ page }) => {

        test.info().annotations.push(({
            type: 'Test',
            description: 'This test should add the invoice details such as invoice num, currency and amount in data grid page'
        }))
        
        await test.step('User clicks on the add button', async () => {
            await page.getByRole('button', { name: 'Add' }).click();
        });
        await test.step('User enters the valid invoice number', async () => {
            await page.getByLabel('Invoice No').fill('123AFASF');
        });
        await test.step('User enters the currency linked with the invoice', async () => {
            await page.getByLabel('Currency').fill('asdfasf');
        });
        await test.step('User enters the amount linked with the invoice', async () => {
            await page.getByLabel('Amount').fill('12313');
        });
        await test.step('User clicks on the add button to add the invoice to the grid', async () => {
            await page.getByRole('button', { name: 'Add' }).click();
        });
    });

    test('Verify the user can able to delete the invoice added', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user should be able to delete the existing invoice details in data grid page'
        }))
        await test.step('User clicks on the "add" button', async () => {
            await page.getByRole('button', { name: 'Add' }).click();
        });
        await test.step('User enters the valid "invoice number"', async () => {
            await page.getByLabel('Invoice No').fill('ASFQ@$');
        });
        await test.step('User enters the "currency" linked with the invoice', async () => {
            await page.getByLabel('Currency').fill('SVD124');
        });
        await test.step('User enters the "amount" linked with the invoice', async () => {
            await page.getByLabel('Amount').fill('123133');
        });
        await test.step('User clicks on the "add button" to add the invoice to the grid', async () => {
            await page.getByRole('button', { name: 'Add' }).click();
        });
        await test.step('User clicks on the "delete icon" to delete the existing invoice and confirms by clicking "yes" button', async () => {
            await page.getByText('delete').click();
            await page.getByText('Yes ').click();
        })

    });

    test('Verify the user can able to update the invoice details successfully', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user should be able to update the existing invoice details in data grid page'
        }))
        await test.step('User clicks on the "add" button', async () => {
            await page.getByRole('button', { name: 'Add' }).click();
        });
        await test.step('User enters the valid "invoice number"', async () => {
            await page.getByLabel('Invoice No').fill('ASFQ@$');
        });
        await test.step('User enters the "currency" linked with the invoice', async () => {
            await page.getByLabel('Currency').fill('SVD124');
        });
        await test.step('User enters the "amount" linked with the invoice', async () => {
            await page.getByLabel('Amount').fill('123133');
        });
        await test.step('User clicks on the "add button" to add the invoice to the grid', async () => {
            await page.getByRole('button', { name: 'Add' }).click();
        });
        await test.step('User clicks on the edit icon to update the existing invoice', async () => {
            await page.getByText('edit').click();
        })
        await test.step('User updates the amount text field and clicks on the update butoon', async () => {
            await page.getByLabel('Amount').fill('syurkjnsdf');
            await page.getByText('Update').click();
        })

    });

    test('Verify the paginations should work properly', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user should be able to navigate to the desired pages in data grid page'
        }))
        await test.step('User clicks on the page 2 to navigate to the page 2 of data grid',async()=>{
            await page.getByText('2').nth(0).click();
        })
        await test.step('User clicks on the last button to navigate to the last page of data grid',async()=>{
            await page.getByText('Last').nth(0).click();
        })
        await test.step('User clicks on the first button to navigate to the last page of data grid',async()=>{
            await page.getByText('First').nth(0).click();
        })
    })

    

});