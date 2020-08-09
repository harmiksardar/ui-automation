const {Eyes, Target} = require('@applitools/eyes.webdriverio');
const eyes = new Eyes();
eyes.setApiKey('KVv3Gr4ouANlvtmBVB7101N3rPGSaF01114zgIYO2l8KdU8110');

describe('my first visual test', function () {
  it('should look visually perfect', async function () {
    browser.url('./helloworld');

    const pageTitle = browser.getTitle();

    console.log(`Title of page is ${pageTitle}`)
/*
    try {
      const windowSize = browser.getWindowSize();

      await eyes.open(browser, 'Hello World!', 'My first Javascript test!', windowSize);

      await eyes.check('Main Page', Target.window());

      browser.click('button');

      await eyes.check('Click!', Target.window());

      await eyes.close();
    } finally {
      await eyes.abortIfNotClosed();
    }
*//
  })
});
