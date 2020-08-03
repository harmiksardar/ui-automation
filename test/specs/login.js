const InternetPage = require('../pageobjects/login.page')

  describe('Authentication via login form', () => {
    it('should deny access with incorrect credentials', function () {
        InternetPage.open()
        InternetPage.username.setValue('foo')
        InternetPage.password.setValue('bar')
        InternetPage.submit()

        expect(InternetPage.flash).toHaveTextContaining('Your username is invalid!')
      })

    it('should allow access with correct creds', () => {
        InternetPage.open()
        InternetPage.username.setValue('tomsmith')
        InternetPage.password.setValue('SuperSecretPassword!')
        InternetPage.submit()

        expect(InternetPage.flash).toHaveTextContaining('You logged into a secure area!')
      })
})
