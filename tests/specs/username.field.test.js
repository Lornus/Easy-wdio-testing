const registerPage = require('../pageobjects/register.page')
const assert = require('assert')
const faker = require('faker')

describe('Testing username and password under difference data', () => {
    it('Sending random pass to password field and random email to username field', async () => {
        await registerPage.goToPageUrl()

        let randomEmail = await faker.internet.email()
        await registerPage.setUsernameValue(randomEmail)

        let randomPass = await faker.internet.password()
        await registerPage.setPassword(randomPass)

        await registerPage.clickOnLoginBtn()

        assert.strictEqual(await registerPage.getNoUserText(), "No account found with that username.")


    })

    it('Sending random pass to password field and random name to username field', async () => {
        await registerPage.goToPageUrl()

        let randomUName = await faker.internet.userName()
        await registerPage.setUsernameValue(randomUName)

        let randomPass = await faker.internet.password()
        await registerPage.setPassword(randomPass)

        await registerPage.clickOnLoginBtn()

        assert.strictEqual(await registerPage.getNoUserText(), "No account found with that username.")
    })
})
