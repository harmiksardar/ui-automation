//import assert from 'assert';
//import { expect } from 'chai';
var assert = require('assert');

describe('The internet', function () {

  it('should verify header in view', function () {
    browser.url('https://the-internet.herokuapp.com/');

    let headerInView = $('.heading').isDisplayedInViewport();
    console.log(headerInView);

  });

  it('should verify footer in view', function () {
    browser.url('https://the-internet.herokuapp.com/');

    let footerInView = $('#page-footer');
    footerInView.scrollIntoView();
    console.log(footerInView.isDisplayedInViewport());

  });

  it('should verify successful user login', function () {
    browser.url('https://the-internet.herokuapp.com/login');

    $('#username').setValue('tomsmith');
    $('#password').setValue('SuperSecretPassword!');
    $('#login button').click;
    $('#flash-messages').toHaveTextContaining('Your username is invalid!')
  });
});
