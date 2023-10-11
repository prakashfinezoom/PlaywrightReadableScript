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

    });
    test('Verify the user can add all the invoice details successfully', async ({ page }) => {

        test.info().annotations.push(({
            type: 'Test',
            description: 'This test should add the invoice details such as invoice num, currency and amount in data grid page'
        }))
        await test.step('User clicks to Data grid option', async () => {
            await page.getByText('Data Grids').click();
        });
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
        await test.step('User clicks to Data grid option', async () => {
            await page.getByText('Data Grids').click();
        });
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
        await test.step('User clicks to Data grid option', async () => {
            await page.getByText('Data Grids').click();
        });
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
        await test.step('User clicks to Data grid option', async () => {
            await page.getByText('Data Grids').click();
        });
        await test.step('User clicks on the page 2 to navigate to the page 2 of data grid', async () => {
            await page.getByText('2').nth(0).click();
        })
        await test.step('User clicks on the last button to navigate to the last page of data grid', async () => {
            await page.getByText('Last').nth(0).click();
        })
        await test.step('User clicks on the first button to navigate to the last page of data grid', async () => {
            await page.getByText('First').nth(0).click();
        })
    })

    test('Verify the name must allow only maximum of 50 characters', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user should enter the name within 50 characters'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User tries to fills the name with more than 50 characters', async () => {
            await page.getByText('Name').fill('ASFDSGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafgs');
            const value = await page.getByText('Name').inputValue();
            const count = value.length;
            expect(count, 'Maximum characters for the name field should be 50').toBeLessThanOrEqual(50)
        })
    })

    test('Verify the name must allow minimum of 3 characters', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user enters the invalid name with less than 3 characters'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User tries to fills the name with less than 3 characters', async () => {
            await page.getByText('Name').fill('ss');
            await page.getByText('Password').click();
            await expect(page.getByText('Name must be 3 characters '), 'Minimum characters for the name field is 3').toHaveText('Name must be 3 characters ');
        })
    })

    test('Verify the email must contains "@" special character for valid email ID', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user enters the invalid EMail ID without @ symbol '
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User fills the email without "@" special character', async () => {
            await page.getByText('eMail Address').fill('prakash');
            await page.getByText('Password').click();
            await expect(page.locator('#mat-error-0'), 'Entered Email is invalid, @ symbol is missing').toHaveText(' Please enter a valid email address');
        })
    })

    test('Verify the password must not be empty', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user should not leave the password field empty'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User leaves the password field empty', async () => {
            await page.getByText('Password').click();
            await page.getByText('Name').click();
            await expect(page.getByText('Password is required'), 'Password field must not be empty').toHaveText('Password is required');
        })
    })
    test('Verify the text area must not be empty', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user should not leave the text area field empty'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User leaves the text area field empty', async () => {
            await page.getByText('Text Area ').click();
            await page.getByText('Name').click();
            await expect(page.getByText('Text Area is required'), 'Text field field must not be empty').toHaveText('Text Area is required');

        });
    });
    test('Verify the text area must allow minimum of 3 characters', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user enters the data in the text area with less than 3 characters'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User tries to fills data in text area with less than 3 characters', async () => {
            await page.getByText('Text Area ').fill('ss');
            await page.getByText('Password').click();
            await expect(page.getByText('Text Area must be at least 3 characters '), 'Minimum characters for the text area field is 3').toHaveText('Text Area must be at least 3 characters ');
        })
    })
    test('Verify the text area must allow only maximum of 50 characters', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user should enter data in the text area field within 50 characters'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User tries to fills the data in the text area field with more than 50 characters', async () => {
            await page.getByText('Text Area ').fill('ASFDSGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafgs');
            const value = await page.getByText('Text Area ').inputValue();
            const count = value.length;
            expect(count, 'Maximum characters for the text area field should be 50').toBeLessThanOrEqual(50)
        })
    })
    test('Verify the invalid mobile with less than 10 digits is not allowed', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user enters the invalid mobile number by passing less than 10 digits'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User fills the mobile number with less than 10 digits', async () => {
            await page.getByText('Mobile Number').fill('96666');
            await page.getByText('Password').click();
            await expect(page.getByText('Please enter valid value for Mobile Number '), 'Entered mobile number is invalid').toHaveText('Please enter valid value for Mobile Number ');
        })
    })
    test('Verify the invalid mobile with more than 10 digits is not allowed', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user enters the invalid mobile number by passing more than 10 digits'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User fills the mobile number with more than 10 digits', async () => {
            await page.getByText('Mobile Number').fill('966669666696666');
            await page.getByText('Password').click();
            await expect(page.getByText('Please enter valid value for Mobile Number '), 'Entered mobile number is invalid').toHaveText('Please enter valid value for Mobile Number ');
        })
    })
    test('Verify the terms and condition is clickable in logical tab', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user checks the terms and condition checkboxes in logical tab'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User clicks on the logical tab', async () => {
            await page.getByText('Logical').click();
        });
        await test.step('User clicks on the terms and condition checkbox', async () => {
            await page.getByText('I agree to the terms & conditions ').nth(0).click();
        })
    })
    test('Verify the user can save the records by clicking save button', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user saves the records by clicking save button in logical tab'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User clicks on the logical tab', async () => {
            await page.getByText('Logical').click();
        });
        await test.step('User clicks on the save button', async () => {
            await page.getByRole('button', { name: 'Save' }).click();
        })
        await test.step('User clicks on yes button', async () => {
            await page.getByRole('button', { name: 'Yes' }).click();
        })
    })
    test('Verify the checkbox is changing colour after selecting the options', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test user saves the records by clicking save button in logical tab'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User clicks on the logical tab', async () => {
            await page.getByText('Logical').click();
        })
        await test.step('user selects the apple', async () => {
            await page.getByText(' Apple ').nth(1).click();
            await expect(page.locator('#mat-button-toggle-1')).toHaveAttribute('class', /fg-bg-green-A700/);
        })

    })

    test('Verify the vertical radio button to be active after selecting the radio button', async ({ page }) => {
        test.info().annotations.push(({
            type: 'Test',
            description: 'In this test vertical radio button is active after selecting the button in logical tab'
        }))
        await test.step('User clicks on the form elements option', async () => {
            await page.getByText('Form Elements').click();
        });
        await test.step('User clicks on the logical tab', async () => {
            await page.getByText('Logical').click();
        })
        await test.step('user selects the apple', async () => {
            await page.getByRole('button',{name:'Apple'}).nth(1).click();
            await expect(page.getByRole('button',{name:'Apple'}).nth(1)).toHaveAttribute('class', /active/);
        })
    })


    });