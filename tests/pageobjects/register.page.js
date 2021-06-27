class RegisterPage {

    get PageUrl() {return 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php'}

    get Logomini() {
        return $('#logomini')
    }

    get Header() {
        return $('//*[text() = "QA Portal Login"]')
    }

    get UserNameField() {
        return $('[name="username"]')
    }

    get PassField() {
        return $('[name="password"]')
    }

    get LoginBtn() {
        return $('[type=submit]')
    }



    async goToPageUrl(){
        let directToDefinedUrl = await browser.url(this.PageUrl)
        return directToDefinedUrl
    }

    async checkLogoDisplayed() {
        let logoDisplayed = await (
            await this.Logomini).isDisplayed()
        return logoDisplayed
    }

    async getSizeLogo(value) {
        let sizeLogo = await (
            await this.Logomini).getSize(value)
        return sizeLogo
    }

    async getHeaderText() {
        let headerText = await (
            await this.Header).getText()
        return headerText
    }

    async checkUserNameFieldClickable() {
        let userNameFieldIsClickable = await (
            await this.UserNameField).isClickable()
        return userNameFieldIsClickable
    }

    async getUserNameFieldAttribute(value) {
        let userFieldAttribute = await (
            await this.UserNameField).getAttribute(value)
        return userFieldAttribute
    }

    async checkPassFieldClickable() {
        let passFieldIsClickable = await (
            await this.PassField).isClickable()
        return passFieldIsClickable
    }

    async getPassFieldAttribute(value) {
        let passFieldAttribute = await (
            await this.PassField).getAttribute(value)
        return passFieldAttribute
    }

    async checkLogBtnClickable() {
        let logBtnClickable = await (
            await this.LoginBtn).isClickable()
        return logBtnClickable
    }
    async getLogBtnAttribute(value) {
        let logBtnAttribute = await (
            await this.LoginBtn).getAttribute(value)
        return logBtnAttribute
    }

}
module.exports = new RegisterPage()