const LoginPage = require('../pageobjects/login.page')

  describe('Authentication via login form', () => {
    it('should deny access with incorrect credentials', function () {
        LoginPage.open()
        LoginPage.username.setValue('foo')
        LoginPage.password.setValue('bar')
        LoginPage.submit()

        expect(LoginPage.flash).toHaveTextContaining('Your username is invalid!')
      })

    it('should allow access with correct creds', () => {
        LoginPage.open()
        LoginPage.username.setValue('tomsmith')
        LoginPage.password.setValue('SuperSecretPassword!')
        LoginPage.submit()

        expect(LoginPage.flash).toHaveTextContaining('You logged into a secure area!')
      })
})
