const { assert } = require('chai');
const { jsdom } = require('jsdom');

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
        return selectedElement.textContent;
    } else {
        throw new Error(`No element with selector ${selector} found in HTML string`);
    }
};

describe('User visits index', () => {
    describe('to post an order', () => {
        it('starts with a blank order', () => {
            browser.url('/');

            assert.equal(browser.getText('#deliver-to span'), '');
            assert.equal(browser.getText('#cake-type span'), '');
            assert.equal(browser.getText('#fillings span'), '');
            assert.equal(browser.getText('#size span'), '');
        });

        // Add the 'outside of working hours' test here
        it('shows an error message when outside of working hours', () => {
            const earlyTime = '7:00';
            const lateTime = '13:00';

            browser.url('/');

            const HTML = browser.getHTML('body');
            const parsedHTML = parseTextFromHTML(HTML, '#select-pickUp');

            assert.notInclude(parsedHTML, earlyHr);
            assert.notInclude(parsedHTML, lateHr);
        });

        // Add the 'displays the selected hour' test here
        it('displays the selected hour', () => {
            const hour = '9:00';

            browser.url('/');
            browser.selectByVisibleText('#select-pickUp', hour);
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#pickUp'), hour);
        });



        // Add the 'labels the pick up hour' test here
        it('labels the pick up hour correctly', () => {
            const label = 'pick up time:';

            browser.url('/');
            const HTML = browser.getHTML('body');
            const parsedHTML = parseTextFromHTML(HTML, '#pickUp');

            assert.include(parsedHTML, label);
        });

        it('accepts the customer name', () => {
            const name = 'Hungry Person';

            browser.url('/');
            browser.setValue('#name', name);
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#deliver-to'), name);
        });

        it('accepts the cake type', () => {
            const cakeType = 'Whole Wheat';

            browser.url('/');
            browser.click('#whole-wheat');
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#cake-type'), cakeType);
        });

        it('accepts multiple fillings', () => {
            const firstChoice = 'Strawberries';
            const secondChoice = 'Banana';

            browser.url('/');
            browser.click('#strawberries');
            browser.click('#banana');
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#fillings'), firstChoice);
            assert.include(browser.getText('#fillings'), secondChoice);
        });

        it('accepts the stack size', () => {
            const optionText = 'Double Stack';
            const optionNum = '2';

            browser.url('/');
            browser.selectByVisibleText('#select-stack', optionText)
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#size'), optionNum);
        });
    });

    describe('to clear an order', () => {
        it('deletes the selected options', () => {
            const name = 'Indecisive Person';
            const time = '10:00';

            browser.url('/');
            browser.setValue('#name', name);
            browser.selectByVisibleText('#select-pickUp', time)
            browser.click('#submit-order');
            browser.click('#clear-order');
            browser.url('/');

            assert.equal(browser.getText('#deliver-to span'), '');
            assert.equal(browser.getText('#cake-type span'), '');
            assert.equal(browser.getText('#fillings span'), '');
            assert.equal(browser.getText('#size span'), '');
        });
    });
});
