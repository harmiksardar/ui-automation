class Page {
  open (path) {
    browser.url('https://the-internet.herokuapp.com/login')
  }
}
module.exports = Page;
