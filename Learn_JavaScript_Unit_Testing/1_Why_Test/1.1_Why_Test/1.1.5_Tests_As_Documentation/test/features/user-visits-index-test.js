const { assert } = require('chai');

describe('User visits index', () => {
    describe('to post an order', () => {
        /*
         * Run `npm start` in the terminal and reload the page. Expect the webpage to be visible and the order form to be empty.
         */
        it('starts with a blank order (Behavior 1)', () => {
            browser.url('/');

            assert.equal(browser.getText('#deliver-to span'), '');
            assert.equal(browser.getText('#cake-type span'), '');
            assert.equal(browser.getText('#fillings span'), '');
            assert.equal(browser.getText('#size span'), '');
        });

        /*
         * Type a name and click "Place Order". Expect "Deliver to:" to display the submitted name. (You may need to scroll down.)
         */
        it('displays the submitted name (Behavior 2)', () => {
            const name = 'Hungry Person';

            browser.url('/');
            browser.setValue('#name', name);
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#deliver-to'), name);
        });

        it('does not overwrite name if blank name submitted (Behavior 3)', () => {
            const name = 'Hungry Person';

            browser.url('/');
            browser.setValue('#name', name);
            browser.click('#submit-order');
            browser.url('/');
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#deliver-to'), name);
        });

        /*
         * Select a cake type and place the order. Expect "Cake" to display the selected type.
         */
        it('displays the selected cake type (Behavior 4)', () => {
            const cakeType = 'Whole Wheat';

            browser.url('/');
            browser.click('#whole-wheat');
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#cake-type'), cakeType);
        });

        /*
         * Check some fillings. Expect "Fillings" to display your selection.
         */
        it('displays multiple fillings (Behavior 5)', () => {
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

        /*
         * Choose a stack size. Expect "Pancake Count:" to display the number equivalent to the stack size, e.g. "Double" is "2".
         */
        it('displays the number equivalent to the stack size (Behavior 6)', () => {
            const optionText = 'Septuple Stack';
            const optionNum = '7';

            browser.url('/');
            browser.selectByVisibleText('#select-stack', optionText)
            browser.click('#submit-order');
            browser.url('/');

            assert.include(browser.getText('#size'), optionNum);
        });
    });

    // Add "clear order" test here
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

            assert.equal(browser.getText('#deliver-to'), '');
            assert.equal(browser.getText('#cake-type'), '');
            assert.equal(browser.getText('#fillings'), '');
            assert.equal(browser.getText('#size'), '');
            assert.equal(browser.getText('#pickUp'), '');
        });
    });

});
