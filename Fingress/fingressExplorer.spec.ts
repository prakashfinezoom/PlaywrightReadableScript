import {test,expect, chromium} from "@playwright/test";

test.describe('Fingress explorer', () => {
    test.beforeEach('This will launch the components dropdown menu for all the testcases mentioned below',async ({ page }) => {
        test.info().annotations.push(({
            type: 'BeforeTest',
            description: 'This PreTest should navigate to the components dropdown'
        }))
        await page.goto("http://192.168.1.49:8086")
        await page.getByText("view_comfy").click();
        await page.getByText('Fingress Explorer').click();
        await page.getByRole('button', { name: 'Components' }).click();
    });
test('Verify the user can add all the invoice details successfully',async({page})=>{ 

    test.info().annotations.push(({
        type: 'Test',
        description: 'This test should add the invoice details like invoice num, currency and amount'
    }))
    await page.getByText('Data Grids').click();
    await page.getByRole('button',{name: 'Add'}).click();
    await page.getByLabel('Invoice No').fill('123AFASF');
    await page.getByLabel('Currency').fill('asdfasf');
    await page.getByLabel('Amount').fill('12313');
    await page.getByRole('button',{name: 'Add'}).click();
    
});

test('Verify the user can able to delete the invoice added',async({page})=>{ 
    test.info().annotations.push(({
        type: 'Test',
        description: 'In this test user be should add the invoice details like invoice num, currency and amount'
    }))
    await page.getByText('Data Grids').click();
    await page.getByRole('button',{name: 'Add'}).click();
    await page.getByLabel('Invoice No').fill('123AFASF');
    await page.getByLabel('Currency').fill('asdfasf');
    await page.getByLabel('Amount').fill('12313');
    await page.getByRole('button',{name: 'Add'}).click();
    await page.getByText('delete').click();
    await page.getByText('Yes ').click();

});

test('Verify the user can able to update the invoice details successfully',async({page})=>{ 
    test.info().annotations.push(({
        type: 'Test',
        description: 'In this test user should be able to update given the invoice details'
    }))
    await page.getByText('Data Grids').click();
    await page.getByRole('button',{name: 'Add'}).click();
    await page.getByLabel('Invoice No').fill('123AFASF');
    await page.getByLabel('Currency').fill('asdfasf');
    await page.getByLabel('Amount').fill('12313');
    await page.getByRole('button',{name: 'Add'}).click();
    await page.getByText('edit').click();
    await page.getByLabel('Amount').fill('syurkjnsdf');
    await page.getByText('Update').click();
});


});







    // await page.getByText('2', { exact: true }).first().click({button: 'right'});
    // await page.getByText('Last').first().click();
    // await page.getByText('First').first().click();