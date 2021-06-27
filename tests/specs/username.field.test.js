const registerPage = require('../pageobjects/register.page')
const assert = require('assert')
const faker = require('faker')

describe('Testing username under difference data', () => {
    it('Sending random pass to password field and random email to username field', async () => {
        await registerPage.goToPageUrl()

        let randomEmail = await faker.internet.email()
        await registerPage.setUsernameValue(randomEmail)

        let randomPass = await faker.internet.password()
        await registerPage.setPassword(randomPass)

        await browser.pause(950)

        await registerPage.clickOnLoginBtn()

        await browser.pause(950)


    })

    it('Sending random pass to password field and random name to username field', async () => {
        await registerPage.goToPageUrl()

        let randomUName = await faker.internet.userName()
        await registerPage.setUsernameValue(randomUName)

        let randomPass = await faker.internet.password()
        await registerPage.setPassword(randomPass)

        await registerPage.clickOnLoginBtn()

        await browser.pause(950)

        console.log("EMAIL:", randomUName, "\nPASS: ", randomPass)

    })
})