//import assert from 'assert';
//import { expect } from 'chai';
var assert = require('assert')
const InternetPage = require('../pageobjects/login.page')

describe('The internet', function () {

  it('should verify header in view', function () {
    browser.url('https://the-internet.herokuapp.com/')

    let headerInView = $('.heading').isDisplayedInViewport()
    console.log(headerInView);

  })

  it('should verify check-box selection', function () {
    browser.url('https://the-internet.herokuapp.com/checkboxes')

    InternetPage.firstCheckbox.click()
    expect(InternetPage.firstCheckbox).toBeSelected()

    InternetPage.lastCheckbox.click()
    expect(InternetPage.lastCheckbox).not.toBeSelected()

  })
})
