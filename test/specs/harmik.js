//import assert from 'assert';
//import { expect } from 'chai';
var assert = require('assert');

describe('The internet', function () {

  it('should test header in view', function () {
    browser.url('https://the-internet.herokuapp.com/');

    let headerInView = $('.heading').isDisplayedInViewport();
    console.log(headerInView);

  });

  it('should test footer in view', function () {
    browser.url('https://the-internet.herokuapp.com/');

    let footerInView = $('#page-footer').isDisplayedInViewport();
    console.log(footerInView);

  });
});
