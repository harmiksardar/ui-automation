const Page = require('./page')

class LoginPage extends Page {
  //define elements
  get username () { return $('#username') }
  get password () { return $('#password') }
  get submitButton () { return $('#login button') }
  get flash () { return $('#flash') }
  //define or iverwrite page methods
  open() {
       super.open('login')
   }

   submit() {
       this.submitButton.click()
   }
}
module.exports = new LoginPage();
