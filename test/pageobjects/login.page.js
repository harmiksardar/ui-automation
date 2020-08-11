const Page = require('./page')

class InternetPage extends Page {
  //these helper funtions are for login.js
  get username () { return $('#username') }
  get password () { return $('#password') }
  get submitButton () { return $('#login button') }
  get flash () { return $('#flash') }

  submit() {
       this.submitButton.click()
   }

  //these helper funtions are for harmik.js
  get firstCheckbox () { return $('#checkboxes input:first-Child') }
  get lastCheckbox () { return $('#checkboxes input:last-Child') }

  get addElement () { return $('#content button') }
  get deleteElement () { return $("#elements button:nth-child(1)") }
  
}
module.exports = new InternetPage();
