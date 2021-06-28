const registerPage = require('../pageobjects/register.page')
const assert = require('assert')

describe('Verifying all elements are on page', () => {
        it('Verifying url is correct', async () => {
            await registerPage.goToPageUrl()
            assert.strictEqual(await browser.getUrl(), 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
        })

        it('Checking logo displayed correctly', async () => {
            assert(await registerPage.checkLogoDisplayed(), "Logo displays incorrectly")
            assert.strictEqual(await registerPage.getSizeLogo('height'), 81)
            assert.strictEqual(await registerPage.getSizeLogo('width'), 189)
        })

        it('Verifying h1 element is displayed correctly', async () => {
            assert.strictEqual(await registerPage.getHeaderText(), 'QA Portal Login')

        })

        it('Checking username field displayed correctly', async () => {
            assert(await registerPage.checkUserNameFieldClickable(), "Username field broken or different")
            assert.strictEqual(await registerPage.getUserNameFieldAttribute('placeholder'), "Username")
        })

        it('Verifying password field displayed correctly', async () => {
            assert(await registerPage.checkPassFieldClickable(), "Password field broken or different")
            assert.strictEqual(await registerPage.getPassFieldAttribute('placeholder'), "Password")
        })
    it('Checking login button displayed correctly', async () => {
        assert(await registerPage.checkLogBtnClickable(), "Login button broken or different")
        assert.strictEqual(await registerPage.getLogBtnAttribute('value'), "Login", "Login button broken or different" )
    })
    }
)
