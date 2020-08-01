//import assert from 'assert';
//import { expect } from 'chai';
var assert = require('assert');

describe('Login Page', function () {
  it('should let you login to testyourlogin!!', function () {
    browser.url('http://testyourlog.in/example');
    $('input[name="email"]').setValue('valid@user.com');
    $('input[name="password"]').setValue('hunter2');
    //$('.button=Login').click;
    $('input[name="email"]').submitForm;
    assert.equal(browser.getUrl(), 'http://testyourlog.in/example/');
  });
});
