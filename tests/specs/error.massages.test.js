const registerPage = require('../pageobjects/register.page')
const assert = require('assert')
const faker = require('faker')

describe('Getting all error messages', ()=>{
    it('Username and password are empty', async ()=>{
        await registerPage.goToPageUrl()
        await registerPage.clickOnLoginBtn()

        assert.strictEqual(await registerPage.getEmptyUsernameText(), "Please enter username.")
        assert.strictEqual(await registerPage.getEmptyPasswordText(), "Please enter your password.")

        assert(await registerPage.checkEmptyPasswordDisplayed())
        assert(await registerPage.checkEmptyUsernameDisplayed())

    })
    it('Username is empty', async()=>{

        let randomPass = await faker.internet.password()
        await registerPage.setPassword(randomPass)
        await registerPage.clickOnLoginBtn()

        assert(await registerPage.checkEmptyUsernameDisplayed())
        assert.strictEqual(await registerPage.getEmptyUsernameText(), "Please enter username.")
    })

    it('Password is empty', async () =>{

        let randomEmail = await faker.internet.email()
        await registerPage.setUsernameValue(randomEmail)
        await registerPage.clickOnLoginBtn()

        let randomUName = await faker.internet.userName()
        await registerPage.setUsernameValue(randomUName)
        await registerPage.clickOnLoginBtn()

        assert(await registerPage.checkEmptyPasswordDisplayed())
        assert.strictEqual(await registerPage.getEmptyPasswordText(), "Please enter your password.")
    })
    it('Unknown user tries to login', async ()=>{

        let randomUName = await faker.internet.userName()
        await registerPage.setUsernameValue(randomUName)

        let randomPass = await faker.internet.password()
        await registerPage.setPassword(randomPass)

        await registerPage.clickOnLoginBtn()

        assert.strictEqual(await registerPage.getNoUserText(), "No account found with that username.")


        let randomEmail = await faker.internet.email()
        await registerPage.setUsernameValue(randomEmail)

        randomPass = await faker.internet.password()
        await registerPage.setPassword(randomPass)

        await registerPage.clickOnLoginBtn()

        assert.strictEqual(await registerPage.getNoUserText(), "No account found with that username.")


    })
})