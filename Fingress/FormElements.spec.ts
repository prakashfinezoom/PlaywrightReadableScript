import { test, expect, chromium } from "@playwright/test";

test.describe('Fingress explorer', () => {

    test.beforeEach('This will launch the Form Elements from the components dropdown', async ({ page }) => {
        test.info().annotations.push(({
            type: 'BeforeTest',
            description: 'This PreTest should navigate to the form elements of components menu'
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
        await test.step('User clicks to form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
    });

    test('Verify the name must allow only maximum of 50 characters', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user should enter the name within 50 characters'
        }))
        await test.step('User tries to fills the name with more than 50 characters', async () => {
            await page.getByText('Name').fill('ASFDSGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafgs');
            const value=await page.getByText('Name').inputValue();
            const count=value.length;
            expect(count,'Maximum characters for the name field should be 50').toBeLessThanOrEqual(50)
        })
    })
    
    test('Verify the name must allow minimum of 3 characters', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user enters the invalid name with less than 3 characters'
        }))
        await test.step('User tries to fills the name with less than 3 characters', async () => {
            await page.getByText('Name').fill('ss');
            await page.getByText('Password').click();
            await expect(page.getByText('Name must be 3 characters '),'Minimum characters for the name field is 3').toHaveText('Name must be 3 characters ');
        })
    })

    test('Verify the email must contains "@" special character for valid email ID', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user enters the invalid EMail ID without @ symbol '
        }))
        await test.step('User fills the email without "@" special character', async () => {
            await page.getByText('eMail Address').fill('prakash');
            await page.getByText('Password').click();
            await expect(page.locator('#mat-error-0'),'Entered Email is invalid, @ symbol is missing').toHaveText(' Please enter a valid email address');
        })
    })

    test('Verify the password must not be empty', async ({ page }) => {
        await test.step('User leaves the password field empty', async () => {
            await page.getByText('Password').click();
            await page.getByText('Name').click();
            await expect(page.getByText('Password is required'),'Password field must not be empty').toHaveText('Password is required');
        })
    })




    
})