const Page = require('./page')

class InternetPage extends Page {
  //define elements
  get username () { return $('#username') }
  get password () { return $('#password') }
  get submitButton () { return $('#login button') }
  get flash () { return $('#flash') }

  //these getter funtions are for harmik.js
  get firstCheckbox () { return $('#checkboxes input:first-Child') }
  get lastCheckbox () { return $('#checkboxes input:last-Child') }

  //define or iverwrite page methods
  //open() { super.open('login') }
  submit() {
       this.submitButton.click()
   }
}
module.exports = new InternetPage();
